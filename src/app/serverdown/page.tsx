'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../components/ui/button';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '50px',
  textAlign: 'left',
  height: '100vh',
  boxSizing: 'border-box',
};

const textContainerStyle: React.CSSProperties = {
  flex: 1,
  marginRight: '20px',
};

const oopsImageStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '800px',
};

const titleStyle: React.CSSProperties = {
  fontSize: '2.5em',
  marginBottom: '20px',
};

const descriptionStyle: React.CSSProperties = {
  fontSize: '1.2em',
  marginBottom: '40px',
};

const subTitleStyle: React.CSSProperties = {
  fontSize: '1.5em',
  marginBottom: '20px',
};

const suggestionsStyle: React.CSSProperties = {
  listStyleType: 'none',
  padding: 0,
  marginBottom: '40px',
};

const suggestionItemStyle: React.CSSProperties = {
  marginBottom: '10px',
  color: 'gray',
};

const contactStyle: React.CSSProperties = {
  fontSize: '1em',
  marginBottom: '40px',
  color: 'gray',
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
    return null;
  }

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h1 style={titleStyle}>Server Down</h1>
        <p style={descriptionStyle}>
          The server is currently unavailable. This may be due to maintenance or an unexpected issue. Please try again later.
        </p>
        <h2 style={subTitleStyle}>What to do next</h2>
        <ul style={suggestionsStyle}>
          <li style={suggestionItemStyle}>
            If you are trying to access a specific service, check our Service Status page to see if there are any known outages or maintenance activities.
          </li>
          <li style={suggestionItemStyle}>
            Try refreshing the page after a few minutes. The issue might be temporary and could be resolved shortly.
          </li>
          <li style={suggestionItemStyle}>
            If you continue to experience issues, please contact our technical support team for assistance.
          </li>
        </ul>
        <p style={contactStyle}>
          If these options don't help, you can contact our helpdesk by calling +61 (2) 9351 6000 or emailing support@sydney.edu.au.
        </p>
        <div style={buttonStyle}>
          <Button onClick={goToHomePage} style={buttonStyle}>GO TO HOMEPAGE</Button>
        </div>
      </div>
      <img src="/502.jpg" alt="Oops" style={oopsImageStyle} />
    </div>
  );
};

export default ServerDown;
