import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "../footer/Footer.module.css"
import Image from 'next/image';
import Link from 'next/link';
import {MdMailOutline} from 'react-icons/md';
import {IoMdCall} from 'react-icons/io';
import {GrFacebookOption, GrLinkedinOption, GrYoutube} from 'react-icons/gr';
import {FaTwitter} from 'react-icons/fa';
import {AiTwotoneHeart} from 'react-icons/ai';
import Logo from "../header/Logo"

export const Footer = () => {
  return (
    <>
        <footer className={`${styles.footer_sec} footerBox`}>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className='text-white'>
                            <Logo logoImg="/Logo-White.png" />
                            <p className='mt-2 ftrLogoConent'>
                                We let you analyze and compare the best return on investment 
                                for the time, money, and efforts you are willing to put into
                                 your dream of studying abroad. Likewise, our experts are here 
                                 to help and guide you with all of your doubts, just like a 
                                 good friend would.
                            </p>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className={styles.footer_list}>
                            <h5 className='text-white fw-bold mb-1'>Inside</h5>
                            <Link href="/">Home</Link>              
                <Link href="about">About Us</Link>
                <Link href="contries">Countries & Universities</Link>
                <Link href="team">Our Team</Link> 
                            
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className={`${styles.footer_list} ${styles.footer_icon}`}>
                            <h5 className='text-white fw-bold mb-1'>Contact us</h5>
                            <div><Link href="/"><a><MdMailOutline /> Info@collegevidya.com</a></Link></div>
                            <div className="mb-1"><Link href="/"><a><IoMdCall /> 1800-420-5757</a></Link></div>
                            <Link href="/"><a><GrFacebookOption /></a></Link>
                            <Link href="/"><a><FaTwitter /></a></Link>
                            <Link href="/"><a><GrLinkedinOption /></a></Link>
                            <Link href="/"><a><GrYoutube /></a></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className={`${styles.copyright} mt-2`}>
                <div>
                    <p className='mb-0'>© 2022 CollegeVidya, Inc. All Rights Reserved.</p>
                </div>
                <div>
                    <p className='mb-0'>Build With <span><AiTwotoneHeart /></span> Made In India</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer;