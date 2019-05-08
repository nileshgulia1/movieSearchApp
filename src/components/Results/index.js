import React from "react";
import Cards from "../Cards";
import Page from "../Pagination";
import Pagination from "react-js-pagination";

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.results = this.results.bind(this);
  }

  results() {
    if (this.props.elements.length !== 0) {
      return this.props.elements
        .slice(0, 10)
        .map(el => <Cards key={el.movie_title} movie={el} />);
    } else {
      return null;
    }
  }

  render() {
    return (
      <section className="main-block light-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="styled-heading">
                <h3>Top Movies!</h3>
              </div>
            </div>
          </div>
          <div className="row">{this.results()}</div>
          <div>
            <Page
              value={this.props.elements}
              previous={this.props.previous}
              next={this.props.next}
            />
          </div>
        </div>
      </section>
    );
  }
}
