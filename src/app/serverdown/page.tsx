
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../components/ui/button'; 

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '50px',
  textAlign: 'center',
  height: '100vh', 
  boxSizing: 'border-box',
};

const oopsImageStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
};

const titleStyle: React.CSSProperties = {
  fontSize: '2.5em',
  marginBottom: '20px',
};

const descriptionStyle: React.CSSProperties = {
  fontSize: '1.2em',
  marginBottom: '40px',
};

const buttonStyle: React.CSSProperties = {
  marginTop: '20px',
};

const ServerDown: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const goToHomePage = () => {
    router.push('/');
  };


import React from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'


  if (!isMounted) {
    return null; // Render nothing on the server
  }


  return (

    <div style={containerStyle}>
      <img src="/502.png" alt="Oops" style={oopsImageStyle} />
      <p style={descriptionStyle}>
        The server is currently unavailable. This may be due to maintenance or an unexpected issue. Please try again later.
      </p>
      <div style={buttonStyle}>
        <Button onClick={goToHomePage}>GO TO HOMEPAGE</Button>
      </div>

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
  );
};

export default ServerDown;
