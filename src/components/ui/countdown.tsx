'use client';

import React, { useState, useEffect } from 'react';
import { differenceInMilliseconds, intervalToDuration } from 'date-fns';
import { Button } from './button';


export const Countdown = () => {
  const [targetDate, setTargetDate] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('targetDate') || new Date().toISOString();
    } else {
      return new Date().toISOString();
    }
  });

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  const resetTimer = () => {
    const newTargetDate = new Date();
    newTargetDate.setDate(newTargetDate.getDate() + 2);
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
    <div>
      <div>
        <span style={{ fontSize: '27px', fontWeight: 'bold' }}>{days}天{' '}</span>
        <span style={{ fontSize: '27px', fontWeight: 'bold' }}>{hours}时{' '}</span>
        <span style={{ fontSize: '27px', fontWeight: 'bold' }}>{minutes}分{' '}</span>
        <span style={{ fontSize: '27px', fontWeight: 'bold' }}>{seconds}秒</span><br />
        <Button onClick={resetTimer}>Reset</Button>
      </div>
    </div>
  );
};

export const Scountdown = () => {
  const [targetDate, setTargetDate] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('targetDate') || new Date().toISOString();
    } else {
      return new Date().toISOString();
    }
  });

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  const resetTimer = () => {
    const newTargetDate = new Date();
    newTargetDate.setDate(newTargetDate.getDate() + 2);
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
    <div>
      <div>
        <span style={{ fontSize: '27px', fontWeight: 'bold' }}>{hours < 10 ? `0${hours}` : hours}</span>:
        <span style={{ fontSize: '27px', fontWeight: 'bold' }}>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span style={{ fontSize: '27px', fontWeight: 'bold' }}>{seconds < 10 ? `0${seconds}` : seconds}</span><br />
        <Button onClick={resetTimer}>Reset</Button>
      </div>
    </div>
  );
};

export default { Countdown, Scountdown };
