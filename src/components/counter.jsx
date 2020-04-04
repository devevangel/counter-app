import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("Counter- Rendered");
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncreament(this.props.counter)}
          className="btn btn-secondary btn-sm p5"
        >
          Increament
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="button btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClass = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  };
}
export default Counter;
