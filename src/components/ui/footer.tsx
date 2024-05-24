'use client'
import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./footerStyle";
import { Linkedin, Github, Facebook ,Twitter} from 'lucide-react';
import { Button } from "./button";
const Footer = () => {
    return (
        <Box style={{ backgroundColor: "#262626", color: "white", padding: "20px 0" }}>
            <FooterContainer>
                <Row style={{ justifyContent: "space-between" }}>
                    <Column>
                        <img
                            src="/usyd_logo_white.svg"
                            alt="University of Sydney Logo"
                        />
                        <br></br>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <a href="https://au.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <Button variant="link" style={{ color: 'black' }}><Linkedin color="#ffffff"/></Button>
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                <Button variant="link" style={{ color: 'black' }}><Github color="#ffffff"/></Button>
                            </a>
                            <a href="https://www.facebook.com/sydneyuni/" target="_blank" rel="noopener noreferrer">
                                <Button variant="link" style={{ color: 'black' }}><Facebook color="#ffffff"/></Button>
                            </a>
                            <a href="https://x.com/Sydney_Uni?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
                                <Button variant="link" style={{ color: 'black' }}><Twitter color="#ffffff"/></Button>
                            </a>
                        </div>
                    </Column>
                    <Column></Column>
                    <Column>
                        <Heading>Media</Heading>
                        <FooterLink href="#">News</FooterLink>
                        <FooterLink href="#">Find an expert</FooterLink>
                        <FooterLink href="#">Media contacts</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Student Links</Heading>
                        <FooterLink href="#">How to log in to University systems</FooterLink>
                        <FooterLink href="#">Key dates</FooterLink>
                        <FooterLink href="#">Class timetables</FooterLink>
                        <FooterLink href="#">Policies</FooterLink>
                    </Column>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Our rankings</FooterLink>
                        <FooterLink href="#">Faculties and schools</FooterLink>
                        <FooterLink href="#">Research centres</FooterLink>
                        <FooterLink href="#">Campus locations</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Connect</Heading>
                        <FooterLink href="#">Contact us</FooterLink>
                        <FooterLink href="#">Find a staff member</FooterLink>
                        <FooterLink href="#">Careers at Sydney</FooterLink>
                        <FooterLink href="#">Find an event</FooterLink>
                    </Column>
                </Row>
                <div style={{ textAlign: "center", marginTop: "20px", fontSize: "12px" }}>
                    © 2024 The University of Sydney | ABN: 15 211 513 464 | CRICOS: 00026A
                </div>
            </FooterContainer>
        </Box>
    );
};
export default Footer;
