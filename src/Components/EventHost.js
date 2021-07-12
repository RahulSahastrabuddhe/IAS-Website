import React, {Component} from "react";
import Fade from "react-reveal";

class EventHost extends Component{
  
  testing(){
    console.log("inside toaster");
    //toast("Wow so easy!");

  }
  changeEventList(propsData, isRecent) {
    if(isRecent)
    {
      return propsData.events.filter(person => person.eventDate > "03/28/2021").map(function (item) {
        return (
          <div className="row eachEvent" >
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
    }
    else 
    {
      return propsData.events.filter(person => person.eventDate < "03/28/2021").map(function (item) {
        return (
          <div className="row eachEvent" >
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
    }
   
  }
    render(){

        if (!this.props.data) return null;
        let eventHost = this.changeEventList(this.props.data, true);
        return(
            <section id="eventHost">
                <Fade left duration={1000} distance="40px">
                <div className="row">
                    <div className="twelve columns collapsed">
                    <h1>Events</h1>
                    <div className="eventTime">
                    <ul id="nav" className="nav">
                    <li>
                      <button className="smoothscroll"  onClick={() => this.changeEventList(this.props.data, true)} >
                        Recent
                      </button>
                    </li>

                    <li>
                      <button className="smoothscroll" onClick={() => this.testing()}>
                      Past
                      </button>
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