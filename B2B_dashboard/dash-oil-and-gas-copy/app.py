# Import required libraries
import pickle
import copy
import pathlib
import dash
import math
import datetime as dt
import pandas as pd
from dash.dependencies import Input, Output, State, ClientsideFunction
import dash_core_components as dcc
import dash_html_components as html
import json
import plotly.graph_objs as go
import plotly.express as px

# Multi-dropdown options
from controls import COUNTIES, WELL_STATUSES, WELL_TYPES, WELL_COLORS

# get relative data folder
PATH = pathlib.Path(__file__).parent
DATA_PATH = PATH.joinpath("data").resolve()

app = dash.Dash(
    __name__, meta_tags=[{"name": "viewport", "content": "width=device-width"}]
)
server = app.server

# # Create controls
# county_options = [
#     {"label": str(COUNTIES[county]), "value": str(county)} for county in COUNTIES
# ]
#
# well_status_options = [
#     {"label": str(WELL_STATUSES[well_status]), "value": str(well_status)}
#     for well_status in WELL_STATUSES
# ]
#
# well_type_options = [
#     {"label": str(WELL_TYPES[well_type]), "value": str(well_type)}
#     for well_type in WELL_TYPES
# ]


# # Load data
# df = pd.read_csv(DATA_PATH.joinpath("wellspublic.csv"), low_memory=False)
# df["Date_Well_Completed"] = pd.to_datetime(df["Date_Well_Completed"])
# df = df[df["Date_Well_Completed"] > dt.datetime(1960, 1, 1)]
#
# trim = df[["API_WellNo", "Well_Type", "Well_Name"]]
# trim.index = trim["API_WellNo"]
# dataset = trim.to_dict(orient="index")
#
# points = pickle.load(open(DATA_PATH.joinpath("points.pkl"), "rb"))


# Create global chart template
#mapbox_access_token = "pk.eyJ1IjoiamFja2x1byIsImEiOiJjajNlcnh3MzEwMHZtMzNueGw3NWw5ZXF5In0.fk8k06T96Ml9CLGgKmk81w"

# layout = dict(
#     autosize=True,
#     automargin=True,
#     margin=dict(l=30, r=30, b=20, t=40),
#     hovermode="closest",
#     plot_bgcolor="#f9f9f9",
#     paper_bgcolor="#f9f9f9",
#     legend=dict(font=dict(size=10), orientation="h"),
#     title="Satellite Overview",
#     mapbox=dict(
#         #accesstoken=mapbox_access_token,
#         style="light",
#         center=dict(lon=-78.05, lat=42.54),
#         zoom=7,
#     ),
# )

# Create app layout
app.layout = html.Div(
    [
        dcc.Store(id="aggregate_data"),
        # empty Div to trigger javascript file for graph resizing
        html.Div(id="output-clientside"),
        html.Div(
            [
                html.Div(
                    [
                        html.Img(
                            src=app.get_asset_url("dash-logo.png"),
                            id="plotly-image",
                            style={
                                "height": "60px",
                                "width": "auto",
                                "margin-bottom": "25px",
                            },
                        )
                    ],
                    className="one-third column",
                ),
                html.Div(
                    [
                        html.Div(
                            [
                                html.H3(
                                    "Nuuksio National Park",
                                    style={"margin-bottom": "0px",
                                           "fontColor": "#F77064"},
                                ),
                                html.H5(
                                    "Visitors Overview", style={"margin-top": "0px",
                                                                "fontColor": "#F77064"}
                                ),
                            ]
                        )
                    ],
                    className="one-half column",
                    id="title",
                ),
            ],
            id="header",
            className="row flex-display",
            style={"margin-bottom": "25px"},
        ),
        html.Div(
            [
                html.Div(
                    [
                        html.P(
                            "Choose the time period (2015):",
                            className="control_label",
                        ),
                        dcc.RangeSlider(
                            id="year_slider",
                            min=1,
                            max=12,
                            marks={
                                1: 'Jan',
                                2: 'Feb',
                                3: 'Mar',
                                4: 'Apr',
                                5: 'May',
                                6: 'Jun',
                                7: 'Jul',
                                8: 'Aug',
                                9: 'Sep',
                                10: 'Oct',
                                11: 'Nov',
                                12: 'Dec'
                            },
                            #value=[1, 6, 12],
                            className="dcc_control",
                        ),
                        html.P(id='output-container-range-slider')
                    ],
                    className="pretty_container twelve columns",
                    id="cross-filter-options",
                ),
            ],
            className="row flex-display",
        ),
        html.Div(
            [
                html.Div(
                    [dcc.Graph(id="check_in_stats")],
                    className="pretty_container six columns",
                ),
                html.Div(
                    [dcc.Graph(id="map_check_in")],
                    className="pretty_container six columns",
                ),
            ],
            className="row flex-display",
        ),

        html.Div(
            [
                html.Div(
                    [dcc.Graph(id="location_twitter_graph")],
                    className="pretty_container twelve columns",
                ),
            ],
            className="row flex-display",
        ),

        html.Div(
            [
                html.Div(
                    [dcc.Graph(id="hobbys_graph")],
                    className="pretty_container six columns",
                ),
                html.Div(
                    [dcc.Graph(id="trail_complexity_graph")],
                    className="pretty_container six columns",
                ),
            ],
            className="row flex-display",
        ),
        html.Div(
            [dcc.Graph(id="likes_graph")],
            className="pretty_container twelve columns",
        ),
    ],
    id="mainContainer",
    style={"display": "flex", "flex-direction": "column"},
)


