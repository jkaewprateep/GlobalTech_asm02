import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import {urlConfig} from '../../config';


// class Emitter extends React.Component {
//   render() {
//       return <p>emit</p>;
//   }
// }

function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => fetchDataRecords() });

  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [update, setupdate] = useState(true);

  // useEffect(() => {
  //   const time = new Date();
  //   console.log('Listening: ', update, time.getSeconds());
  //   setupdate(false);
  //   // fetchDataRecords();
  // }, [update]);

  const fetchDataRecords = async () => {
    try {

        // console.log("${urlConfig.backendUrl}: ", urlConfig.backendUrl);

        // Task 2: Fetch gift details
        // const url = "${urlConfig.backendUrl}";
        const url = "http://localhost:3060/api/data";
        const response = await fetch(url);

        // console.log(response)

        if (!response.ok) {
            console.log("Connectivity problem.")
            throw new Error('Connectivity problem.');
            
        }
        const data = await response.json();

        // console.log("response", response.json())

        setRecords(data);
        setupdate(true);

        const time = new Date();
        time.setSeconds(time.getSeconds() + 5);
        restart(time);

        console.log(data);
        // setupdate(false);

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }

        // const timer = setInterval(() => {
        //     setSecondsPassed(sp => sp + 1);
        // }, 1000);
    };

  return (
    <div style={{textAlign: 'center'}}>

      <div style={{fontSize: '20px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      {/* Restarts to 5 minutes timer */}
    {/* const time = new Date();
    time.setSeconds(time.getSeconds() + 300);
    restart(time) */}
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 5); // 10 minutes timer
  return (
    <div>
      {/* <Emitter /> */}
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}