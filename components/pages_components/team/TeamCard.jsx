import React from "react";
import Custom_TeamCard from "./Custom_TeamCard";

export const TeamCard = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              
              <Custom_TeamCard
                teamImage="/team/mayank_sir.png"
                Heading01="Mayank Gupta"
                Heading02="CHIEF EXECUTIVE OFFICER"
              />
            </div>
            <div className="col-md-4">
              
              <Custom_TeamCard
                teamImage="/team/Rohit_sir.png"
                Heading01="Rohit Gupta"
                Heading02="CHIEF OPERATING OFFICER"
              />
            </div>
            <div className="col-md-4">
              <Custom_TeamCard
                teamImage="/team/ashok_sir.png"
                Heading01="Ashok Joshi"
                Heading02="ASSISTANT VICE PRESIDENT SKILL & NEW INITIATIVE"
              />
            </div>
            <div className="col-md-4">
              <Custom_TeamCard
                teamImage="/team/Vinni_mam.png"
                Heading01="Vini Mathew"
                Heading02="ASSISTANT VICE PRESIDENT
                HUMAN RESOURCE"
              />
            </div>
            <div className="col-md-4">
              <Custom_TeamCard
                teamImage="/team/Sarthak_sir.png"
                Heading01="Sarthak Garg"
                Heading02="CHIEF EXECUTIVE OFFICER"
              />
            </div>
            <div className="col-md-4">
              
              <Custom_TeamCard
                teamImage="/team/Sidhartha_sir.png"
                Heading01="Siddharth Stephen"
                Heading02="SENIOR MANAGER
                CORPORATE STRATEGY"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamCard;
