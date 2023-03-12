import React, { useEffect, useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [timeStr, setTimeStr] = useState(new Date());

  const interval = setInterval(() => {
    setTimeStr(new Date());
  }, 1000);

  useEffect(() => {
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div id="main">
      <div className="date-time">
        {timeStr.toLocaleDateString() + ", " + timeStr.toLocaleTimeString()}
      </div>
    </div>
  )
}


export default App;
