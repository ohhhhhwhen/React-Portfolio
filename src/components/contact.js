import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Contact Info</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
                    <i className="fa fa-phone-square"/>
                    (619)-459-1492
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: "30px", fontFamily: "Anton"}}>
                    <i className="fa fa-envelope"/>
                    owenchanthala@gmail.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
