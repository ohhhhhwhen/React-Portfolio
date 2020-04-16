import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div styler={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://avatars3.githubusercontent.com/u/55464678?s=400&u=e38ba42ec39ee63a449480383acf3416da566704&v=4"
              alt="userimg"
              className="userPic"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />
              <p>
                HTML/CSS | JAVASCRIPT | API | MYSQL | NODEJS | MONGODB | REACT |
                REACT NATIVE | BOOTSTRAP
              </p>

              <div className="social-links">
                <a
                  href="https://github.com/ohhhhhwhen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" aria-hidden="true" />
                </a>

                <a
                  href="https://www.linkedin.com/in/owen-chanthala/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
