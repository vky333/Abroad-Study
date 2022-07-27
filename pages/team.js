import React from "react";
import Header from "../components/global/header/Header";
import Footer from "../components/global/footer/Footer";
import styles from "../styles/Team.module.css";
import Form_Container from "../components/global/form/Form_Container";
import TeamCard from "../components/pages_components/team/TeamCard";

export default function team() {
  return (
    <div className="teamContainer">
      <Header />
      <section className={`${styles.hederSection}`}>
        <h1 className={`${styles.teamBanner}`}>MEET OUR CORE TEAM</h1>
        <TeamCard />
      </section>
      <Form_Container />
      <Footer />
    </div>
  );
}
