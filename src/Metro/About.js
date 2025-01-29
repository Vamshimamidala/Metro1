import React from 'react';
import metrologo from './Images/metro_logo.jpg';
import ker from './Images/Keolis-Hyderabad-4C-HD.jpg';

const About = () => {
  return (
    <div className="about-container">
      <section className="hmr-section">
        <h1>Who We Are</h1>
        <h2>Home Who We Are</h2>
      </section>

      <section className="city-section">
        <h1><span>Who</span> We Are</h1>
        <p>
          Citizen mobility plays an important role in the development of a metropolis, and Hyderabad is no exception. Hyderabad Metro Rail (HMR) is an initiative to meet the growing needs of transportation in Hyderabad. Based on Mass Rapid Transit System (MRTS), the Metro Rail Project will reduce traffic congestion across Hyderabad, lower pollution levels, and improve the ‘livability index’ of the city. This ambitious project was awarded to Larsen & Toubro (L&T), with L&T Metro Rail Hyderabad Limited (LTMRHL) as the concessionaire to implement the project under the Design-Built-Finance-Operate-Transfer (DBFOT) model. HMR is a marvel of modern engineering that will add a new dimension to the city.
        </p>
      </section>

      <section className="public-section">
        <img src={metrologo} alt="Metro Logo" className="metro-logo" />
        <h1>Project Summary:</h1>
        <ul>
          <li>Largest Public-Private Partnership (PPP) in the world for the metro rail sector with a total network of 72 kilometers across Hyderabad.</li>
          <li>Operates on three distinct lines – Blue, Green, and Red, integrated with Indian railways terminals, MMTS, and bus stations.</li>
          <li>Eco-friendly, automated transportation with Regenerative Braking Technology (RBT) and Communication-Based Train Control (CBTC) technology.</li>
          <li>Air-conditioned coaches to reduce commuting time across the city.</li>
        </ul>
        <button className="learn-more-btn">Know more about L&T metro</button>
      </section>

      <section className="team-section">
        <h5>Our Project Team</h5>
        <ul>
          <li>L&T Construction – Viaduct, Stations & Depot, Power Supply, SCADA & Traction</li>
          <li>Hyundai Rotem, South Korea – Rolling Stock</li>
          <li>Thales, Canada – Signalling & Train Control</li>
          <li>Thales, Portugal – Communication</li>
          <li>L&T Construction along with Voest Alpine – Austria, Tata Corus – France & Vossloh – Germany – Track works</li>
          <li>Keolis Hyderabad (a fully owned subsidiary of Keolis S.A) – O&M Operator</li>
          <li>Samsung, South Korea – Automatic Fare Collection (AFC) Infrastructure</li>
          <li>OTIS, US – Elevators & Escalators</li>
        </ul>
      </section>

      <section className="kero-section">
        <img src={ker} alt="Keolis" className="keolis-img" />
        <p>
          All Operations and Maintenance (O&M) activities for the Hyderabad Metro Rail (HMR) Project have been outsourced to Keolis Hyderabad – a subsidiary of Keolis S.A. Keolis, a global leader in public transport with offices across 15 countries, provides a full range of transport solutions aligned with regional transportation priorities.
        </p>
        <button className="learn-more-btn">Know more about Keolis</button>
      </section>
    </div>
  );
};

export default About;
