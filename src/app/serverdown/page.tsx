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
  height: '100vh', // Ensure it takes the full height of the viewport
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
    </div>
  );
};

export default ServerDown;