# Helper functions

def filter_dataframe_last_row(columns, year_slider):
    months_map = {
                1: 'January',
                2: 'February',
                3: 'March',
                4: 'April',
                5: 'May',
                6: 'June',
                7: 'July',
                8: 'August',
                9: 'September',
                10: 'October',
                11: 'November',
                12: 'December'
            }

    # if year_slider is not None:
    month_letters = [months_map[element] for element in year_slider]

    for_user_overview = pd.read_csv('data/mock_data_filters.csv', header=0)
    selected = for_user_overview.loc[for_user_overview['month'].isin(month_letters)]
    return selected[columns]


# # Create callbacks

# @app.callback(
#     dash.dependencies.Output('output-container-range-slider', 'children'),
#     [dash.dependencies.Input('year_slider', 'value')])
# def update_output(value):
#     return 'You have selected "{}"'.format(value)


@app.callback(
    Output("location_twitter_graph", "figure"),
    [
        Input("year_slider", "value"),
    ],
)
def make_twitter_figure(year_slider):

    if year_slider is None:
        year_slider = [1, 1]

    months_map = {
                1: 'January',
                2: 'February',
                3: 'March',
                4: 'April',
                5: 'May',
                6: 'June',
                7: 'July',
                8: 'August',
                9: 'September',
                10: 'October',
                11: 'November',
                12: 'December'
            }

    # if year_slider is not None:
    month_letters = [months_map[element] for element in year_slider]

    for_twitter_location = pd.read_csv('data/twitter_location_df.csv', header=0)
    selected = for_twitter_location.loc[for_twitter_location['month'].isin(month_letters)]

    fig = px.bar(selected, x='country', y='count')

    fig.update_traces(marker_color='#F45587', marker_line_color='black',
                      marker_line_width=1.5, opacity=0.8)
    fig.update_layout(plot_bgcolor='#f9f9f9', title_text='Tourists countries per: ' + ' - '.join(month_letters))

    return fig


@app.callback(
    Output("check_in_stats", "figure"),
    [
        Input("year_slider", "value"),
    ],
)
def make_check_in_stats(year_slider):

    if year_slider is None:
        year_slider = [1, 1]

    months_map = {
                1: 'January',
                2: 'February',
                3: 'March',
                4: 'April',
                5: 'May',
                6: 'June',
                7: 'July',
                8: 'August',
                9: 'September',
                10: 'October',
                11: 'November',
                12: 'December'
            }

    # if year_slider is not None:
    month_letters = [months_map[element] for element in year_slider]

    entrance_data = pd.read_csv('data/monthly_data_entrances_2015.csv', header=0, index_col=0)
    entrance_data['month'] = entrance_data['month'].map(months_map)
    entrance_data['month'] = pd.Categorical(entrance_data['month'], ["January", "February", "March",
                                                                      "April", "May", "June", "July",
                                                                      "August", "September", "October",
                                                                      "November", "December"])
    aggregated = entrance_data.groupby('month', as_index=False).sum()
    for_selecting = [months_map[i+1] for i in range(year_slider[1])]
    selected = aggregated.loc[aggregated['month'].isin(for_selecting)]

    fig = px.bar(selected, x='month', y='Visits')

    fig.update_traces(marker_color='#F45587', marker_line_color='black',
                      marker_line_width=1.5, opacity=0.8)
    fig.update_layout(plot_bgcolor='#f9f9f9', title_text='N of tourists per: ' + ' - '.join(month_letters))

    return fig


