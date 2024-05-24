'use client';

import React, { useState, useEffect, CSSProperties } from 'react';
import { differenceInMilliseconds, intervalToDuration, addDays } from 'date-fns';
import { Button } from './button';

export const Countdown = () => {
  const [targetDate, setTargetDate] = useState(() => {
    const startDate = new Date();
    const endDate = addDays(startDate, 365);  
    if (typeof window !== 'undefined') {
      const storedDate = localStorage.getItem('targetDate');
      if (storedDate) {
        return storedDate;
      } else {
        localStorage.setItem('targetDate', endDate.toISOString());
        return endDate.toISOString();
      }
    } else {
      return endDate.toISOString();
    }
  });

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  const resetTimer = () => {
    const newTargetDate = addDays(new Date(), 365);  // 重置为365天后
    setTargetDate(newTargetDate.toISOString());
    if (typeof window !== 'undefined') {
      localStorage.setItem('targetDate', newTargetDate.toISOString());
    }
  };

  useEffect(() => {
    setIsClient(true);

    const calculateTimeLeft = () => {
      const difference = differenceInMilliseconds(new Date(targetDate), new Date());
      const { days = 0, hours = 0, minutes = 0, seconds = 0 } = intervalToDuration({ start: 0, end: difference });

      return {
        days,
        hours,
        minutes,
        seconds
      };
    };

    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft());
    };

    updateTimer();

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const { days, hours, minutes, seconds } = timeLeft;

  if (!isClient) {
    return null;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={countdownBoxStyle}>
          <div style={numberStyle}>{days}</div>
          <div style={labelStyle}>days</div>
        </div>
        <div style={countdownBoxStyle}>
          <div style={numberStyle}>{hours < 10 ? `0${hours}` : hours}</div>
          <div style={labelStyle}>hours</div>
        </div>
        <div style={countdownBoxStyle}>
          <div style={numberStyle}>{minutes < 10 ? `0${minutes}` : minutes}</div>
          <div style={labelStyle}>mins</div>
        </div>
        <div style={countdownBoxStyle}>
          <div style={numberStyle}>{seconds < 10 ? `0${seconds}` : seconds}</div>
          <div style={labelStyle}>secs</div>
        </div>
      </div>
      {/* <Button onClick={resetTimer} style={{ marginTop: '20px', backgroundColor: 'black', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
        Reset
      </Button> */}

    </div>
  );
};

const countdownBoxStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100px',
  height: '100px',
  margin: '0 10px',
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '8px'
};

const numberStyle: CSSProperties = {
  fontSize: '40px',
  fontWeight: 'bold',
  color: '#fff'
};

const labelStyle: CSSProperties = {
  fontSize: '16px',
  color: '#fff'
};

export default Countdown;
