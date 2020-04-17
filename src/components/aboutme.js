import React, {Component} from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
    render() {
        return(
            <div className="about-body">
            <Grid className="about-grid">
              <Cell col={6}>
                <h2>About Me</h2>
                <hr />
                <p style={{margin: "auto", paddingTop: "1em"}}>Hi, my name is Owen Chanthala. I lived and studied in San Diego,
                California. I love sports, arts, anime, and fashion. As of now,
                I am studying to be a Full Stack Web Developer at the University
                of Washington Bootcamp. Tackling the job industry early on and
                working on my future. Finding a workplace where I will fit in
                very soon.</p>    
              </Cell>
            </Grid>
          </div>
        )
    }
}

export default About;