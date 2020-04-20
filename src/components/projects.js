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

  lastThree() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/budget.png?raw=true) center / cover"
              }}
            >
              Budget Tracker
            </CardTitle>
            <CardText>Add or Subtract funds with a budget tracker stored in mongo</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ohhhhhwhen/Budget-Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://budget-tracker-2020.herokuapp.com/"
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
                color: "white",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/workout.png?raw=true) center / cover"
              }}
            >
              Workout Tracker
            </CardTitle>
            <CardText>A mongo database to keep track of workouts</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ohhhhhwhen/Workout-Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://all-new-workout-tracker.herokuapp.com/?id=5e8aca4e354b290017d1e3a6"
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
                color: "white",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/employee.png?raw=true) center / cover"
              }}
            >
              Employee Directory
            </CardTitle>
            <CardText>Responsive react app to filter through employees with search keys</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ohhhhhwhen/React-Employee-Directory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://ohhhhhwhen.github.io/React-Employee-Directory/"
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
            <CardText>Using SQL to create a burger database, being to add and update the database</CardText>
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
            <CardText>An API application that displays a searched location's upcoming weather</CardText>
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
                color: "white",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/virusApp.png?raw=true) center / cover"
              }}
            >
              Virus Wars
            </CardTitle>
            <CardText>A HTML5 game created with Phaser, involving users to run, jump and dodge</CardText>
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
            <CardText>An API application that displays a searched location's upcoming weather</CardText>
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
                color: "white",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/virusApp.png?raw=true) center / cover"
              }}
            >
              Virus Wars
            </CardTitle>
            <CardText>A HTML5 game created with Phaser, involving users to run, jump and dodge</CardText>
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
            <CardText>A Javascript application that allows users to plan a night out</CardText>
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
            <CardText>An HTML5 application that creates random passwords for users in a click of a button</CardText>
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
            <CardText>A timed Javascript quiz application with ranked highscores</CardText>
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
            <CardText>A Javascript application that allows users to plan a night out</CardText>
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
            <CardText>An HTML5 application that creates random passwords for users in a click of a button</CardText>
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
            <CardText>A timed Javascript quiz application with ranked highscores</CardText>
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
            <CardText>Using SQL to create a burger database, being to add and update the database</CardText>
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
                color: "white",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/budget.png?raw=true) center / cover"
              }}
            >
              Budget Tracker
            </CardTitle>
            <CardText>Add or Subtract funds with a budget tracker stored in mongo</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ohhhhhwhen/Budget-Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://budget-tracker-2020.herokuapp.com/"
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
                color: "white",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/workout.png?raw=true) center / cover"
              }}
            >
              Workout Tracker
            </CardTitle>
            <CardText>A mongo database to keep track of workouts</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ohhhhhwhen/Workout-Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://all-new-workout-tracker.herokuapp.com/?id=5e8aca4e354b290017d1e3a6"
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
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/library.png?raw=true) center / cover"
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

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background:
                  "url(https://github.com/ohhhhhwhen/React-Portfolio/blob/master/images/employee.png?raw=true) center / cover"
              }}
            >
              Employee Directory
            </CardTitle>
            <CardText>Responsive react app to filter through employees with search keys</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ohhhhhwhen/React-Employee-Directory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://ohhhhhwhen.github.io/React-Employee-Directory/"
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
          <Tab>SQL/Mongo</Tab>
          <Tab>React</Tab>
        </Tabs>

        <Grid className="grid-content">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
          <Cell col={12}>
            <div className="content">{this.moreThanThree()}</div>
          </Cell>
          <Cell col={12}>
            <div className="content">{this.lastThree()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
