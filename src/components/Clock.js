import React from 'react';
// import logo from '../images/logo.png';
import '../style.css';
// import ElevationBorder from './ElevationBorder.js';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    // this.convertUItime = this.convertUItime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.state = {
      seconds: 1500
      // time: this.getUItime(this.seconds)
    };

    this.time = this.convertUItime(this.state.seconds)
    this.countSec

  }


  componentDidMount() {
    /*this.timerID = setInterval(
      () => this.tick(),
      1000
    );*/
  }

 convertUItime(seconds) {
    var result;
    // multiply by 1000 because Date() requires miliseconds
    var date = new Date(seconds * 1000);
    var hh = date.getUTCHours();
    var mm = date.getUTCMinutes();
    var ss = date.getSeconds();
    // If you were building a timestamp instead of a duration, you would uncomment the following line to get 12-hour (not 24) time
    // if (hh > 12) {hh = hh % 12;}
    // These lines ensure you have two-digits
    if (hh < 10) {hh = "0"+ hh;}
    if (mm < 10) {mm = "0"+ mm;}
    if (ss < 10) {ss = "0"+ ss;}
    // This formats your string to HH:MM:SS
    if (hh>0) {
       result = hh + ":" + mm + ":" + ss;
    } else {
       result = mm + ":" + ss;
    }

    return result;
  };

  startTimer() {
    let that = this;
    this.countSec = setInterval(function() {
        that.setState({seconds: that.state.seconds - 1});
    }, 1000);
  }


  componentDidUpdate(){
    this.time = this.convertUItime(this.state.seconds)
  }

  componentWillUnmount(){
    clearInterval(this.countSec)
  }

  /*tick() {
    this.setState({
      date: new Date()
    });
  }*/

  render() {
    return(
      <div>
        <div className="modeContainer">
          <div className="modebtn">work mode</div>
          <div className="modebtn">break mode</div>
        </div>
        <div>
          <img alt="Calmadoro timer" className="logo" />
        </div>
        <div className="clockContainer">
          <div className="timer">{this.time}</div>
          <div className="suggested-time">
            <div className="suggestions">15</div>
            <div className="suggestions">20</div>
            <div className="suggestions">25</div>
            <div className="suggestions">30</div>
            <div className="suggestions">35</div>
            <div className="suggestions">Custom</div>
          </div>
          <div className="buttonContainer">
            <button className="btn-shadow timerButton" onClick={this.startTimer}>Start</button>
            <button className="btn-shadow timerButton" onClick={this.resetTimer}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
