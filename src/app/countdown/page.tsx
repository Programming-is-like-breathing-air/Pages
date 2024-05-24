'use client'
import { Countdown } from '@/components/ui/countdown';
import React, { useEffect, useState } from 'react';
import "@/styles/globals.css";

function CountdownStatistic() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; 
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
    <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
        Coming Soon
    </h1>
    <p className="text-white text-lg mb-8">
        We're working hard to bring you something amazing. Stay tuned!
    </p>
    <div className='text-center text-white'>
        <Countdown />
      </div>
</div>

  );
}

export default CountdownStatistic;
