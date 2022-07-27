import React from "react";
import Logo from "../header/Logo";
import styles from "../header/Header.module.css";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import Image from 'next/image';

export const Header = () => {
  return (
    <>
      <header className={`${styles.headerContainer} pageHeader`}>
        <Navbar collapseOnSelect>
          <div className="container-fluid">
            <Navbar.Brand href="/" className={`${styles.logoSect}`}>
              <Logo
               logoImg="/abroad-Logo.png" 
               />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className={`${styles.menuTab} hderMenuTab`}>
                <Link href="/">Home</Link>              
                <Link href="/about">About Us</Link>
                <Link href="/countrie&university">Countries & Universities</Link>
                <Link href="/team">Our Team</Link> 
                
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
