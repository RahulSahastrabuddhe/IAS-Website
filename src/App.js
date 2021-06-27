import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Advisor from "./Components/Advisor";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import EventHost from "./Components/EventHost";
import Utd from "./Components/Utd";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      storedData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getStoredData() {
    $.ajax({
      url: "./storedData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ storedData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getStoredData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.storedData.main} />
        <AboutUs data={this.state.storedData.AboutUs} />
        <Advisor data={this.state.storedData.main} />
        <Portfolio data={this.state.storedData.portfolio} />
        <EventHost data={this.state.storedData.eventHost} />
        <Contact data={this.state.storedData.main} />
        <Footer data={this.state.storedData.main} />
        <Utd />
      </div>
    );
  }
}

export default App;
