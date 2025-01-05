import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse,  faTooth, faKitMedical } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          At Shri Nanka Nursing Home, we provide specialized care in neurology and dermatology to address a wide range of health concerns. From advanced diagnosis and treatment of neurological disorders to personalized skin care solutions, our expert team ensures comprehensive and compassionate care for every patient. We are committed to helping you achieve better health and confidence with state-of-the-art facilities and tailored medical solutions.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Advanced Neurology Care"
          description="Diagnosis and treatment of neurological disorders, including migraines, epilepsy, stroke, and nerve-related conditions."
          icon={faKitMedical}
        />

        <InformationCard
          title="Dermatology & Skin Treatments"
          description="Comprehensive care for skin conditions such as acne, eczema, psoriasis, and aesthetic dermatology solutions."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Health Check-ups & Preventive Care"
          description="Regular health assessments and preventive care programs to maintain overall well-being."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
