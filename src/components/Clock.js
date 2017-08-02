import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../style.css';
// import ElevationBorder from './ElevationBorder.js';

// the word Clock
class Clock extends React.Component {
  // constructor(props) {
  //   super(props);

   /* this.state = {date: new Date()};
    console.log(this.state);
    console.log(this.state.date);*/

  /*  this.state = {time: {}, seconds: 5 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);}*/


 constructor( ) {
    super( );
    this.state = { time: {}, seconds: 1500 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    console.log(this.timer);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;

    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  resetTimer(){

    this.setState({seconds: this.state.seconds});
    debugger;
    console.log(this.timer);
    console.log(this.countDown);
      clearInterval(this.timer);
      console.log('blah')
      console.log(this.state.time)
  }


  render() {
    return(
      <div>
        <div className="modeContainer">
          <div className="modebtn">work mode</div>
          <div className="modebtn">break mode</div>
        </div>
        <div>
          <img alt="Calmadoro" className="logo"/>
        </div>
        <div>
          m: {this.state.time.m} s: {this.state.time.s}
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>


    );
  }
}
  /*componentDidMount() {
    this.timeID = setInterval(
      () => this.tick(), 1000)
  }*/

 /* tick() {
    this.setState({
      date: new Date()
    });
  }*/

  /*componentWillUnmount() {
    clearInterval(this.timeID);
  }*/

  /*changeSentence() {
    var date = this.state.date;
    if(date.getMonth() > 5 && date.getFullYear() >= 2017)
      return "after today";
     else
      return "today";
  }*/

 /* render() {
    return (
      <div>
        <h1>  Clock </h1>
        <button onClick={this.startTimer}>Start</button>
        m: {this.state.time.m} s: {this.state.time.s}
        <button>Reset</button>
      </div>
    );
  }
}
*/
export default Clock;
