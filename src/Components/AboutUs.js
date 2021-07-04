import React, { Component } from "react";
import Slide from "react-reveal";

class AboutUs extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const who = this.props.data.who.map(function (who) {
      return (
          <p>{who.description}</p>
      );
    });

    const vision = this.props.data.vision.map(function (vision) {
      return (
          <p>{vision.description}</p>
      );
    });

    const mission = this.props.data.mission.map((mission) => {
      return (
        <p>{mission.description}</p>
    );
    });

    return (
      <section id="AboutUs">
        <Slide left duration={1300}>
          <div className="row who">
            <div className="three columns header-col">
              <h1>
                <span>Who We Are</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{who}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row vision">
            <div className="three columns header-col">
              <h1>
                <span>Our Vision</span>
              </h1>
            </div>

            <div className="nine columns main-col">{vision}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row mission">
            <div className="three columns header-col">
              <h1>
                <span>Our Mission</span>
              </h1>
            </div>

            <div className="nine columns main-col">{mission}</div>


          </div>
        </Slide>
      </section>
    );
  }
}

export default AboutUs;
