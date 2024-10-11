import { useState, useEffect } from 'react';
import './CurrentDateTime.css'

const CurrentDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    // return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* <h1>Current Date and Time</h1> */}
      <p className='time-date'>{currentDateTime.toLocaleString()}</p>
    </div>
  );
};

export default CurrentDateTime;
