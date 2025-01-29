 import React from 'react';
import tic from './Images/ticket.jpg';
import tic2 from './Images/ticket2.jpg';
import tic3 from './Images/ticket3.jpg';

const View = () => {
  return (
    <div className="view-container">
      {/* Ticketing Section */}
      <section className="ticketing-header">
        <h1>Ticketing</h1>
        <h4>Home  Ticketing</h4>
      </section>

      {/* Fare Information Section */}
      <section className="fare-info">
        <h2>Fare Information</h2>
        <p>
          Passengers can choose a smart card or a token for traveling by Metro trains. We recommend passengers to opt for smart cards for a hassle-free journey.
        </p>
        <button className="fare-btn">Fare Chart</button>
      </section>

      {/* Smart Ticket Section */}
      <section className="smart-tickets">
        <h2>Tickets</h2>
        <p>
          A Contactless Smart Token (CST) is a media chip integrated inside the token as one of the fare media. You may choose from the following types of tickets as per your convenience.
        </p>
        <div className="ticket-row">
          <div className="ticket-card">
            <img src={tic} alt="Ticket Vending Machine" className="ticket-img" />
            <p>You may utilize the Ticket Vending Machine (TVM) to top up the online recharge. Please contact the station staff or call us at 040 – 2333 2555 for more information.</p>
          </div>
          <div className="ticket-card">
            <img src={tic2} alt="Token Purchase" className="ticket-img" />
            <p>Passengers can select the destination station, make the purchase, and then enter the paid area with the token.</p>
          </div>
          <div className="ticket-card">
            <img src={tic3} alt="Token or Smart Card" className="ticket-img" />
            <p>The token, smart card, or QR will be read at the entry gate and captured at the exit gates. Passengers can board the train only from the station where they have bought the ticket.</p>
          </div>
        </div>
      </section>

      {/* Single Journey Ticket Section */}
      <section className="single-journey">
        <h1>Single Journey Ticket (SJT)</h1>
        <p>This is a one-way ticket from your current station (source station) to your destination. The ticket is valid only on the date of issue. You must board the train within 30 minutes after purchasing the ticket. For fare information, please contact us at 040-2333-2555 or visit a Customer Care Center at any Metro station.</p>
      </section>

      {/* Smart Card Section */}
      <section className="smart-card">
        <h2>Smart Card</h2>
        <p>
          The Smart Card is a virtual wallet that enables seamless travel. It can be purchased at any metro station for Rs.100/- and recharged with multiples of Rs.50/-. You can also recharge online in multiples of Rs.100/-. All Hyderabad Metro offers are applicable to smart cards. In case your smart card is lost or damaged, you can buy a new card and transfer the balance from the old card to the new one (excluding offer cards).
        </p>
      </section>

      {/* How to Recharge Section */}
      <section className="recharge-info">
        <h2>How to Recharge Hyderabad Metro Rail Smart Card</h2>
        <ul>
          <li>Tap your smart card at the entry gates / TVM / AVM between 20 minutes to 2 hours from the time of online recharge. Please call 040 -2333 2555 for assistance.</li>
          <li>Online recharge amounts are added to the card before you begin your journey, not upon exit.</li>
          <li>Tap your card at the entry gates or TVMs within 15 days of recharge, or it will enter the refund cycle.</li>
          <li>It's recommended to recharge your card a day before the balance reaches the minimum to avoid last-minute inconveniences.</li>
        </ul>
      </section>

      {/* Classic Card Section */}
      <section className="classic-card">
        <h2>Classic Card</h2>
        <button className="recharge-btn">Recharge</button>
      </section>
    </div>
  );
};

export default View;
