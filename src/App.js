import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      prson: null,
    };
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results[0].gender);
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    return (
      <div>
        {!this.state.person ? (
          <div> loading... </div>
        ) : (
          <div>
            {" "}
            {this.state.person.name.title} {this.state.person.name.first}{" "}
            {this.state.person.name.last}{" "}
            <img src={this.state.person.picture.large} />
          </div>
        )}
      </div>
    );
  }
}
