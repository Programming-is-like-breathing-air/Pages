
"use client"
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import AccordionListAvatar from '@/components/ui/accordionWithAvatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from '@/components/ui/card';
import { Linkedin, Github, GraduationCap } from 'lucide-react';
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header"
import { Announcement } from "@/components/ui/announcement"
import GalleryWithTab from '@/components/ui/image-gallery';
const Business = () => {
  const aboutUs = useRef<HTMLDivElement>(null);
  const developmentRef = useRef<HTMLDivElement>(null);
  const memberRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

import React from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'



  return (


    //<div className="w-full flex flex-col items-center border border-gray-300 p-4 rounded-lg">
    <div>
      {/* Secondary Navigation Bar */}
      <div className="w-full flex items-center justify-between border-b border-gray-300 pb-2 mb-4 fixed top-16 left-0 bg-white z-10" style={{ height: '70px' }}>
        <div className="container mx-auto flex items-center justify-between px-4">
          <Label className="text-3xl font-bold tracking-tight">Business</Label>
          <div className="flex space-x-4 ml-auto">
            <Button variant="link" className="text-black" onClick={() => scrollToSection(aboutUs)}>About Us</Button>
            <Button variant="link" className="text-black" onClick={() => scrollToSection(developmentRef)}>Development</Button>
            <Button variant="link" className="text-black" onClick={() => scrollToSection(memberRef)}>Team Member</Button>
            <Button variant="link" className="text-black" onClick={() => scrollToSection(projectRef)}>Project</Button>
            <Button variant="link" className="text-black" onClick={() => scrollToSection(mapRef)}>Map</Button>

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


      {/* AboutUs part */}
      <div ref={aboutUs} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="container relative" >
          <PageHeader>
            <Announcement />
            <PageHeaderHeading className="hidden md:block">
            The University of Sydney Blocks Design System
            </PageHeaderHeading>
            <PageHeaderHeading className="md:hidden">Examples</PageHeaderHeading>
            <PageHeaderDescription>
            Leadership Starts Here: Unleash Your Creative Potential with The
            University of Sydney's Blocks Design System - Where Innovation Meets
            Imagination, One Block at a Time.
            </PageHeaderDescription>
            <PageActions>
              <Button variant={'default'}>Start Here</Button>
            </PageActions>
          </PageHeader>
        </div>
        <div>
          <img
            src="/spiral.jpg"
            alt="Portfolio Image"
            className="object-cover rounded-md"
            style={{ width: '1500px', height: '900px' }}
          />
        </div>
      </div>

      <div className="mt-32">
        {/* Development part */}
        <div>
          <div ref={developmentRef} className="mt-4 flex flex-col items-center mb-2">
            <Label className="font-bold text-5xl mb-2">Development Updates</Label>
            <Label className="font-bold text-xl mb-2">Updates from the development group and faculties</Label>

          </div>
          <div className="mt-3" style={{ marginLeft: '10%', marginTop: '40px', marginRight: '10%', marginBottom: '100px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <Card className="max-w-md bg-white rounded-md shadow-sm overflow-hidden">
                  <img
                    src="https://i.nextmedia.com.au/News/Uni_Sydney.png"
                    alt="University Building"
                    className="w-80 h-60 object-cover object-center"
                  />
                  <CardHeader className="bg-gray-100 p-3">
                    <CardTitle className="text-lg font-semibold">Biodiversity Frontier</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3">
                    <CardDescription className="text-sm mb-3">
                    Learn how the University of Sydney's <br />Biology Faculty is making groundbreaking<br /> strides in the field of biology and <br />environmental sciences.
                    </CardDescription>
                    <Button className=" w-full py-4 px-4">
                      Explore more →
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="max-w-md bg-white rounded-md shadow-sm overflow-hidden">
                  <img
                    src="/aboriginal_art.jpeg"
                    alt="University Building"
                    className="w-80 h-60 object-cover object-center"
                  />
                  <CardHeader className="bg-gray-100 p-3">
                    <CardTitle className="text-lg font-semibold">Preserving Heritage</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3">
                    <CardDescription className="text-sm mb-3">
                    Uncover the vibrant and diverse <br />culture of Australia's First Nations.<br />This article delves into the profound history<br /> expressions of Australian Aboriginal culture.
                    </CardDescription>
                    <Button className=" w-full py-4 px-4">
                      Explore more →
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="max-w-md bg-white rounded-md shadow-sm overflow-hidden">
                  <img
                    src="/sydney_opera_house.jpg"
                    alt="University Building"
                    className="w-80 h-60 object-cover object-center"
                  />
                  <CardHeader className="bg-gray-100 p-3">
                    <CardTitle className="text-lg font-semibold">Design Excellence Shines</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3">
                    <CardDescription className="text-sm mb-3">
                    Experience the pinnacle of Australian <br /> design innovation as we delve into <br /> the winners and standout designs <br /> from the Australian Design Awards.
                    </CardDescription>
                    <Button className=" w-full py-4 px-4">
                      Explore more →
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Team member part */}

        <div ref={memberRef} className="mt-4 flex flex-col items-center mb-2" style={{ marginBottom: '50px' }}>
          <Label className="font-bold text-5xl mb-2">Team member</Label>
          <Label className="font-bold text-xl mb-2">Here's an introduction to our illustrious members</Label>

        </div>
        <div className="flex flex-col items-center mb-2" style={{ marginBottom: '100px' }}>
          <AccordionListAvatar />
        </div>
        {/* Project part */}
          <div ref={projectRef} className="mt-4 flex flex-col items-center mb-2" style={{ marginBottom: '50px' }}>
            <Label className="font-bold text-5xl mb-2">Project</Label>
            <Label className="font-bold text-xl mb-2">Here is a brief description of our excellent program</Label>

          </div>
          <div className="flex flex-col items-center mb-2" style={{ marginLeft: '10%',  marginRight: '10%',marginBottom: '100px' }}>
            
            <GalleryWithTab />
       
          </div>
        
          <div ref={mapRef} className="mt-4 flex flex-col items-center mb-2" style={{ marginBottom: '50px' }}>
            <Label className="font-bold text-5xl mb-2">Map</Label>
            <Label className="font-bold text-xl mb-2">You can find us here</Label>

          </div>
          <div className="flex flex-col items-center mb-2" style={{ marginLeft: '10%',  marginRight: '10%',marginBottom: '100px' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.7210545858634!2d151.18624108204475!3d-33.88820087012621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1d4ab9ef1d9%3A0x1d017d69037a07c0!2sThe%20University%20of%20Sydney!5e0!3m2!1sen!2sau!4v1716444001018!5m2!1sen!2sau" width="1024" height="768" loading="lazy" ></iframe>
       </div> 
      </div>


    </div>
  );
}


export default Business;