import React, { Component } from "react";
import Fade from "react-reveal";
import Logo from "./Logo";
import ReactPlayer from "react-player";
import PopUp from "./PopUp"; 

class Header extends Component {
  state = {
    seen: false
    };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
    };
  render() {
    if (!this.props.data) return null;

    // const paymentIAS = this.props.data.paymentIAS;
    const name = this.props.data.name;
    const description = this.props.data.description;
    
    return (
    <>
    {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
      <header id="home" style={{height: 'auto'}}>
        {/* <ParticlesBg type="circle" bg={true} /> */}

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>
          
          
         
          <ul id="nav" className="nav">
            <Logo logolink = 'images/logo.png' logowidth= '50' logoheight = '50'/>
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#AboutUs">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Advisor
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Team
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#eventHost">
                Events
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
            <Logo logolink = 'images/ut-dallas-logo.png' logowidth= '50' logoheight = '50'/>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h2 className="responsive-headline">{name}</h2>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            
            <hr />
            <Fade bottom duration={2000}>
              <div className="banner-video">
              <ReactPlayer muted={false} width = {480} height = {270} className="banner-video"
                url="https://www.youtube.com/embed/SCOHR_Owj74"
              />
              </div>
            </Fade>

            <Fade bottom duration={2000}>
              <ul className="social">
                <a href onClick={this.togglePop}  className="button btn member-btn">
                  <i className="fa fa-book"></i>Become A Member
                </a>
                <a href className="button btn payment-btn">
                <i class="fa fa-money"></i>Payment for IAS
                </a>
              </ul>
            </Fade>
            
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#AboutUs">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
      </>
    );
  }
}

export default Header;
