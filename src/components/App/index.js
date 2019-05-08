import React from "react";
import Search from "../Search";
import Results from "../Results";
import Footer from "../Footer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.movies = [];
    this.old = "";
    this.prevPage = 1;
    this.totalPages = 0;
    this.slicedMovies = [];
    this.state = {
      movies: [],
      search: "",
      page: 1,
      results: 10,
      slicedMovies: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  handleSearch(val) {
    let prev = this.state.search;
    if (val.length > 0) {
      this.props = {
        keySearch: val
      };
      this.setState({ search: val });
      this.old = prev;
      // pagination
      this.prevPage = 1;
      this.totalPages = 0;
      this.setState({ page: 1 });
    }
  }

  prev() {
    let p = this.state.page;
    if (p > 0) {
      p--;
      let num = p * 10;
      this.slicedMovies = this.state.movies.slice(num, num + 10);
      this.prevPage = this.state.page;
      this.setState({ page: p });
    }
  }

  next() {
    let p = this.state.page;
    p++;
    let num = p * 10;
    this.slicedMovies = this.state.movies.slice(num, num + 10);
    this.prevPage = this.state.page;
    console.log(this.prevPage);
    this.setState({ page: p, slicedMovies: this.slicedMovies });
  }

  fetchData = () => {
    fetch(`https://api.myjson.com/bins/t3kpk`, { method: "GET" })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ movies: json });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.page === 1) {
      this.slicedMovies = this.state.movies;
    }
    return (
      <div>
        <Search search={this.handleSearch} />
        <Results
          elements={this.slicedMovies}
          previous={this.prev}
          next={this.next}
        />
        <Footer />
      </div>
    );
  }
}
