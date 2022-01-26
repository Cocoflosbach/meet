import React, { Component } from "react";



class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      eventNumberOptions: [8, 16, 32],
      showOptions: undefined,
    };
  }

  handleInputChanged = (event) => {
    const value = event.target.value
      ? parseInt(event.target.value)
      : this.props.numberOfEvents;
    this.props.updateNumOfEvents(value);
  };

  handleItemClicked = (eventNumberOptions) => {
    this.props.updateNumOfEvents(eventNumberOptions);
    this.setState({
      showOptions: false,
    });
  };

  render() {
    const { numberOfEvents } = this.props;
    return (
      <div className="NumberOfEvents">
        <p>Number of Events</p>
        <input
          type="number"
          className="number-of-events"
          value={numberOfEvents}
          onChange={this.handleInputChanged}
          onFocus={() => {
            this.setState({ showOptions: true });
          }}
        />
        <ul
          className="options"
          style={this.state.showOptions ? {} : { display: "none" }}
        >
          {this.state.eventNumberOptions.map((NumSuggestion) => (
            <li
              key={NumSuggestion}
              onClick={() => this.handleItemClicked(NumSuggestion)}
            >
              {NumSuggestion}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

NumberOfEvents.defaultProps = {
  numberOfEvents: 32
}

export default NumberOfEvents;
