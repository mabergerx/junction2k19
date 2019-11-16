import React from "react";

class Icon extends React.Component {
  render() {
    return (
      <svg
        fill={this.props.color}
        width={`${this.props.width}px`}
        height={`${this.props.height}px`}
        style={this.props.style}
        viewBox="0 0 24 24"
      >
        <path
          class="heroicon-ui"
          d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z"
        />
      </svg>
    );
  }
}

Icon.defaultProps = {
  width: 25,
  height: 25,
  color: "#d6122d"
};

export default Icon;
