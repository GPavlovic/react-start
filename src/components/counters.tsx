import * as React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      {
        id: 0,
        value: 1,
        incrementAmount: 1
      },
      {
        id: 1,
        value: 2,
        incrementAmount: 2
      },
      {
        id: 2,
        value: 3,
        incrementAmount: 3
      },
      {
        id: 3,
        value: 4,
        incrementAmount: 4
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            incrementAmount={counter.incrementAmount}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
