import React, { Component } from "react";
import Fade from "react-reveal";

class Advisor extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/ravi_narayan.png" ;
    const bio = this.props.data.bio;
   
    // const phone = this.props.data.phone;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="ravi_narayan"
              />
              {/* style={{font: "opensans-semibold", color:"red"}} marginleft:"20px"*/}
              <p style={{font: "opensans-semibold",marginLeft:"-20px" }} >Ravishankar Narayan, PHD</p>
              <p>Assistant Professor Information System</p>
            </div>
            <div className="nine columns main-col">
              <h2>From the Advisor</h2>

              <p className="advisor-info">{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                 
                </div>
                {/* <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Advisor;
