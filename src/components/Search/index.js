import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search() {
    this.props.search(document.getElementById("App-search-bar").value);
    return false;
  }

  render() {
    return (
      <section className="slider d-flex align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="slider-title_box">
                <div className="row">
                  <div className="col-md-12">
                    <div className="slider-content_wrap">
                      <h1>Search</h1>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-md-10">
                    <div className="form-wrap mt-4">
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <input
                          type="text"
                          placeholder="Type a Name?"
                          className="btn-group1"
                          id="App-search-bar"
                        />
                        <button onClick={this.search} className="btn-form">
                          <span className="icon-magnifier search-icon" />
                          SEARCH
                          <i className="pe-7s-angle-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
