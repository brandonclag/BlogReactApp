import React, { useEffect, useState } from 'react';

const TimePage = () => {

  const [time, setTime] = useState();
  useEffect(() => {
    fetch('http://worldtimeapi.org/api/ip')
      .then(res => res.json())
      .then(data => {
        setTime(data.datetime)
      })
  }, []);

  return (
    <>
      <h1>The Current DateTime is: </h1>
      <p>{time}</p>
    </>
  );
}

export default TimePage;