'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { Card, CardContent, CardTitle } from '@/components/ui/card';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px',
  textAlign: 'center',
  height: '100vh',
  boxSizing: 'border-box',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '20px',
};

const cardStyle: React.CSSProperties = {
  width: '200px',
  height: '150px',
  cursor: 'pointer',
  backgroundColor: 'black', 
  color: 'white', 
  fontWeight: 'bold', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Home: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; 
  }

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        <Card style={cardStyle} onClick={() => navigateToPage('/aboutus')}>
          <CardContent>
            <CardTitle>About Us</CardTitle>
          </CardContent>
        </Card>
        <Card style={cardStyle} onClick={() => navigateToPage('business')}>
          <CardContent>
            <CardTitle>Business</CardTitle>
          </CardContent>
        </Card>
        <Card style={cardStyle} onClick={() => navigateToPage('countdown')}>
          <CardContent>
            <CardTitle>Count Down</CardTitle>
          </CardContent>
        </Card>
        <Card style={cardStyle} onClick={() => navigateToPage('error')}>
          <CardContent>
            <CardTitle>Error</CardTitle>
          </CardContent>
        </Card>
        <Card style={cardStyle} onClick={() => navigateToPage('layout')}>
          <CardContent>
            <CardTitle>Layout</CardTitle>
          </CardContent>
        </Card>
        <Card style={cardStyle} onClick={() => navigateToPage('/playground')}>
          <CardContent>
            <CardTitle>Playground</CardTitle>
          </CardContent>
        </Card>
        <Card style={cardStyle} onClick={() => navigateToPage('/portfolio')}>
          <CardContent>
            <CardTitle>Portfolio</CardTitle>
          </CardContent>
        </Card>
        <Card style={cardStyle} onClick={() => navigateToPage('/serverdown')}>
          <CardContent>
            <CardTitle>Server Down</CardTitle>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
