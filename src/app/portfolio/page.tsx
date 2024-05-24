"use client"
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Linkedin, Github, GraduationCap, Medal, Mail, BookmarkCheck } from 'lucide-react';
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from '@/components/ui/use-toast';
import { useState, useEffect } from 'react'

const Portfolio = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");



  const { toast } = useToast();


  const aboutMeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  function onSubmit() {

    toast({
      title: "Submit Successfully",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-white p-4 text-black">
          Name: {name},
          Email: {email},
          Subject: {subject}
        </div>
      ),
    });

  }

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

    <>
      <Toaster />
      <div className="w-full flex flex-col items-center ">
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
          <div ref={aboutMeRef} style={{ paddingTop: '250px', marginTop: '-150px', marginLeft: '160px' }}>
            <div className="mt-4 flex items-center mb-2">
              <Avatar style={{ marginRight: '10px', width: '400px', height: '400px', border: '2px solid #e8e8e8' }}>
                <AvatarImage src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              </Avatar>
              <div className="flex flex-col ml-4 items-center text-center" style={{ marginLeft: '90px', marginTop: '20px' }}>
                <Label className="font-bold text-xl mb-2">Hi, I am</Label>
                <Label className="font-bold text-6xl mb-2">User Name</Label>
                <Label className="text-sm text-gray-500 text-2xl mb-4">User Description</Label>
                <div className="flex space-x-4" style={{ marginTop: '10px' }}>
                  <Button variant="default">Download CV</Button>
                  <Button variant="default">Contact Info</Button>
                </div>
                <div className="flex space-x-1" style={{ marginTop: '10px' }}>
                  <a href="https://au.linkedin.com/" target="_blank" rel="Linkedin Profile">
                    <Button variant="link" style={{ color: 'black' }}><Linkedin /></Button>
                  </a>
                  <a href="https://github.com/" target="_blank" rel="Github Account">
                    <Button variant="link" style={{ color: 'black' }}><Github /></Button>
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* Experience part */}
          <div ref={experienceRef} className="w-full flex flex-col items-center mt-4" style={{ marginTop: '550px', marginLeft: '30px' }}>

            <div className="flex flex-col items-center mb-2">
              <Label className="font-bold text-xl mb-2">Get to know more about</Label>
              <Label className="font-bold text-6xl mb-2">My Experience</Label>
            </div>

            <div className="flex flex-col items-center mt-4" style={{ marginTop: '40px' }}>
              <div className="flex">
                <img
                  src="/portfolio.jpg"
                  alt="Portfolio Image"
                  className="object-cover rounded-md"
                  style={{ width: '350px', height: '445px' }}
                />

                <div className="flex flex-col ml-4">
                  <Card style={{ width: '400px', height: '215px' }} className="text-center">
                    <CardHeader className="flex flex-col items-center justify-center font-bold">
                      <GraduationCap className="mb-2" />
                      <div>
                        Education
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>Bachelor of IT in USYD</p>
                      <p>Master of IT&ITM in USYD</p>
                    </CardContent>
                  </Card>

                  <Card style={{ width: '400px', height: '215px', marginTop: '15px' }} className="text-center">
                    <CardHeader className="flex flex-col items-center justify-center font-bold">
                      <Medal className="mb-2" />
                      <div>
                        Experience
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>JAVA, React</p>
                      <p>2 years Front-end developer</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex flex-col ml-4">
                  <Card style={{ width: '400px', height: '445px' }} className="text-center">
                    <CardHeader className="flex flex-col items-center justify-center font-bold">
                      <Label className="font-bold text-xl mb-2">Skills & Tools</Label>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-around" style={{ marginLeft: '10px' }}>
                      <div className="flex flex-col items-center m-4" style={{ flexBasis: '40%', flexGrow: 1 }}>
                        <BookmarkCheck className="text-2xl mb-2" />
                        <div className="font-bold">Node.js</div>
                        <div className="text-gray-500">Experienced</div>
                      </div>
                      <div className="flex flex-col items-center m-4" style={{ flexBasis: '40%', flexGrow: 1 }}>
                        <BookmarkCheck className="text-2xl mb-2" />
                        <div className="font-bold">Next.js</div>
                        <div className="text-gray-500">Experienced</div>
                      </div>
                      <div className="flex flex-col items-center m-4" style={{ flexBasis: '40%', flexGrow: 1 }}>
                        <BookmarkCheck className="text-2xl mb-2" />
                        <div className="font-bold">Prisma</div>
                        <div className="text-gray-500">Intermediate</div>
                      </div>
                      <div className="flex flex-col items-center m-4" style={{ flexBasis: '40%', flexGrow: 1 }}>
                        <BookmarkCheck className="text-2xl mb-2" />
                        <div className="font-bold">React</div>
                        <div className="text-gray-500">Basic</div>
                      </div>
                      <div className="flex flex-col items-center m-4" style={{ flexBasis: '40%', flexGrow: 1 }}>
                        <BookmarkCheck className="text-2xl mb-2" />
                        <div className="font-bold">PostgreSQL</div>
                        <div className="text-gray-500">Basic</div>
                      </div>
                      <div className="flex flex-col items-center m-4" style={{ flexBasis: '40%', flexGrow: 1 }}>
                        <BookmarkCheck className="text-2xl mb-2" />
                        <div className="font-bold">TailwindCSS</div>
                        <div className="text-gray-500">Intermediate</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Project part */}
          <div ref={projectRef} className="w-full flex flex-col items-center mt-4" style={{ marginTop: '550px', marginLeft: '30px' }}>

            <div className="flex flex-col items-center mb-2">
              <Label className="font-bold text-xl mb-2">Browse My Recent</Label>
              <Label className="font-bold text-6xl mb-2">Projects</Label>
            </div>

            <div className="flex flex-wrap space-x-4" style={{ marginTop: '20px', gap: '10px' }}>
              {/* Project 1 */}
              <HoverCard>
                <HoverCardTrigger>
                  <Card style={{ width: '400px', height: '500px' }} className="text-center border-2 hover:bg-gray-100 transition-colors">
                    <div className="flex justify-center items-center" style={{ height: '300px', marginTop: '10px' }}>
                      <img
                        src="/project1.jpg"
                        alt="Project One"
                        className="object-cover rounded-md"
                        style={{ width: '95%', height: '100%' }}
                      />
                    </div>
                    <CardContent>
                      <div className="flex flex-col items-center text-center" style={{ marginTop: '20px' }}>
                        <Label className="font-bold text-xl mb-2">Project Name</Label>
                        <Label className="text-sm text-gray-500 mb-4">Project Description</Label>
                      </div>
                      <div className="flex space-x-4 mt-4 justify-center" style={{ marginTop: '35px' }}>
                        <a href="https://github.com/" target="_blank" rel="Github Account">
                          <Button variant="default">Github</Button>
                        </a>
                        <a href="https://youtube.com/" target="_blank" rel="Project Demo">
                          <Button variant="default">Live Demo</Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
              </HoverCard>

              {/* Project 2 */}
              <HoverCard>
                <HoverCardTrigger>
                  <Card style={{ width: '400px', height: '500px' }} className="text-center border-2 hover:bg-gray-100 transition-colors">
                    <div className="flex justify-center items-center" style={{ height: '300px', marginTop: '10px' }}>
                      <img
                        src="/project2.jpg"
                        alt="Project Two"
                        className="object-cover rounded-md"
                        style={{ width: '95%', height: '100%' }}
                      />
                    </div>
                    <CardContent>
                      <div className="flex flex-col items-center text-center" style={{ marginTop: '20px' }}>
                        <Label className="font-bold text-xl mb-2">Project Name</Label>
                        <Label className="text-sm text-gray-500 mb-4">Project Description</Label>
                      </div>
                      <div className="flex space-x-4 mt-4 justify-center" style={{ marginTop: '35px' }}>
                        <a href="https://github.com/" target="_blank" rel="Github Account">
                          <Button variant="default">Github</Button>
                        </a>
                        <a href="https://youtube.com/" target="_blank" rel="Project Demo">
                          <Button variant="default">Live Demo</Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
              </HoverCard>

              {/* Project 3 */}
              <HoverCard>
                <HoverCardTrigger>
                  <Card style={{ width: '400px', height: '500px' }} className="text-center border-2 hover:bg-gray-100 transition-colors">
                    <div className="flex justify-center items-center" style={{ height: '300px', marginTop: '10px' }}>
                      <img
                        src="/project3.jpg"
                        alt="Project Three"
                        className="object-cover rounded-md"
                        style={{ width: '95%', height: '100%' }}
                      />
                    </div>
                    <CardContent>
                      <div className="flex flex-col items-center text-center" style={{ marginTop: '20px' }}>
                        <Label className="font-bold text-xl mb-2">Project Name</Label>
                        <Label className="text-sm text-gray-500 mb-4">Project Description</Label>
                      </div>
                      <div className="flex space-x-4 mt-4 justify-center" style={{ marginTop: '35px' }}>
                        <a href="https://github.com/" target="_blank" rel="Github Account">
                          <Button variant="default">Github</Button>
                        </a>
                        <a href="https://youtube.com/" target="_blank" rel="Project Demo">
                          <Button variant="default">Live Demo</Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
              </HoverCard>
            </div>
          </div>

          {/* Contact part */}
          <div ref={contactRef} className="w-full flex flex-col items-center mt-4" style={{ marginTop: '350px', marginLeft: '30px' }}>
            <div className="flex flex-col items-center mb-2">
              <Label className="font-bold text-xl mb-2">Get In Touch</Label>
              <Label className="font-bold text-6xl mb-2">Contact Me</Label>
            </div>

            <div className="flex space-x-8 items-center" style={{ marginTop: '10px' }}>
              <div className="flex items-center space-x-2">
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-black">
                  <Mail className="text-white" />
                </div>
                <span className="text-black font-medium">Mail@mail.com</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-black">
                  <Linkedin className="text-white" />
                </div>
                <span className="text-black font-medium">LinkedIn</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-black">
                  <Github className="text-white" />
                </div>
                <span className="text-black font-medium">Github@Github.com</span>
              </div>
            </div>

            <div className="flex flex-col space-y-4 max-w-4xl mx-auto p-4" style={{ marginTop: '30px' }}>
              <div className="flex items-center">
                <Label className="w-24 text-right mr-4">Name</Label>
                <Input placeholder="Your name.." style={{ width: '1000px' }} id="name"
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="flex items-center">
                <Label className="w-24 text-right mr-4">Email</Label>
                <Input placeholder="Your email address.." style={{ width: '1000px' }} id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex items-center">
                <Label className="w-24 text-right mr-4">Subject</Label>
                <Input placeholder="Your contact subject.." style={{ width: '1000px' }} id="subject"
                  type="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="flex items-center">
                <Label className="w-24 text-right mr-4">Message</Label>
                <Textarea placeholder="Write something.." rows={4} style={{ width: '1000px' }} id="message"
                />
              </div>
              <div className="flex justify-end mt-4">
                <Button variant="destructive" className="bg-orange-500 text-white" onClick={onSubmit}>Submit</Button>
              </div>
              <div style={{marginTop: '50px'}}></div>
            </div>


          </div>
        </div>

        
      </div>


    </div>

      {/* Buttom NavBar */}
      {/* <div className="w-full bg-black text-white py-4 mt-8" style={{ height: '150px', marginTop:'100px'}}>
      <div className="flex justify-center space-x-16" style={{marginTop:'15px'}}>
        <Button variant="link" className="text-white text-bold text-2xl" onClick={() => scrollToSection(aboutMeRef)}>About Me</Button>
        <Button variant="link" className="text-white text-bold text-2xl" onClick={() => scrollToSection(experienceRef)}>Experience</Button>
        <Button variant="link" className="text-white text-bold text-2xl" onClick={() => scrollToSection(projectRef)}>Project</Button>
        <Button variant="link" className="text-white text-bold text-2xl" onClick={() => scrollToSection(contactRef)}>Contact</Button>
      </div>
      <div className="text-center mt-4" style={{marginTop:'25px'}}>
        <span>Copyright © 2024 Yuqing Wu. All Rights Reserved.</span>
      </div>
    </div> */}

    </>




  );
}


export default Portfolio;

