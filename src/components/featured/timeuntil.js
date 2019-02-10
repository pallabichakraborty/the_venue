import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Timeuntil extends Component {

    state = {
        dDay: new Date(2019,7-1,7),
        days:'0',
        hours: '0',
        minutes: '0',
        seconds:'0'

    }

    getTimeUntil(dDay) {
       const currentDate= new Date()
       const time = Date.parse(dDay) - Date.parse(currentDate)
       if(time<0)
       {
           console.log('dDay passed')
       }
       else {
        let diff=time;
        const milliseconds = diff % 1000;
        diff = (diff - milliseconds) / 1000
        const seconds = diff % 60;
        diff = (diff - seconds) / 60
        const minutes = diff % 60;
        diff = (diff - minutes) / 60
        const hours = diff % 24;
        const days = (diff - hours) / 24

        this.setState(
            {
                days,
                hours,
                minutes,
                seconds
            }
        )
       }
    }

    componentDidMount = () => {
        return setInterval(() => this.getTimeUntil(this.state.dDay),1000)
    }
    render() {
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
              <div className="countdown_top">
                Event starts in
               </div>
               <div className="countdown_bottom">
                   <div className="countdown_item">
                        <div className="countdown_time">
                            {this.state.days}
                        </div>
                        <div className="countdown_tag">
                            Days
                        </div>
                   </div>
                   <div className="countdown_item">
                        <div className="countdown_time">
                            {this.state.hours}
                        </div>
                        <div className="countdown_tag">
                            Hours
                        </div>
                   </div>
                   <div className="countdown_item">
                        <div className="countdown_time">
                            {this.state.minutes}
                        </div>
                        <div className="countdown_tag">
                            Minutes
                        </div>
                   </div>
                   <div className="countdown_item">
                        <div className="countdown_time">
                            {this.state.seconds}
                        </div>
                        <div className="countdown_tag">
                            Seconds
                        </div>
                   </div>
               </div>
                
            </div>
            
            </Slide>
            
        );
    }
}

export default Timeuntil;