import React from "react";
import "../../assets/css/style.css";
import "../../assets/css/set1.css";
import "../../assets/css/simple-line-icons.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="main-block dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
