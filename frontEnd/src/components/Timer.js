import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props) => {
    //const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(2);
    const [seconds, setSeconds ] =  useState(0);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div style={{justifyContent: 'center'}}>
        { minutes === 0 && seconds === 0
            ? null
            : <p style={{fontSize: '12'}}> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</p> 
        }
        </div>
    )
}

export default Timer;