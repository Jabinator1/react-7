import { Component } from "react";

export default class ClassMovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: ["Shrek", "Shrek 2", "Shrek the Third", "Shrek the Halls"],
      input: "",
    };
  }

  render() {
    const mappedMovies = this.state.movies.map((movie, index) => {
      return <h2 key={movie + index}>{movie}</h2>;
    });
    return (
      <div>
        {mappedMovies}
        <input
          value={this.state.input}
          type="text"
          onChange={(e) => this.setState({ input: e.target.value })}
        />
        <button
          onClick={() => {
            this.setState({ movies: [...this.state.movies, input], input: "" });
          }}
        >
          Add Movie
        </button>
      </div>
    );
  }
}
