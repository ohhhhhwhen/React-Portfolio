import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  moreThanThree() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/burgerApp.png?raw=true) center / cover"
              }}
            >
              Burger App
            </CardTitle>
            <CardText>info here</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ohhhhhwhen/Burger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://burgers-devoured.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
              </Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/weatherApp.png?raw=true) center / cover"
              }}
            >
              Weather App
            </CardTitle>
            <CardText>info here</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ohhhhhwhen/Location-Weather"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://ohhhhhwhen.github.io/Location-Weather/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
              </Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/virusApp.png?raw=true) center / cover"
              }}
            >
              Virus Wars
            </CardTitle>
            <CardText>info here</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/Olsenben77/Project-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://ohhhhhwhen.github.io/Virus-Wars/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/weatherApp.png?raw=true) center / cover"
              }}
            >
              Weather App
            </CardTitle>
            <CardText>info here</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ohhhhhwhen/Location-Weather"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://ohhhhhwhen.github.io/Location-Weather/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
              </Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/virusApp.png?raw=true) center / cover"
              }}
            >
              Virus Wars
            </CardTitle>
            <CardText>info here</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/Olsenben77/Project-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://ohhhhhwhen.github.io/Virus-Wars/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    }
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/NiteOwl.png?raw=true) center / cover"
              }}
            >
              Nite Owl
            </CardTitle>
            <CardText>info here</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/Olsenben77/D8-Nite---Ben-Henry-Lloyd-Owen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://olsenben77.github.io/D8-Nite---Ben-Henry-Lloyd-Owen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
              </Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/password.png?raw=true) center / cover"
              }}
            >
              Password Generator
            </CardTitle>
            <CardText>info here</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ohhhhhwhen/Generate-My-Password"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://ohhhhhwhen.github.io/Generate-My-Password/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
              </Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/quiz.png?raw=true) center / cover"
              }}
            >
              Code Quiz
            </CardTitle>
            <CardText>info here</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ohhhhhwhen/Class-Quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://ohhhhhwhen.github.io/Class-Quiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/NiteOwl.png?raw=true) center / cover"
              }}
            >
              Nite Owl
            </CardTitle>
            <CardText>info here</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/Olsenben77/D8-Nite---Ben-Henry-Lloyd-Owen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://olsenben77.github.io/D8-Nite---Ben-Henry-Lloyd-Owen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
              </Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/password.png?raw=true) center / cover"
              }}
            >
              Password Generator
            </CardTitle>
            <CardText>info here</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ohhhhhwhen/Generate-My-Password"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://ohhhhhwhen.github.io/Generate-My-Password/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
              </Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/quiz.png?raw=true) center / cover"
              }}
            >
              Code Quiz
            </CardTitle>
            <CardText>info here</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ohhhhhwhen/Class-Quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://ohhhhhwhen.github.io/Class-Quiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/burgerApp.png?raw=true) center / cover"
              }}
            >
              Burger App
            </CardTitle>
            <CardText>info here</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ohhhhhwhen/Burger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://burgers-devoured.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Books-Library/raw/master/library.png) center / cover"
              }}
            >
              Books Library
            </CardTitle>
            <CardText>info here</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ohhhhhwhen/React-Books-Library"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://reactapp-books-library.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
        className="grid-tabs"
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>All Projects</Tab>
          <Tab>Javascript</Tab>
          <Tab>Mongo</Tab>
          <Tab>React</Tab>
        </Tabs>

        <Grid className="grid-content">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
          <Cell col={12}>
            <div className="content">{this.moreThanThree()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
