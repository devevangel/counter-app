import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {

    const {onReset, counters, onDelete, onIncreament} = this.props;

    console.log("Counters- Rendered");

    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={onReset}
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onIncreament={onIncreament}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
