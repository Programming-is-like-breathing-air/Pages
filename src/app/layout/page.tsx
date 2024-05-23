'use client';
import React from 'react';
import { useState } from "react";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"//npm install embla-carousel-autoplay

const data = [
  {
    imagelink:
      "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/slide/withPreview/desktop/assets/BondiBeach.jpg?raw=true",
  },
  {
    imagelink:
      "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/slide/withPreview/desktop/assets/Chinatown.jpg?raw=true",
  },
  {
    imagelink:
      "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/slide/withPreview/desktop/assets/SydneyOperaHouse.png?raw=true",
  },
  {
    imagelink:
      "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/slide/withPreview/desktop/assets/SydneyTower.jpg?raw=true",
  },
  {
    imagelink:
      "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/slide/withPreview/desktop/assets/USYD.jpeg?raw=true",
  },
];

const imageUrl = 'https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg';
// Quotes data array
const quotes = [
  {
    word: "I love you the more in that I believe you had liked me for my own sake and for nothing else",
    author: "John Keats"
  },
  {
    word: "But man is not made for defeat. A man can be destroyed but not defeated.",
    author: "Ernest Hemingway"
  },
  {
    word: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison"
  }
];
const Layout = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <div className="w-full flex flex-col items-center border border-gray-300 p-4 rounded-lg">
      {/* Secondary Navigation Bar */}
      <div style={styles.secondaryNav}>
        <div style={styles.navContainer}>
          <Label style={styles.label}>Portfolio</Label>
          <div style={styles.navButtons}>
            <Button variant="link" style={styles.button}>About Me</Button>
            <Button variant="link" style={styles.button}>Experience</Button>
            <Button variant="link" style={styles.button}>Project</Button>
            <Button variant="link" style={styles.button}>Contact</Button>
          </div>
        </div>
      </div>

      {/* body */}
      <main className="main-content mt-32 w-full">
        <section style={{ padding: '20px', margin: '0 auto', width: '90%', maxWidth: '100%' }}>
          <Carousel className="h-auto w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {data.map((imagelink, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <img src={imagelink.imagelink} className="max-w-full max-h-full" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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

        <section style={styles.titleRow} aria-label="title and article navigation">
          <div style={styles.left}>
            <h1 style={styles.pageTitle}>Page Title</h1>
            <div style={styles.underline}>
              <div style={styles.line}></div>
            </div>
            <p style={styles.summary}>This is page summary text. It uses the text component where the author is restricted to the large paragraph style.</p>
            <nav style={styles.inPageNav} role="navigation" aria-label="navigation for this page">
              <div style={styles.navTitle}>On this page</div>
              <ul>
                <li><a href="#first" className="current" style={{ ...styles.inPageNavLink, ...styles.current }}>-&nbsp; Heading 1 (hover state)</a></li>
                <li><a href="#second" style={styles.inPageNavLink}>-&nbsp; Heading 2</a></li>
                <li><a href="#third" style={styles.inPageNavLink}>-&nbsp; Heading 3</a></li>
              </ul>
            </nav>
          </div>
          <div style={styles.right}>
            <nav style={styles.rightNav} role="navigation" aria-label="section menu">
              <ol role="menubar">
                <li role="menuitem" className="parent" style={styles.rightNavItem}><a href="#">PARENT PAGE</a></li>
                <li role="menuitem" style={styles.rightNavItem}><a href="#">Sibling page</a></li>
                <li role="menuitem" className="current" style={{ ...styles.rightNavItem, ...styles.currentItem }}><a href="#">Current page</a></li>
                <ol role="menuitem">
                  <li role="menuitem" className="child" style={styles.childItem}><a href="#">Child of current page</a></li>
                  <li role="menuitem" className="child" style={styles.childItem}><a href="#">Child of current page</a></li>
                </ol>
                <li role="menuitem" style={styles.rightNavItem}><a href="#">Sibling page</a></li>
                <li role="menuitem" style={styles.rightNavItem}><a href="#">Sibling page</a></li>
              </ol>
            </nav>
          </div>
        </section>

        <section style={{ ...styles.row, display: 'flex', justifyContent: 'space-between', padding: '20px' }} id="first">
          <h2 style={{ flex: '1', textAlign: 'left', fontWeight: 'bold', fontSize: '24px' }}>Heading 1</h2>
          <div style={{ flex: '2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '20px' }} >
            <div style={{ width: '100%', backgroundColor: 'rgb(255, 255, 255)' }} >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that match the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        <section style={{ ...styles.row, display: 'flex', justifyContent: 'space-between', padding: '20px' }} id="second">
          <h2 style={{ flex: '1', textAlign: 'left', fontWeight: 'bold', fontSize: '24px' }}>Heading 2</h2>
          <div style={{ flex: '2', marginLeft: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card className="max-w-lg bg-white rounded-lg shadow-sm overflow-hidden flex" style={{ width: '100%' }}>
              <div className="w-1/2">
                <img
                  src={imageUrl}
                  alt="University Building"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 p-4 flex flex-col justify-between">
                <div>
                  <CardHeader className="mb-2">
                    <CardTitle className="text-lg font-semibold">Contact us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      Submit a partnership enquiry, you can also make a donation by contacting the University revenue team.
                    </CardDescription>
                  </CardContent>
                </div>
                <Button className="mb-4">
                  Explore more →
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <section style={{ ...styles.row, display: 'flex', justifyContent: 'space-between', padding: '20px' }} id="third">
          <h2 style={{ flex: '1', textAlign: 'left', fontWeight: 'bold', fontSize: '24px' }}>Heading 3</h2>
          <div style={{ flex: '2', marginLeft: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Carousel className="w-full max-w-xs" style={{ width: '100%' }}>
              <CarouselContent>
                {quotes.map((quote, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center p-6">
                          <div className="text-center">
                            <p className="text-sm italic mb-4">{`"${quote.word}"`}</p>
                            <p className="text-lg font-semibold">{`- ${quote.author}`}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>

      {/* foot */}
      <footer style={{
        padding: '20px',
        backgroundColor: '#222',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          padding: '20px 0',
          borderBottom: '1px solid #444'
        }}>
          <div style={{ flex: '1', margin: '10px' }}>
            <img src={imageUrl} alt="University of Sydney" style={{ width: '150px', marginBottom: '20px' }} />
            <p>Sidere mens eadem mutato,</p>
            <p>The stars change, the mind remains the same</p>
            <div style={{ marginTop: '10px' }}>
              <span className="icon">{/* SVG for social icons */}</span>
              <span className="icon">{/* SVG for social icons */}</span>
              <span className="icon">{/* SVG for social icons */}</span>
              <span className="icon">{/* SVG for social icons */}</span>
            </div>
          </div>
          <div style={{ flex: '3', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', margin: '10px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Media</div>
              <div>
                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px 0' }}>News</button>
                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px 0' }}>Find an expert</button>
                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px 0' }}>Media contacts</button>
              </div>
            </div>
            <div style={{ flex: '1', margin: '10px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Student links</div>
              <div>
                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px 0' }}>How to log in to University systems</button>
                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px 0' }}>Key dates</button>
                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px 0' }}>Class timetables</button>
                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px 0' }}>Policies</button>
              </div>
            </div>
            <div style={{ flex: '1', margin: '10px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>About us</div>
              <div>
                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px 0' }}>Our rankings</button>
                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px 0' }}>Faculties and schools</button>
                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px 0' }}>Research centres</button>
                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px 0' }}>Campus locations</button>
              </div>
            </div>
            <div style={{ flex: '1', margin: '10px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Connect</div>
              <div>
                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px 0' }}>Contact us</button>
                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px 0' }}>Find a staff member</button>
                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px 0' }}>Careers at Sydney</button>
                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px 0' }}>Find an event</button>
                <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px 0' }}>Emergencies and personal safety</button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: '10px 0', borderTop: '1px solid #444', marginTop: '20px' }}>
          <p>&copy; 2023 The University of Sydney | ABN: 15 211 513 464 | CRICOS: 00026A</p>
          <p>Leadership for good starts here</p>
        </div>
      </footer>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  secondaryNav: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ccc',
    paddingBottom: '8px',
    marginBottom: '16px',
    position: 'fixed',
    top: '64px',
    left: '0',
    backgroundColor: 'white',
    zIndex: 10,
    height: '70px'
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px'
  },
  label: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  navButtons: {
    display: 'flex',
    gap: '16px',
    marginLeft: 'auto'
  },
  button: {
    color: 'black'
  },
  titleRow: {
    width: '100%',
    paddingBottom: '42px',
    display: 'flex',
    flexWrap: 'wrap' as 'wrap'
  },
  left: {
    width: '70%',
    float: 'left',
    paddingRight: '60px'
  },
  pageTitle: {
    fontSize: '48px',
    color: '#141414'
  },
  underline: {
    width: '100%',
    height: '20px',
    marginBottom: '42px'
  },
  line: {
    marginTop: '18px',
    borderTop: '3px solid #e64626',
    width: '40px',
    float: 'left'
  },
  summary: {
    marginBottom: '42px',
    color: '#222',
    paddingRight: '80px',
    lineHeight: '26px'
  },
  inPageNav: {
    fontSize: '18px',
    padding: '10px 0',
    fontWeight: 'bold'
  },
  inPageNavLink: {
    textDecoration: 'none',
    color: '#222',
    lineHeight: '30px'
  },
  current: {
    color: '#e64626'
  },
  right: {
    float: 'left'
  },
  rightNav: {
    paddingInlineStart: '0'
  },
  rightNavItem: {
    borderLeft: '2px solid #E3E5E8',
    lineHeight: '30px',
    listStyle: 'none',
    paddingLeft: '20px'
  },
  currentItem: {
    borderLeft: '2px solid #e64626',
    fontWeight: 'bold'
  },
  childItem: {
    paddingLeft: '40px'
  },
  row: {
    width: '100%',
    padding: '40px 0 42px 0',
    borderTop: '1px solid #E3E5E8'
  }
};

export default Layout;

