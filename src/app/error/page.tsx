
'use client';

import React from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'


import React from 'react';
import { useRouter } from 'next/navigation'; 
import { Button } from '../../components/ui/button'; 

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '50px',
  textAlign: 'left',
};

const textContainerStyle: React.CSSProperties = {
  flex: 1,
  marginRight: '20px',
};

const oopsImageStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '600px',
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
};

const contactStyle: React.CSSProperties = {
  fontSize: '1em',
  marginBottom: '40px',
};

const errorCodeStyle: React.CSSProperties = {
  fontSize: '1.5em',
  marginBottom: '40px',
};

const buttonStyle: React.CSSProperties = {
  marginTop: '20px',
};

const PageNotFound: React.FC = () => {
  const router = useRouter();

  const goToHomePage = () => {
    router.push('/');
  };

  return (

    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h1 style={titleStyle}>Page not found</h1>
        <p style={descriptionStyle}>
          The page may have moved, be temporarily unavailable, or the address may not be correct.
        </p>
        <h2 style={subTitleStyle}>What to do next</h2>
        <ul style={suggestionsStyle}>
          <li style={suggestionItemStyle}>
            If you typed in the web address, check that you have typed it correctly (including the end of the address, which may end in / or .html).
          </li>
          <li style={suggestionItemStyle}>
            Use the search on the top right of this page to look for a keyword related to what you are looking for. This will help if the page has moved.
          </li>
          <li style={suggestionItemStyle}>
            Check if there is a service outage on our Service Status page.
          </li>
        </ul>
        <p style={contactStyle}>
          If these options don't help, you can contact our helpdesk by calling +61 (2) 9351 6000 or emailing support@sydney.edu.au.
        </p>
        <div style={buttonStyle}>
          <Button onClick={goToHomePage}>GO TO HOMEPAGE</Button>
        </div>
      </div>
      <img src="/Oops.png" alt="Oops" style={oopsImageStyle} />

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

export default PageNotFound;
