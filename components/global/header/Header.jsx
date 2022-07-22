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
            <Navbar.Brand href="#home" className={`${styles.logoSect}`}>
              <Logo
               logoImg="/abroad-Logo.png" 
               />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className={`${styles.menuTab} hderMenuTab`}>
                <Link href="/">Home</Link>
                <Link href="/">Talk with an Expert</Link>
                <Link href="/">About Us</Link>
                <Link href="/">Countries & Universities</Link>
                <Link href="/">Contact Us</Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
