import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <footer>
        
        <div className="row">
       
          <Fade bottom>
            <div className="twelve columns">
              {/* <ul className="social-links">{networks}</ul> */}

              <ul className="copyright">
                <li>&copy; Copyright 2021 IAS UTD</li>
                <li>
                  Design by{" "}
                  <a title="Styleshout" href="https://www.linkedin.com/in/rahul-sahastrabuddhe/">
                    Rahul Sahastrabuddhe
                  </a>
                </li>
              </ul>
            </div>
          </Fade>
          
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
        
      </footer>
      
    );
  }
}

export default Footer;
