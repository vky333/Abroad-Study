import React from 'react'
import Header from '../components/global/header/Header'
import Footer from "../components/global/footer/Footer"
import styles from '../styles/Home.module.css'
import StaticBanner  from "../components/global/banner/StaticBanner"
import Country from "../components/global/country/Country"
import { Journey } from '../components/global/journey/Journey'
import Form_Home from '../components/global/form/Form_Home'

export default function Home() {
  return (
    <div className={styles.HomeContainer}>
       <Header/>
       <StaticBanner/>
       <Country/>
       <Journey/>
       <Form_Home/>
       <Footer/>
       
       
      
    </div>
  )
}
