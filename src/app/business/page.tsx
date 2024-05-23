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
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };


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
            <Button variant="link" className="text-black" onClick={() => scrollToSection(contactRef)}>Contact</Button>
          </div>
        </div>
      </div>

      {/* AboutUs part */}
      <div ref={aboutUs} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="container relative" >
          <PageHeader>
            <Announcement />
            <PageHeaderHeading className="hidden md:block">
              Check out some examples
            </PageHeaderHeading>
            <PageHeaderHeading className="md:hidden">Examples</PageHeaderHeading>
            <PageHeaderDescription>
              Dashboard, cards, authentication. Some examples built using the
              components. Use this as a guide to build your own.
            </PageHeaderDescription>
            <PageActions>
              <Button>Hi</Button>
            </PageActions>
          </PageHeader>
        </div>
        <div>
          <img
            src="/portfolio.jpg"
            alt="Portfolio Image"
            className="object-cover rounded-md"
            style={{ width: '1500px', height: '800px' }}
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
                    src="/portfolio.jpg"
                    alt="University Building"
                    className="w-80 h-60 object-cover object-center"
                  />
                  <CardHeader className="bg-gray-100 p-3">
                    <CardTitle className="text-lg font-semibold">Contact us</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3">
                    <CardDescription className="text-sm mb-3">
                      Submit a partnership enquiry, you can<br /> also make a donation by contacting<br /> the University revenue team.
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
                    src="/portfolio.jpg"
                    alt="University Building"
                    className="w-80 h-60 object-cover object-center"
                  />
                  <CardHeader className="bg-gray-100 p-3">
                    <CardTitle className="text-lg font-semibold">Contact us</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3">
                    <CardDescription className="text-sm mb-3">
                      Submit a partnership enquiry, you can<br /> also make a donation by contacting<br /> the University revenue team.
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
                    src="/portfolio.jpg"
                    alt="University Building"
                    className="w-80 h-60 object-cover object-center"
                  />
                  <CardHeader className="bg-gray-100 p-3">
                    <CardTitle className="text-lg font-semibold">Contact us</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3">
                    <CardDescription className="text-sm mb-3">
                      Submit a partnership enquiry, you can<br /> also make a donation by contacting<br /> the University revenue team.
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
          <Label className="font-bold text-xl mb-2">Updates from the development group and faculties</Label>

        </div>
        <div className="flex flex-col items-center mb-2" style={{ marginBottom: '100px' }}>
          <AccordionListAvatar />
        </div>
        {/* Project part */}
          <div ref={projectRef} className="mt-4 flex flex-col items-center mb-2" style={{ marginBottom: '50px' }}>
            <Label className="font-bold text-5xl mb-2">Project</Label>
            <Label className="font-bold text-xl mb-2">Updates from the development group and faculties</Label>

          </div>
          <div className="flex flex-col items-center mb-2" style={{ marginLeft: '10%',  marginRight: '10%',marginBottom: '100px' }}>
            
            <GalleryWithTab />
       
          </div>
        
        

        {/* Contact part */}
        {/* <div ref={contactRef} className="mt-4 flex items-center mb-2" style={{ marginTop: '500px' }}>
          <div>Contact Info</div>
        </div> */}
      </div>
    </div>
  );
}


export default Business;