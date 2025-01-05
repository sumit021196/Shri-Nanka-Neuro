
import React from "react";

const GoogleMapEmbed = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.2359730422927!2d75.93258347116395!3d22.68225789904189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e32169a52367%3A0x96e4ffefbdb80bf3!2sShri%20Nanka%20Nursing%20Home%20-Advanced%20Neuro%20%26%20Skin%20Care%20Center!5e0!3m2!1sen!2sin!4v1736072208221!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map Embed"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
