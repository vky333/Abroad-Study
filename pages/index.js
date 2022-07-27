import React from 'react'
import Header from '../components/global/header/Header'
import Footer from "../components/global/footer/Footer"
import styles from '../styles/Home.module.css'
import StaticBanner  from "../components/global/banner/StaticBanner"
import Country from "../components/global/country/Country"
import { Journey } from '../components/global/journey/Journey'
import Form_Container from '../components/global/form/Form_Container'

export default function Home() {
  return (
    <div className={styles.HomeContainer}>
       <Header/>
       <StaticBanner/>
       <Country/>
       <Journey/>
       <Form_Container/>
       <Footer/>
       
       
      
    </div>
  )
}
