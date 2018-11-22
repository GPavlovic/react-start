import * as React from "react";
import { CounterModel } from "../models/counterModel";

export interface CounterProps {
  counter: CounterModel;
  onDelete(counterId: number): void;
}

export interface CounterState {
  value: number;
  incrementAmount: number;
  tags: string[];
}

const initialState: CounterState = {
  value: 0,
  incrementAmount: 1,
  tags: []
};

class Counter extends React.Component<CounterProps, CounterState> {
  styles: React.CSSProperties = {
    fontSize: 16,
    fontWeight: "bold"
  };

  constructor(props: CounterProps) {
    super(props);
    this.state = {
      ...initialState,
      value: this.props.counter.value,
      incrementAmount: this.props.counter.incrementAmount,
      tags: ["tag1", "tag2", "tag3"]
    };
  }

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getCounterClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  private getCounterClasses() {
    let classes = "badge m-2 ";
    classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  private handleIncrement = () => {
    this.setState({
      value: this.state.value + this.state.incrementAmount
    });
  }

  private formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }
}

export default Counter;
