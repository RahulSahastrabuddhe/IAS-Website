import React, {Component} from "react";
import Fade from "react-reveal";

class EventHost extends Component{
  constructor(props) {
    super(props);
    this.changeEventList = this.changeEventList.bind(this);
  }
  changeEventList() {
    
  }
    render(){

        if (!this.props.data) return null;
        //const eventHost = this.props.data.events;
        const eventHost = this.props.data.events.map(function (item) {
            return (
              <div className="row eachEvent" >
                  {/* <p>{item.title}</p>
                  <p>{item.purpose}</p>
                  <a href="https://www.linkedin.com/in/rahul-sahastrabuddhe/"><div style={{ textAlign: "right" }}>{item.eventDate}</div></a>
                   */}
                  
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns"><a href={item.url} target="_blank" rel="noreferrer"><p>{item.title}</p></a><p>{item.purpose}</p></div>
              </div>
            </div>
                  <div className="three columns header-col">
               <h5>{item.eventDate}</h5>
            </div>
              </div>
            );
          });


       
        return(
            <section id="eventHost">
                <Fade left duration={1000} distance="40px">
                <div className="row">
                    <div className="twelve columns collapsed">
                    <h1>Events.</h1>
                    <div className="eventTime">
                    <ul id="nav" className="nav">
                    <li>
                      <a className="smoothscroll" href="./" onClick={this.changeEventList()} >
                        Upcoming
                      </a>
                    </li>

                    <li>
                      <a className="smoothscroll" href="./" onClick={this.changeEventList()}>
                      Past
                      </a>
                    </li>
                  </ul>
                    </div>
                    {eventHost}
                    </div>
                </div>
                </Fade>
            </section>
        );
    }
}

export default EventHost;