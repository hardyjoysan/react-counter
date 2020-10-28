import React, { Component } from 'react'

class Countdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    componentDidMount() {
        var date = this.props.date.split("/");
        var time = this.props.time.split(":");
        setInterval(() => {

            var date_end = this.dateWithTimeZone(this.props.timezone, date[0], date[1], date[2], time[0], time[1], time[2]);
            var date_now = new Date();

            var seconds = Math.floor((date_end - (date_now))/1000);
            var minutes = Math.floor(seconds/60);
            var hours = Math.floor(minutes/60);
            var days = Math.floor(hours/24);
            
            hours = hours-(days*24);
            minutes = minutes-(days*24*60)-(hours*60);
            seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

            this.setState({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            });

        }, 1000);
    }

    dateWithTimeZone = (timeZone, year, month, day, hour, minute, second) => {

        let date = new Date(Date.UTC(year, (month-1), day, hour, minute, second));
        let utcDate = new Date(date.toLocaleString('en-US', { timeZone: "UTC" }));
        let tzDate = new Date(date.toLocaleString('en-US', { timeZone: timeZone }));
        let offset = utcDate.getTime() - tzDate.getTime();
      
        date.setTime( date.getTime() + offset );
      
        return date;
    };

    render() {
        const { days, hours, minutes, seconds } = this.state
        return (
            <div>
                <h1>
                    <span>{days} days, </span>
                    <span>{hours} hours, </span>
                    <span>{minutes} minutes, </span>
                    <span>{seconds} seconds </span>
                </h1>
            </div>
        )
    }
}

export default Countdown;