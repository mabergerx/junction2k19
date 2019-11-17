import React from "react";

class Icon extends React.Component {
  render() {
    return (
      <svg
        fill={this.props.color}
        width={`${this.props.width}px`}
        height={`${this.props.height}px`}
        style={this.props.style}
        viewBox="0 0 40 40"
      >
        <g>
          <path d="M7.2,40c-0.6,0-1-0.4-1-1V17.6c0-0.6,0.4-1,1-1s1,0.4,1,1V39C8.2,39.6,7.7,40,7.2,40z" />
        </g>
        <g>
          <path d="M8.2,5.6V1c0-0.6-0.5-1-1-1c-0.6,0-1,0.4-1,1v4.6c-2,0.5-3.5,2.3-3.5,4.4c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5   C11.7,7.9,10.2,6.1,8.2,5.6z M7.2,12.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5S9.7,8.6,9.7,10C9.7,11.4,8.6,12.5,7.2,12.5z" />
        </g>
        <g>
          <path d="M34.2,10.6V1c0-0.6-0.5-1-1-1c-0.6,0-1,0.4-1,1v9.6c-2,0.5-3.5,2.3-3.5,4.4c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5   C37.7,12.9,36.2,11.1,34.2,10.6z M33.2,17.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5   C35.7,16.4,34.6,17.5,33.2,17.5z" />
        </g>
        <g>
          <path d="M33.2,40c-0.6,0-1-0.4-1-1V22.7c0-0.6,0.4-1,1-1s1,0.4,1,1V39C34.2,39.6,33.7,40,33.2,40z" />
        </g>
        <g>
          <path d="M20.2,25.5c-2.5,0-4.5,2-4.5,4.5c0,2.1,1.5,3.9,3.5,4.4V39c0,0.6,0.4,1,1,1c0.5,0,1-0.4,1-1v-4.6c2-0.5,3.5-2.3,3.5-4.4   C24.7,27.5,22.7,25.5,20.2,25.5z M20.2,32.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5   C22.7,31.4,21.6,32.5,20.2,32.5z" />
        </g>
        <g>
          <path d="M20.2,23.7c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v21.7C21.2,23.2,20.7,23.7,20.2,23.7z" />
        </g>
      </svg>
    );
  }
}

Icon.defaultProps = {
  width: 20,
  height: 20,
  color: "#f77064"
};

export default Icon;
