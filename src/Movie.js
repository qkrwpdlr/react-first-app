import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

class Movie extends Component {
  static propTypes = {
    data: PropTypes.object
  };
  state = {
    hello: "world"
  };
  componentWillMount() {
    console.log("will mount");
  }
  componentDidMount() {
    console.log("after render");
  }
  render() {
    console.log("render");
    return (
      <div>
        {/* <MoviePoster poster={this.props.data.poster} /> */}
        <MoviePosterFunction poster={this.props.data.poster} />
        <h1> {this.props.data.title} </h1>
      </div>
    );
  }
}
class MoviePoster extends Component {
  render() {
    return <img src={this.props.poster} />;
  }
}

function MoviePosterFunction({ poster }) {
  return <img src={poster} />;
}
MoviePosterFunction.propTypes = {
  poster: PropTypes.string.isRequired
};
export default Movie;
