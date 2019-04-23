import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";
import movieData from "./movieData";
/**
 * jsonData.data.movies.medium_cover_image
 * jsonData.data.movies.title_long
 * @param {Number} jsonData.data.movies.rating
 * @param {Array} jsonData.data.movies.genres
 * @param {String}  jsonData.data.movies.synopsis
 */
class App extends Component {
  state = {};
  async componentDidMount() {
    let data = await fetch(
      "https://yts.am/api/v2/list_movies.json?sort_by=rating"
    );
    let jsonData = await data.json();
    this.setState({
      movies: await jsonData.data.movies.map(movie => {
        return {
          poster: movie.medium_cover_image,
          title: movie.title_long,
          rating: movie.rating,
          genres: movie.genres,
          synopsis: movie.synopsis
        };
      })
    });
  }
  _renderMovie() {
    return this.state.movies.map((data, index) => {
      return <Movie data={data} key={index} />;
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovie() : "Loding"}
      </div>
    );
  }
}

export default App;
