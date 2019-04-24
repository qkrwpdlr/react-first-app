import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";

class Movie extends Component {
  static propTypes = {
    data: PropTypes.object
  };
  state = {
    hello: "world"
  };
  componentWillMount() {
    // console.log("will mount");
  }
  componentDidMount() {
    // console.log("after render");
  }
  render() {
    // console.log("render");
    return (
      <div className="Movie">
        <div>
          <MoviePosterFunction poster={this.props.data.poster} />
        </div>
        <div>
          <TitleFunction title={this.props.data.title} />
          <RatingFunction rating={this.props.data.rating} />
          <GenresFunction genres={this.props.data.genres} />
          <SynopsisFunction synopsis={this.props.data.synopsis} />
        </div>
      </div>
    );
  }
}
function SynopsisFunction({ synopsis }) {
  return <p>{synopsis}</p>;
}

function GenresFunction({ genres }) {
  return (
    <span className="Movie__Genre">
      {" "}
      {genres.map(data => {
        return data + " ";
      })}{" "}
    </span>
  );
}
function TitleFunction({ title }) {
  return <h1>{title}</h1>;
}
function RatingFunction({ rating }) {
  return <h3>{rating}</h3>;
}
function MoviePosterFunction({ poster }) {
  return <img className="Movie__Poster" src={poster} />;
}

MoviePosterFunction.propTypes = {
  poster: PropTypes.string.isRequired
};

export default Movie;
