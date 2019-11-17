import React from "react";

class Icon extends React.Component {
  render() {
    return (
      <svg
        fill={this.props.color}
        width={`${this.props.width}px`}
        height={`${this.props.height}px`}
        style={this.props.style}
        viewBox="0 0 48 48"
      >
        <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
        <path d="M0 0h48v48h-48z" fill="none" />
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
