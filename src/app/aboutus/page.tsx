'use client'

import React from 'react'

import { Card, CardContent, CardTitle } from '@/components/ui/card'

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

import { Button } from '@/components/ui/button';

const AboutUs = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server
  }

  return (
    <div className='flex flex-col items-center h-full w-full mt-12 pt-[60px]'>
      <div className='flex w-[1168px]'>
        <Card className='border-none'>
          <Card className='w-[240px] block pl-[10px] pr-[23px] border-none'>
            <CardContent className='lefttitle h-[63px] leading-[63px] pl-[25px] pr-0 py-0 font-extrabold border-none'>Home</CardContent>
            <CardContent className='menu border-t-2 font-extrabold text-red-500 border-black h-[56px] leading-[56px] pl-[15px] pr-0 py-0 border-none'>About us</CardContent>
            <div className='leftlist'>
              <ul>
                <CardContent className='font-semibold h-[55px] leading-[55px] pl-[25px] pr-0 py-0 border-t border-gray-400 border-none'><a href="#">Our story</a></CardContent>
                <CardContent className='font-semibold h-[55px] leading-[55px] pl-[25px] pr-0 py-0 border-t border-gray-400 border-none'><a href="#">2032 Strategy</a></CardContent>
                <CardContent className='font-semibold h-[55px] leading-[55px] pl-[25px] pr-0 py-0 border-t border-gray-400 border-none'><a href="#">Our rankings</a></CardContent>
                <CardContent className='font-semibold h-[55px] leading-[55px] pl-[25px] pr-0 py-0 border-t border-gray-400 border-none'><a href="#">Vision and values</a></CardContent>
                <CardContent className='font-semibold h-[70px] flex items-center pl-[25px] pr-0 py-0 border-t border-gray-400 border-none'><a href="#">Governance and structure</a></CardContent>
                <CardContent className='font-semibold h-[55px] leading-[55px] pl-[25px] pr-0 py-0 border-t border-gray-400 border-none'><a href="#">Faculties and schools</a></CardContent>
                <CardContent className='font-semibold h-[55px] leading-[55px] pl-[25px] pr-0 py-0 border-t border-gray-400 border-none'><a href="#">Campuses</a></CardContent>
                <CardContent className='font-semibold h-[55px] leading-[55px] pl-[25px] pr-0 py-0 border-t border-gray-400 border-none'><a href="#">Careers at Sydney</a></CardContent>
                <CardContent className='font-semibold h-[70px] flex items-center pl-[25px] pr-0 py-0 border-y border-gray-400 border-none'><a href="#">Working with the University</a></CardContent>
              </ul>
            </div>
          </Card>
          <Card className='lefttips border-none rouned-none text-white bg-red-600 w-[340px] h-[720px] py-[25px] pr-[25px] pl-[110px] ml-[-100px] border-none'>
            <CardContent className='facts p-0 border-none'>Facts & figures</CardContent>
            <CardTitle className='titlelarge pb-[20px] border-b border-black border-none'>About us</CardTitle>
            <ul>
              <CardContent className='py-[20px] px-0 border-b border-black border-none'>
                <CardTitle>74,000</CardTitle>
                <CardContent className='p-0 text-black border-none'>students (based on student enrolments as at March 2021)</CardContent>
              </CardContent>
              <CardContent className='py-[20px] px-0 border-b border-black border-none'>
                <CardTitle>8100</CardTitle>
                <CardContent className='p-0 text-black border-none'>continuing and fixed-term staff (based on University statistics at 31 March 2021)</CardContent>
              </CardContent>
              <CardContent className='py-[20px] px-0 border-b border-black border-none'>
                <CardTitle>250+</CardTitle>
                <CardContent className='p-0 text-black border-none'>exchange opportunities</CardContent>
              </CardContent>
              <CardContent className='py-[20px] px-0 border-b border-black border-none'>
                <CardTitle>420,000</CardTitle>
                <CardContent className='p-0 text-black border-none'>alumni in more than 170 countries</CardContent>
              </CardContent>
              <CardContent className='py-[20px] px-0 border-none'>
                <CardTitle>#1</CardTitle>
                <CardContent className='p-0 text-black border-none'>Uni in Australia producing the largest number of start-up founders</CardContent>
              </CardContent>
            </ul>
          </Card>
        </Card>
        <div className='flex flex-col w-full'>
          <Card className='titleColumn px-5 mb-[20px] rounded-none border-none w-full h-[160px] flex items-center border-none'>
            <div>
              <CardTitle className='pt-[35px] pb-[30px] text-md border-none'>University_</CardTitle>
              <CardTitle className='text-[35px] border-none'>About us</CardTitle>
              <CardContent className='px-0 pb-[20px] pt-6 text-2xl border-none'>We’ve been challenging traditions for over 170 years</CardContent>
            </div>
          </Card>
          <div className='bodyColumn flex'>
            <div className='mid box-border w-2/3 px-5 border-none'>
              <div className='bcom text-lg pb-[40px] border-none'>
                We make lives better by producing leaders of society and equipping our people with leadership qualities so they can serve our communities at every level.
              </div>
              <Card className='video w-[587px] pt-6 border-t border-black rounded-none border-none'>
                <iframe width='100%' height='315' className='cursor-pointer' src='https://www.youtube.com/embed/fK_w3hcSCeI?si=jPhRkgk1Pfa7_8Kc' title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
              </Card>
              <div className='imagelist'>
                <ul>
                  <li>
                    <Card className='rounded-none border-none h-[628px] py-[15px] border-none'>
                      <CardContent className='py-[20px] px-0 border-t border-black border-none'>University_</CardContent>
                      <div className='relative border-none'>
                        <img src='/aboutusImage/news.jpeg' alt='' className='h-[260px] w-[587px] border-none' />
                        <img src='/aboutusImage/arrow.png' alt='' className='h-[68px] w-[68px] absolute bottom-0 right-0 border-none' />
                      </div>
                      <CardContent className='article__title text-[20px] mb-[8px] px-0 py-4 h-[52px] border-none'>2032 Strategy</CardContent>
                      <CardContent className='artcle_tips pt-6 pb-0 px-0 h-[100px] mr-[20px] border-none'>
                        Our 2032 Strategy channels our sense of responsibility to contribute to a better world, building on our past decade of significant change and challenges.
                      </CardContent>
                      <div className='arrowright mt-[10px] border-none'>
                        <img src='/aboutusImage/arrow1.png' width={30} height={50} alt='' className='border-none' />
                      </div>
                    </Card>
                  </li>
                </ul>
              </div>
              <div className='imagelist imagelist-small'>
                <ul className="flex flex-wrap justify-between w-[573px] border-none">
                  <Card className="mb-8 w-[280px] border-t border-black rounded-none border-none">
                    <CardContent className='py-[20px] px-0 border-none'>University_</CardContent>
                    <div className='imagess imagess1 news1 relative border-none'>
                      <img src='/aboutusImage/news1.jpeg' alt='' className='h-[212px] w-[587px] border-none' />
                      <img src='/aboutusImage/arrow.png' alt='' className='h-[68px] w-[68px] absolute bottom-0 right-0 border-none' />
                    </div>
                    <CardContent className='article__title text-[20px] mb-[8px] px-0 py-4 h-[52px] border-none'>Leadership for good</CardContent>
                    <CardContent className='artcle_tips px-0 pt-[20px] border-none'>
                      We are Australia’s first university, Sydney’s university and a great global university, and we’ve set our sights on contributing to a better world.
                    </CardContent>
                    <div className='arrowright border-none'>
                      <img src='/aboutusImage/arrow1.png' width={30} height={50} alt='' className='border-none' />
                    </div>
                  </Card>
                  <Card className="mb-8 w-[280px] border-t border-black rounded-none border-none">
                    <CardContent className='py-[20px] px-0 border-none'>University_</CardContent>
                    <div className='imagess imagess1 news2 relative border-none'>
                      <img src='/aboutusImage/news2.jpeg' alt='' className='h-[212px] w-[587px] border-none' />
                      <img src='/aboutusImage/arrow.png' alt='' className='h-[68px] w-[68px] absolute bottom-0 right-0 border-none' />
                    </div>
                    <CardContent className='article__title text-[20px] mb-[8px] px-0 py-4 h-[52px] border-none'>Our world rankings</CardContent>
                    <CardContent className='artcle_tips px-0 pt-[20px] border-none'>
                      Rankings demonstrate how the standard of our research and teaching measures up against the best universities in Australia and worldwide.
                    </CardContent>
                    <div className='arrowright border-none'>
                      <img src='/aboutusImage/arrow1.png' width={30} height={50} alt='' className='border-none' />
                    </div>
                  </Card>
                  <Card className="mb-8 w-[280px] border-t border-black rounded-none border-none">
                    <CardContent className='py-[20px] px-0 border-none'>University_</CardContent>
                    <div className='imagess imagess1 news3 relative border-none'>
                      <img src='/aboutusImage/news3.webp' alt='' className='h-[212px] w-[587px] border-none' />
                      <img src='/aboutusImage/arrow.png' alt='' className='h-[68px] w-[68px] absolute bottom-0 right-0 border-none' />
                    </div>
                    <CardContent className='article__title text-[20px] mb-[8px] px-0 py-4 h-[52px] border-none'>Our campuses</CardContent>
                    <CardContent className='artcle_tips px-0 pt-[20px] border-none'>
                      Our famous Quadrangle might be what springs to mind when you think of our campus, but we also have working farms, a field station on the Great Barrier Reef and much more.
                    </CardContent>
                    <div className='arrowright border-none'>
                      <img src='/aboutusImage/arrow1.png' width={30} height={50} alt='' className='border-none' />
                    </div>
                  </Card>
                  <Card className="mb-8 w-[280px] border-t border-black rounded-none border-none">
                    <CardContent className='py-[20px] px-0 border-none'>University_</CardContent>
                    <div className='imagess imagess1 news4 relative border-none'>
                      <img src='/aboutusImage/news4.jpeg' alt='' className='h-[212px] w-[587px] border-none' />
                      <img src='/aboutusImage/arrow.png' alt='' className='h-[68px] w-[68px] absolute bottom-0 right-0 border-none' />
                    </div>
                    <CardContent className='article__title text-[20px] mb-[8px] px-0 py-4 h-[52px] border-none'>Faculties and schools</CardContent>
                    <CardContent className='artcle_tips px-0 pt-[20px] border-none'>
                      We promote leadership through excellence in teaching and research, offering the widest range of academic programs of any university in Australia.
                    </CardContent>
                    <div className='arrowright border-none'>
                      <img src='/aboutusImage/arrow1.png' width={30} height={50} alt='' className='border-none' />
                    </div>
                  </Card>
                  <Card className="mb-8 w-[280px] h-[610px] border-t border-black rounded-none border-none">
                    <CardContent className='py-[20px] px-0 border-none'>University_</CardContent>
                    <div className='imagess imagess1 news5 relative border-none'>
                      <img src='/aboutusImage/news5.jpeg' alt='' className='h-[212px] w-[587px] border-none' />
                      <img src='/aboutusImage/arrow.png' alt='' className='h-[68px] w-[68px] absolute bottom-0 right-0 border-none' />
                    </div>
                    <CardContent className='article__title text-[20px] mb-[8px] px-0 py-4 h-[104px] border-none'>Aboriginal and Torres Strait Islander community</CardContent>
                    <CardContent className='artcle_tips px-0 pt-[20px] border-none'>
                      The University of Sydney is committed to higher education and leadership opportunities for Aboriginal and Torres Strait Islander peoples and valuing Indigenous culture.
                    </CardContent>
                    <div className='arrowright border-none'>
                      <img src='/aboutusImage/arrow1.png' width={30} height={50} alt='' className='border-none' />
                    </div>
                  </Card>
                  <Card className="mb-8 w-[280px] h-[610px] border-t border-black rounded-none border-none">
                    <CardContent className='py-[20px] px-0 border-none'>University_</CardContent>
                    <div className='imagess imagess1 news6 relative border-none'>
                      <img src='/aboutusImage/news6.jpeg' alt='' className='h-[212px] w-[587px] border-none' />
                      <img src='/aboutusImage/arrow.png' alt='' className='h-[68px] w-[68px] absolute bottom-0 right-0 border-none' />
                    </div>
                    <CardContent className='article__title text-[20px] mb-[8px] px-0 py-4 h-[104px] border-none'>LGBTIQ community on campus</CardContent>
                    <CardContent className='artcle_tips px-0 pt-[20px] border-none'>
                      The University of Sydney celebrates lesbian, gay, bisexual, transgender, intersex and queer or questioning staff and students because of the unique lived experiences they bring to our workplace and classrooms.
                    </CardContent>
                    <div className='arrowright border-none'>
                      <img src='/aboutusImage/arrow1.png' width={30} height={50} alt='' className='border-none' />
                    </div>
                  </Card>
                </ul>
              </div>
            </div>
            <div className='right w-1/3 ml-[28px] border-none'>
              <Card className='callmodule bg-red-600 text-white w-[278px] h-[215px] p-[25px] mb-[40px] border-none'>
                <a href="https://www.sydney.edu.au/students/student-contacts-enquiries.html" target="_blank" className='border-none'> 
                  <CardTitle className='text-3xl border-none'>Student enquiries</CardTitle>
                  <Button variant='link' className='text-white p-0 border-none'> Contact us</Button>
                  <img src="aboutusImage/arrow2.png" width="30" className='border-none' />
                </a>
              </Card>
              <Card className='callmodule bg-gray-100 text-black w-[278px] h-[215px] p-[25px] mb-[40px] border-none'>
                <a href="#" className='border-none'>
                  <CardTitle className='text-3xl border-none'>Make more possible</CardTitle>
                  <Button variant='link' className='text-black p-0 border-none'> Donate to the University</Button>
                  <img src="aboutusImage/arrow3.png" width="30" className='border-none'></img>
                </a>
              </Card>
              <Card className="phnoes text-black w-[278px] h-[252px] mb-[40px] border-none">
                <CardContent className='text-xl p-0 mb-[15px] border-none'>Visitors enquiries</CardContent>
                <CardContent className='p-0 mb-[8px] text-sm border-none'>Phone</CardContent>
                <Button variant='link' className='text-red-600 p-0 underline border-none'><a href="#">+61 2 9351 2222</a></Button>
                <CardContent className='p-0 my-[8px] text-sm border-none'>Email</CardContent>
                <Button variant='link' className='text-red-600 p-0 underline border-none'><a href="#">info.centre@sydney.edu.au</a></Button>
                <CardContent className='p-0 mb-[8px] text-sm border-none'>Address</CardContent>
                <CardContent className='p-0 mb-[8px] text-sm border-none'>The University of Sydney NSW 2006, Australia</CardContent>
              </Card>
              <Card className="sharelinks flex flex-col items-start border-none">
                <Card className='w-[278px] h-[60px] flex border-b border-black text-3xl border-none'>Useful links</Card>
                <Button variant='link' className='text-red-600 underline h-[55px] p-0 border-none'><a href="#">Careers at Sydney</a> <img src="aboutusImage/arrow1.png" width="20" className='border-none' /></Button>
                <Button variant='link' className='text-red-600 underline h-[55px] p-0 border-none'><a href="#">Visit the University</a> <img src="aboutusImage/arrow1.png" width="20" className='border-none' /></Button>
                <Button variant='link' className='text-red-600 underline h-[55px] p-0 border-none'><a href="#">Annual Report</a> <img src="aboutusImage/arrow1.png" width="20" className='border-none' /></Button>
                <Button variant='link' className='text-red-600 underline h-[55px] p-0 border-none'><a href="#">Policy register</a> <img src="aboutusImage/arrow1.png" width="20" className='border-none' /></Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'


const aboutus = () => {
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
  );
};

export default AboutUs;
