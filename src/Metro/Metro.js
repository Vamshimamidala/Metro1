import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import QRCode from 'react-qr-code';
import logo from './Images/logo.png';
import slide from './Images/Slider5-1.jpg';
import metro from './Images/smart_card1.png';
import metro1 from './Images/metro_train.png';
import metro2 from './Images/Covid.png';
import metro3 from './Images/TrainTimings.png';
import metrocard from './Images/personalized_card.jpg';
import geola from './Images/Network-Map-small-min.jpg';
import mail from './Images/email.jpeg';
import my from './Images/footer.png';
import { NavLink } from 'react-bootstrap';
import { StationDropDown } from './stationDropdown';

export const stations = [
  { id: 1, name: "Miyapur", distance: 10, color: "red" },
  { id: 2, name: "JNTU College", distance: 20, color: "red" },
  { id: 3, name: "KPHB Colony", distance: 30, color: "red" },
  { id: 4, name: "JBS Parade Ground", distance: 25, color: "green" },
  { id: 5, name: "Hitech city", distance: 35, color: "green" },
  { id: 6, name: "Nagole", distance: 40, color: "blue" },
  { id: 7, name: "Durgam Cheruvu", distance: 31, color: "blue" },
  { id: 8, name: "Madhapur", distance: 11, color: "blue" },
];

export const Metro = () => {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [fare, setFare] = useState(null);
  const [qrData, setQrData] = useState(null);

  const calculateFare = () => {
    const startingfare = 8;
    let ticketPrice = startingfare;
    const fromStations = stations.find(stations => stations.name === fromStation);
    const toStations = stations.find(stations => stations.name === toStation);
    const distance = Math.abs(fromStations?.distance - toStations?.distance);
    
    if (fromStations && toStations) {
      ticketPrice += Math.abs(distance * startingfare);
      setFare(ticketPrice);
    }

    const ticketDetails = `From: ${fromStation}, To: ${toStation}, Fare: ${ticketPrice} INR`;
    setQrData(ticketDetails);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className='container slides'>
        <div className='row'>
          <div className='col-lg-6'>
            <img src={slide} alt='Metro slide' className='img-fluids' />
          </div>
        </div>
      </div>

      {/* Fare Calculation Section */}
      <div className='container selected'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className="form-group">
              <label className="form-label">From</label>
              <StationDropDown
                value={fromStation}
                handleChange={(e) => setFromStation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">To</label>
              <StationDropDown
                value={toStation}
                handleChange={(e) => setToStation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="get-details-btn"
                type="button"
                onClick={calculateFare}
                data-bs-target="#data"
                data-bs-toggle="modal"
                value="Get Details"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fare Details Modal */}
      <div className='modal fade' id='data'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Fare Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
            </div>
            <div className='modal-body'>
              <table className="table">
                <thead>
                  <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Fare</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{fromStation}</td>
                    <td>{toStation}</td>
                    <td>{fare} INR</td>
                  </tr>
                </tbody>
              </table>
              {qrData && (
                <div style={{ marginTop: '20px' }}>
                  <h5>QR Code for Ticket:</h5>
                  <QRCode value={qrData} size={128} />
                  <h6 style={{ fontSize: '13px' }}>Entry and Exit valid til 11.59pm today</h6>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Metro For You Section */}
      <div className='container metros'>
        <h1>Metro For You</h1>
        <div className='row'>
          <div className='col-md-3'>
            <img src={metro} alt='Metro smart card' />
            <p>Station Retail Enquiry</p>
          </div>
          <div className='col-md-3'>
            <img src={metro1} alt='Metro train' />
            <p>Hyderabad Metro Rail Commercial Shoot</p>
          </div>
          <div className='col-md-3'>
            <img src={metro2} alt='Covid update' />
            <p>Hyderabad Metro Rail Covid-19 Update</p>
          </div>
          <div className='col-md-3'>
            <img src={metro3} alt='Train Timings' />
            <p>Train Timings</p>
          </div>
        </div>
      </div>

      {/* Metro Smart Cards Section */}
      <div className='container card1'>
        <h1>Metro Smart Cards</h1>
        <div className='row'>
          <div className='col-lg-12'>
            <img src={metrocard} alt='Smart card' />
          </div>
        </div>
        <button className='btn btn-info'>View</button>
        <button className='btn btn-success'>Recharge</button>
      </div>

      {/* Metro Stations Map Section */}
      <div className='container train'>
        <div className='row'>
          <div className='col-lg-5'>
            <h2>Explore Metro Stations</h2>
            <p>Find more about each Metro station from the drop-down list. Click ‘Explore’ to know about the location and landmarks near the station.</p>
          </div>
          <div className='col-lg-7'>
            <img src={geola} alt='Metro Network Map' className='img-fluid' />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className='container-fluid about'>
        <div className='row'>
          <div className='col-lg-2'>
            <h1>About Us</h1>
            <ul>
              <li><a href="#">Who We Are</a></li>
              <li><a href="#">About HMR</a></li>
              <li><a href="#">MD's Desk</a></li>
              <li><a href="#">Green Metro</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className='col-lg-2'>
            <h1>Travel</h1>
            <ul>
              <li><a href="#">Plan your Trip</a></li>
              <li><a href="#">Train Timings</a></li>
              <li><a href="#">Metro Network Map</a></li>
              <li><a href="#">Metro Stations</a></li>
              <li><a href="#">Metro Trains</a></li>
              <li><a href="#">Last Mile Connectivity</a></li>
              <li><a href="#">Ridership</a></li>
            </ul>
          </div>
          <div className='col-lg-2'>
            <h1>Fare & Ticketing</h1>
            <ul>
              <li><a href="#">Ticketing</a></li>
              <li><a href="#">Penalty Charter</a></li>
              <li><a href="#">Offences & Penalties</a></li>
              <li><a href="#">Loyalty Program</a></li>
              <li><a href="#">Find Trip Details</a></li>
              <li><a href="#">Super Saver Offer</a></li>
              <li><a href="#">Metro Holiday</a></li>
              <li><a href="#">Super OFF PEAK Offer</a></li>
              <li><a href="#">Metro Student Pass</a></li>
            </ul>
          </div>
          <div className='col-lg-2'>
            <h1>Customer Service</h1>
            <ul>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Lost & Found</a></li>
              <li><a href="#">Passenger Charter</a></li>
              <li><a href="#">Our Commitment</a></li>
              <li><a href="#">User Guide</a></li>
              <li><a href="#">Safety and Security</a></li>
              <li><a href="#">Do’s and Don’ts</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className='col-lg-2'>
            <h1>Contact Us</h1>
            <ul>
              <li><strong>HYDERABAD METRO RAIL</strong></li>
              <li>Administrative Building</li>
              <li>Hyderabad Metro Rail Depot</li>
              <li>Uppal Main Road, Uppal</li>
              <li>Hyderabad, Telangana – 500039, India</li>
              <li>+91 40 23332555</li>
              <li>+91 40 23123015</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container-fluid footer'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={mail} alt="Mail logo" />
            <p>Subscribe to Newsletter</p>
      
          </div>
          <div className='col-md-8'>
            <img src={my} alt="Footer" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};
