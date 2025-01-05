import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Shri Nanka Nursing Home - Advanced Neuro & Skin Care Center is a trusted healthcare facility in Musakhedi, Indore, specializing in advanced neurology and dermatology treatments. With a commitment to quality care, the center operates from 9:00 AM to 9:00 PM, Monday to Saturday. Located at 84, Shri Vinayak Township, Devguradia, Indore, it offers accessible and expert medical services to the community.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Specialist"
          description="Find the right neuro and skin care specialist at Shri Nanka Nursing Home. Our team of experienced doctors is dedicated to offering personalized care, addressing your unique health needs with expertise."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Book your appointment with ease! Select the date and time that suits your schedule, and our medical team will ensure that you receive the highest level of care tailored to your condition."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Experience expert neuro and skin treatments at Shri Nanka Nursing Home. Our specialists are committed to providing effective and personalized solutions for your health and well-being, ensuring the best possible care every step of the way."
        />
      </div>
    </div>
  );
}

export default About;
