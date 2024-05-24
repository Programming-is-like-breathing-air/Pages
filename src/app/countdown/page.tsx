'use client'
import { Scountdown, Countdown } from '@/components/ui/countdown';
import React, { useEffect, useState } from 'react';
import "@/styles/globals.css";

function CountdownStatistic() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-center'>
        <h1>Countdown</h1>
        <Scountdown />
        <br />
        <h1>Day Level</h1>
        <Countdown />
      </div>
    </div>
  );
}

export default CountdownStatistic;
