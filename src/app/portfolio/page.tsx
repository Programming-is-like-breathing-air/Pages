"use client"
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Github, GraduationCap } from 'lucide-react';

const Portfolio = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="w-full flex flex-col items-center border border-gray-300 p-4 rounded-lg">
      {/* Secondary Navigation Bar */}
      <div className="w-full flex items-center justify-between border-b border-gray-300 pb-2 mb-4 fixed top-16 left-0 bg-white z-10" style={{ height: '70px' }}>
        <div className="container mx-auto flex items-center justify-between px-4">
          <Label className="text-3xl font-bold tracking-tight">Portfolio</Label>
          <div className="flex space-x-4 ml-auto">
            <Button variant="link" className="text-black" onClick={() => scrollToSection(aboutMeRef)}>About Me</Button>
            <Button variant="link" className="text-black" onClick={() => scrollToSection(experienceRef)}>Experience</Button>
            <Button variant="link" className="text-black" onClick={() => scrollToSection(projectRef)}>Project</Button>
            <Button variant="link" className="text-black" onClick={() => scrollToSection(contactRef)}>Contact</Button>
          </div>
        </div>
      </div>

      <div className="mt-32">
        {/* AboutMe part */}
        <div ref={aboutMeRef} style={{ paddingTop: '280px', marginTop: '-150px' }}>
          <div className="mt-4 flex items-center mb-2">
            <Avatar style={{ marginRight: '10px', width: '350px', height: '350px', border: '2px solid #e8e8e8' }}>
              <AvatarImage src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
            </Avatar>
            <div className="flex flex-col ml-4 items-center text-center" style={{ marginLeft: '90px', marginTop: '20px' }}>
              <Label className="font-bold text-xl mb-2">Hi! I am</Label>
              <Label className="font-bold text-6xl mb-2">User Name</Label>
              <Label className="text-sm text-gray-500 text-2xl mb-4">User Description</Label>
              <div className="flex space-x-4" style={{ marginTop: '10px' }}>
                <Button variant="default">Download CV</Button>
                <Button variant="default">Contact Info</Button>
              </div>
              <div className="flex space-x-1" style={{ marginTop: '10px' }}>
                <a href="https://au.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="link" style={{ color: 'black' }}><Linkedin /></Button>
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="link" style={{ color: 'black' }}><Github /></Button>
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Experience part */}
        <div ref={experienceRef}>
          <div className="mt-4 flex flex-col items-center mb-2" style={{ marginTop: '500px' }}>
            <Label className="font-bold text-xl mb-2">Get to know more</Label>
            <Label className="font-bold text-6xl mb-2">About Me</Label>
          </div>
          <div className="flex mt-4" style={{ marginTop: '40px' }}>
            <img
              src="https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg"
              alt="Portfolio Image"
              className="object-cover rounded-md"
              style={{ width: '350px', height: '415px' }}
            />
            <div className="flex flex-col ml-4 ">
              <Card style={{ width: '400px', height: '200px'}}>
                <CardContent>
                  <p>Card Content 1</p>
                </CardContent>
              </Card>
              <Card style={{ width: '400px', height: '200px', marginTop: '15px'  }}>
                <CardContent>
                  <p>Card Content 2</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Project part */}
        <div ref={projectRef}>
          <div className="mt-4 flex items-center mb-2" style={{ marginTop: '500px' }}>
            <img
              src="https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg"
              alt="Project Image"
              className="object-cover rounded-md"
              style={{ width: '300px', height: '400px' }}
            />
          </div>
        </div>

        {/* Contact part */}
        <div ref={contactRef} className="mt-4 flex items-center mb-2" style={{ marginTop: '500px' }}>
          <div>Contact Info</div>
        </div>
      </div>
    </div>
  );
}


export default Portfolio;