@app.callback(
    Output("map_check_in", "figure"),
    [
        Input("year_slider", "value"),
    ],
)
def make_map_stats(year_slider):


    year_slider = [1, 12]

    months_map = {
                1: 'January',
                2: 'February',
                3: 'March',
                4: 'April',
                5: 'May',
                6: 'June',
                7: 'July',
                8: 'August',
                9: 'September',
                10: 'October',
                11: 'November',
                12: 'December'
            }

    # if year_slider is not None:
    month_letters = [months_map[element] for element in year_slider]

    entrance_data = pd.read_csv('data/monthly_data_entrances_2015 (1).csv', header=0, index_col=0)
    entrance_data['month'] = entrance_data['month'].map(months_map)
    entrance_data['month'] = pd.Categorical(entrance_data['month'], ["January", "February", "March",
                                                                      "April", "May", "June", "July",
                                                                      "August", "September", "October",
                                                                      "November", "December"])

    for_selecting = [months_map[i + 1] for i in range(year_slider[1])]
    print(for_selecting)
    selected = entrance_data.loc[entrance_data['month'].isin(for_selecting)]
    print(entrance_data)
    print(selected)

    px.set_mapbox_access_token("pk.eyJ1IjoiamFja2x1byIsImEiOiJjajNlcnh3MzEwMHZtMzNueGw3NWw5ZXF5In0.fk8k06T96Ml9CLGgKmk81w")

    fig = px.scatter_mapbox(selected, lat="lat", lon="long", color="Visits", hover_name="CounterID_ASTA",
                            animation_frame="month", size="Visits", hover_data=["month"],
                            color_continuous_scale=px.colors.cmocean.phase)
    fig.update_layout(title_text='Popularity of the check-in points during the year 2015')

    return fig


@app.callback(
    Output("hobbys_graph", "figure"),
    [
        Input("year_slider", "value"),
    ],
)
def make_hobbys_graph(year_slider):

    if year_slider is None:
        year_slider = [1, 1]

    months_map = {
                1: 'January',
                2: 'February',
                3: 'March',
                4: 'April',
                5: 'May',
                6: 'June',
                7: 'July',
                8: 'August',
                9: 'September',
                10: 'October',
                11: 'November',
                12: 'December'
            }

    # if year_slider is not None:
    month_letters = [months_map[element] for element in year_slider]

    entrance_data = pd.read_csv('data/mock_data_filters.csv', header=0, index_col=False)
    entrance_data['month'] = entrance_data['month'].map(months_map)
    entrance_data['month'] = pd.Categorical(entrance_data['month'], ["January", "February", "March",
                                                                      "April", "May", "June", "July",
                                                                      "August", "September", "October",
                                                                      "November", "December"])

    for_selecting = [months_map[i + 1] for i in range(year_slider[1])]
    selected = entrance_data.loc[entrance_data['month'].isin(for_selecting)]

    fig = go.Figure()
    fig.add_trace(go.Bar(
        x=selected['month'],
        y=selected['hiking_likes'],
        name='Hiking Likes',
        marker_color='#FB9F62'
    ))
    fig.add_trace(go.Bar(
        x=selected['month'],
        y=selected['cycling_likes'],
        name='Cycling Likes',
        marker_color='#F77064'
    ))
    fig.add_trace(go.Bar(
        x=selected['month'],
        y=selected['fishing_likes'],
        name='Fishing Likes',
        marker_color='#F45587'
    ))

    fig.update_traces(marker_line_color='black',
                      marker_line_width=1.5, opacity=0.8)
    fig.update_layout(plot_bgcolor='#f9f9f9', title_text='N of activities enjoyed per: ' + ' - '.join(month_letters))

    return fig


