import * as React from "react";
import Counter from "./counter";
import { CounterModel } from "../models/counterModel";

export interface CountersState {
  counters: CounterModel[];
}

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
            counter={counter}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }

  handleDelete = (counterId: number) => {
    this.setState({
      counters: this.state.counters.filter(c => c.id !== counterId)
    });
  }
}

export default Counters;
