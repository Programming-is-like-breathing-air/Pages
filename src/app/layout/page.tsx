'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"



const Layout = () => {
  const handleMenuClick = () => {
    // 实现菜单点击功能
  };

  return (
    <div className="w-full flex flex-col items-center border border-gray-300 p-4 rounded-lg">
      {/* Secondary Navigation Bar */}
      <div className="w-full flex items-center justify-between border-b border-gray-300 pb-2 mb-4 fixed top-16 left-0 bg-white z-10" style={{ height: '70px' }}>
        <div className="container mx-auto flex items-center justify-between px-4">
          <Label className="text-3xl font-bold tracking-tight">Portfolio</Label>
          <div className="flex space-x-4 ml-auto">
            <Button variant="link" className="text-black">About Me</Button>
            <Button variant="link" className="text-black">Experience</Button>
            <Button variant="link" className="text-black">Project</Button>
            <Button variant="link" className="text-black">Contact</Button>
          </div>
        </div>
      </div>


      {/* 主内容 */}
      <main className="main-content mt-32 w-full">
        <section className="pic bg-gray-200 h-64">
          <img alt="University of Sydney" className="back" src="assets/back.png" />
        </section>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/layout">Layout</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>


        <section className="titlerow flex flex-wrap">
          <div className="left w-full md:w-2/3 p-4">
            <h1 className="title text-4xl font-bold">Page Title</h1>
            <div className="underline my-2">
              <div className="line w-24 h-1 bg-black"></div>
            </div>
            <p className="summary mb-4">This is page summary text. It uses the text component where the author is restricted to the large paragraph style.</p>
            <nav className="inpagenav" aria-label="navigation for this page">
              <div className="navtitle font-bold mb-2">On this page</div>
              <ul>
                <li><a href="#first" className="current">&#8600 &nbsp; Heading 1 (hover state)</a></li>
                <li><a href="#second">&#8600 &nbsp; Heading 2</a></li>
                <li><a href="#third">&#8600 &nbsp; Heading 3</a></li>
              </ul>
            </nav>
          </div>
          <div className="right w-full md:w-1/3 p-4">
            <nav className="rightnav" aria-label="section menu">
              <ol>
                <li><a href="#">PARENT PAGE</a></li>
                <li><a href="#">Sibling page</a></li>
                <li className="current"><a href="#">Current page</a></li>
                <ol>
                  <li><a href="#">Child of current page</a></li>
                  <li><a href="#">Child of current page</a></li>
                </ol>
                <li><a href="#">Sibling page</a></li>
                <li><a href="#">Sibling page</a></li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="row" id="first">
          <h2>Heading 1</h2>
          <div className="content">
            <div className="img bg-gray-300 h-48"></div>
            <div className="imgtext">This is an image caption</div>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </section>
        <section className="row" id="second">
          <h2>Heading 2</h2>
          <div className="content">
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </section>
        <section className="row" id="third">
          <h2>Heading 3</h2>
          <div className="content">
            <p>Lorem ipsum dolor sit amet...</p>
            <div className="accordion">
              <div className="collapsed">
                <p>Accordion</p>
                {/* SVG图标 */}
              </div>
              <div className="expanded hidden">
                Lorem ipsum dolor sit amet...
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white p-4 w-full">
        <div className="wrapper flex justify-between">
          <div className="left">
            <img className="logo-white" src="assets/usyd_logo_white.svg" alt="University of Sydney Logo" />
            <p>Sidere mens eadem mutato,</p>
            <p>The stars change, the mind remains the same</p>
            <div className="social flex space-x-4">
              <span className="icon">{/* SVG for social icons */}</span>
            </div>
          </div>
          <div className="right flex space-x-8">
            <div className="column">
              <div className="header">Media</div>
              <div className="items">
                <p>News</p>
                <p>Find an expert</p>
                <p>Media contacts</p>
              </div>
            </div>
            <div className="column">
              <div className="header">Student links</div>
              <div className="items">
                <p>How to log in to University systems</p>
                <p>Key dates</p>
                <p>Class timetables</p>
                <p>Policies</p>
              </div>
            </div>
            <div className="column">
              <div className="header">About us</div>
              <div className="items">
                <p>Our rankings</p>
                <p>Faculties and schools</p>
                <p>Research centres</p>
                <p>Campus locations</p>
              </div>
            </div>
            <div className="column">
              <div className="header">Connect</div>
              <div className="items">
                <p>Contact us</p>
                <p>Find a staff member</p>
                <p>Careers at Sydney</p>
                <p>Find an event</p>
                <p>Emergencies and personal safety</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom text-center">
          <p>&copy; 2023 The University of Sydney | ABN: 15 211 513 464 | CRICOS: 00026A</p>
          <p>Leadership for good starts here</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
