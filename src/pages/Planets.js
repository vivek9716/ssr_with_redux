import React, { Component } from "react";

export default class Planets extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
        hasErrors: false,
        planets: {}
    }
  }

  componentDidMount() {
    fetch("https://swapi.co/api/planets/4/")
      .then(res => res.json())
      .then(res => this.setState({ planets: res }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    return <div>{JSON.stringify(this.state.planets)}</div>;
  }
}
