import React from "react";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.renderImage = this.renderImage.bind(this);
  }

  renderImage() {
    return (
      <img
        src={"http://www.idjet.in/Content/Multimedia/thumb/vidthumb.png"}
        className="img-fluid"
        alt="#"
      />
    );
  }

  render() {
    return (
      <div className="col-md-3 featured-responsive">
        <div className="featured-place-wrap">
          <a href={this.props.movie.movie_imdb_link} target="_blank">
            {this.renderImage()}
            {/*<span className="featured-rating-green"> for ratings
              {this.props.movie.content_rating}
            </span>*/}
            <div className="featured-title-box">
              <h6>{this.props.movie.movie_title}</h6>
              <span>• </span>

              <p>
                {this.props.movie.genres.split("|").map(item => (
                  <p>{item}</p>
                ))}
              </p>
              <p>
                <ul>
                  <span>
                    {this.props.movie.plot_keywords.split("|").map(item => (
                      <li>#{item}</li>
                    ))}
                  </span>
                </ul>
              </p>
              <ul>
                <li>
                  <p>
                    Actor : <span>{this.props.movie.actor_1_name}</span>
                  </p>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
