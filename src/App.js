import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import Header from "./Header";
import { extractLocations, getEvents } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      events: [],
      numberOfEvents: 32,
      currentLocation: "all",
    };
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, numOfEvents) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      const numOfEvents = Math.floor(Math.random() * [8, 16, 32]);
      const num = numOfEvents ? numOfEvents : this.state.numberOfEvents;
      const eventsToShow = locationEvents.slice(0, num);
      if (this.mounted) {
        this.setState({
          events: eventsToShow,
          currentLocation: location,
        });
      }
    });
  };

  updateNumOfEvents = () => {
    const value = Math.floor(Math.random() * 32);
    if (value >= 1 && value <= 32) {
      this.setState({ numberOfEvents: value });
      this.updateEvents(this.state.currentLocation, value);
    } else {
      alert("Please choose a number between 1 and 32");
    }
  };

  handleInputChanged = (location) => {
    getEvents().then((events) => {
      const locationEvents = events.filter(
        (event) => event.location === location
      );
      const value = Math.floor(Math.random() * [8, 16, 32]);
      const num = value ? value : this.state.numberOfEvents;
      const eventsToShow = locationEvents.slice(0, num);
      this.setState({
        events: eventsToShow,
      });
    });
  };

  render() {
    const { locations, events, numberOfEvents } = this.state;
    return (
      <div className="App">
        <Header />
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          handleInputChanged={this.handleInputChanged}
        />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
