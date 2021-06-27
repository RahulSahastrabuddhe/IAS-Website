import React, {Component} from "react";
import Fade from "react-reveal";

class EventHost extends Component{
  constructor(props) {
    super(props);
    this.changeEventList = this.changeEventList.bind(this);
  }
  changeEventList() {
    console.log('Inside the called function');
  }
    render(){

        if (!this.props.data) return null;
        //const eventHost = this.props.data.events;
        console.log("Event Data");
        console.log(this.props.data.events);
        const eventHost = this.props.data.events.map(function (item) {
            return (
              <div className="row eachEvent" >
                  {/* <p>{item.title}</p>
                  <p>{item.purpose}</p>
                  <a href="https://www.linkedin.com/in/rahul-sahastrabuddhe/"><div style={{ textAlign: "right" }}>{item.eventDate}</div></a>
                   */}
                  
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns"><p>{item.title}</p><p>{item.purpose}</p></div>
              </div>
            </div>
                  <div className="three columns header-col">
              <h1>
                <span>{item.eventDate}</span>
              </h1>
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
                      <button className="smoothscroll" onClick={this.changeEventList()} >
                        Past
                      </button>
                    </li>

                    <li>
                      <a className="smoothscroll" href='javascript:void(0)' onClick={this.changeEventList()}>
                        Upcoming
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