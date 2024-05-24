

import { Scountdown , Countdown } from '@/components/ui/countdown';
import React from 'react';

'use client'
import { Scountdown, Countdown } from '@/components/ui/countdown';
import React, { useEffect, useState } from 'react';

import "@/styles/globals.css";


        <div>
            <h1>Countdown</h1>
            <Scountdown />
            <br />
            <h1>Day Level</h1>
            <Countdown />
        </div>
    );

import React from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'


const countdown = () => {
  return (
    <div className="w-full flex flex-col items-center border border-gray-300 p-4 rounded-lg">
      {/* Secondary Navigation Bar */}
      <div className="w-full flex items-center justify-between border-b border-gray-300 pb-2 mb-4 fixed top-16 left-0 bg-white z-10" style={{ height: '70px' }}>
        <div className="container mx-auto flex items-center justify-between px-4" >
          <Label className="text-3xl font-bold tracking-tight">Portfolio</Label>
          <div className="flex space-x-4 ml-auto">
            <Button variant="link" className="text-black">About Me</Button>
            <Button variant="link" className="text-black">Experience</Button>
            <Button variant="link" className="text-black">Project</Button>
            <Button variant="link" className="text-black">Contact</Button>
          </div>
        </div>
      </div>

    </div>
  )


function CountdownStatistic() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; 
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
