import React from "react";

class Icon extends React.Component {
  render() {
    return (
      <svg
        fill={this.props.color}
        width={`${this.props.width}px`}
        height={`${this.props.height}px`}
        style={this.props.style}
        viewBox="0 0 512 512"
      >
        <g>
          <circle className="st0" cx="259.7" cy="68.1" r="45.6" />
          <path
            className="st0"
            d="M194,195.8c-7-7.6-11-17.7-10.9-28.2c0-1.5,0.1-3,0.3-4.4h-30.3v142.3h45.6L194,195.8z"
          />
          <polygon
            className="st0"
            points="211.7,329.9 197.1,489.5 231.8,489.5 265.1,351.2 263.2,350.4  "
          />
          <path
            className="st0"
            d="M236.6,144c-4.1-2.1-8.3-3.1-12.5-3.1c-8.5,0-16.6,4.1-21.6,10.8c-0.6,0.8-1.1,1.6-1.6,2.4   c-1.6,2.7-2.8,5.7-3.3,9c-0.3,1.5-0.4,3-0.4,4.6c-0.1,8.6,4,16.6,10.6,21.7c1.6,1.2,3.4,2.3,5.4,3.2l39.4,15.5l32.3,12.7l26,10.2   l83.9-56.5l-13.8-22.6l-75.6,33.3L236.6,144z"
          />
          <polygon
            className="st0"
            points="283.9,235.5 247.4,221.1 208.4,205.8 212.7,305.5 213.1,315.4 268.4,337.4 276,340.5 321.1,358.5    332.6,489.5 367,489.5 380.9,328.6 281.5,274.4  "
          />
          <rect className="st0" height="91.6" width="21.8" x="117.3" y="214" />
          <path
            className="st0"
            d="M187.6,149.2c0.4-0.8,0.8-1.5,1.3-2.3l0.4-0.7l0.5-0.6c0.2-0.3,0.4-0.6,0.6-0.9l0.4-0.7l0.5-0.7   c3.8-5,8.7-9.1,14.2-11.9c-2.9-11.8-13.5-20.5-26.2-20.5c-14.9,0-27,12.1-27,27c0,4,0.9,7.9,2.5,11.3H187.6z"
          />
        </g>
      </svg>
    );
  }
}

Icon.defaultProps = {
  width: 35,
  height: 35,
  color: "#fff"
};

export default Icon;