@app.callback(
    Output("trail_complexity_graph", "figure"),
    [
        Input("year_slider", "value"),
    ],
)
def make_trails_graph(year_slider):

    if year_slider is None:
        year_slider = [1, 1]

    months_map = {
                1: 'January',
                2: 'February',
                3: 'March',
                4: 'April',
                5: 'May',
                6: 'June',
                7: 'July',
                8: 'August',
                9: 'September',
                10: 'October',
                11: 'November',
                12: 'December'
            }

    # if year_slider is not None:
    month_letters = [months_map[element] for element in year_slider]

    entrance_data = pd.read_csv('data/mock_data_filters.csv', header=0, index_col=False)
    entrance_data['month'] = entrance_data['month'].map(months_map)
    entrance_data['month'] = pd.Categorical(entrance_data['month'], ["January", "February", "March",
                                                                      "April", "May", "June", "July",
                                                                      "August", "September", "October",
                                                                      "November", "December"])

    for_selecting = [months_map[i + 1] for i in range(year_slider[1])]
    selected = entrance_data.loc[entrance_data['month'].isin(for_selecting)]

    fig = go.Figure()
    fig.add_trace(go.Bar(
        x=selected['month'],
        y=selected['easy_trails'],
        name='Easy trail',
        marker_color='#FB9F62'
    ))
    fig.add_trace(go.Bar(
        x=selected['month'],
        y=selected['moderate_trails'],
        name='Moderate trail',
        marker_color='#F77064'
    ))
    fig.add_trace(go.Bar(
        x=selected['month'],
        y=selected['challenging_trails'],
        name='Challenging trail',
        marker_color='#F45587'
    ))

    fig.update_traces(marker_line_color='black',
                      marker_line_width=1.5, opacity=0.8)
    fig.update_layout(plot_bgcolor='#f9f9f9', title_text='N of trail complexities done per: ' + ' - '.join(month_letters))

    return fig

@app.callback(
    Output("likes_graph", "figure"),
    [
        Input("year_slider", "value"),
    ],
)
def make_likes_graph(year_slider):

    if year_slider is None:
        year_slider = [1, 1]

    months_map = {
                1: 'January',
                2: 'February',
                3: 'March',
                4: 'April',
                5: 'May',
                6: 'June',
                7: 'July',
                8: 'August',
                9: 'September',
                10: 'October',
                11: 'November',
                12: 'December'
            }

    # if year_slider is not None:
    month_letters = [months_map[element] for element in year_slider]

    entrance_data = pd.read_csv('data/mock_data_filters.csv', header=0, index_col=False)
    entrance_data['month'] = entrance_data['month'].map(months_map)
    entrance_data['month'] = pd.Categorical(entrance_data['month'], ["January", "February", "March",
                                                                      "April", "May", "June", "July",
                                                                      "August", "September", "October",
                                                                      "November", "December"])

    for_selecting = [months_map[i + 1] for i in range(year_slider[1])]
    selected = entrance_data.loc[entrance_data['month'].isin(for_selecting)]

    fig = go.Figure()
    fig.add_trace(go.Bar(
        x=selected['month'],
        y=selected['lodging_likes'],
        name='Lodging',
        marker_color='#FB9F62'
    ))
    fig.add_trace(go.Bar(
        x=selected['month'],
        y=selected['waterside_likes'],
        name='Watersides',
        marker_color='#81BEF7'
    ))
    fig.add_trace(go.Bar(
        x=selected['month'],
        y=selected['natural_landmark_likes'],
        name='Natural landmarks',
        marker_color='#A9F5BC'
    ))
    fig.add_trace(go.Bar(
        x=selected['month'],
        y=selected['animals_likes'],
        name='Animals',
        marker_color='#F66276'
    ))
    fig.add_trace(go.Bar(
        x=selected['month'],
        y=selected['meadow_likes'],
        name='Meadows',
        marker_color='#0431B4'
    ))
    fig.add_trace(go.Bar(
        x=selected['month'],
        y=selected['outdoor_activity_likes'],
        name='Outdoor activities',
        marker_color='#FF8000'
    ))
    fig.add_trace(go.Bar(
        x=selected['month'],
        y=selected['health_fitness_likes'],
        name='Health & Fitness',
        marker_color='#088A85'
    ))
    fig.add_trace(go.Bar(
        x=selected['month'],
        y=selected['food_likes'],
        name='Food',
        marker_color='#DA81F5'
    ))

    fig.update_traces(marker_line_color='black',
                      marker_line_width=1.5, opacity=0.8)
    fig.update_layout(plot_bgcolor='#f9f9f9', title_text='N of sightseeings liked per: ' + ' - '.join(month_letters))

    return fig


# Main
if __name__ == "__main__":
    app.run_server(debug=True)
