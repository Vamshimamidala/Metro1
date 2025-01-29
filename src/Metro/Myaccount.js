import React from 'react'
import qr from './Images/googleplaystore_QR.png'
import qrr from './Images/appleappstore_qr.png'
const Myaccount = () => {
  return (
    <div>
      <div className='container-fluid home'>
        <h1>SmartCard Recharge</h1>
        <h4>Home Smartcard Recharge</h4>
      </div>
      <div className='container qr1'>
        <h1><span>SmartCard</span> Recharge</h1>
        <p>For recharging your smartcards, you may use popular online apps Paytm, PhonePe or TSavaari, which are available on the Google Play Store and the Apple App Store.
<br/>
Along with the facility to recharge your smart cards online, TSavaari app also provides you with information pertaining to Hyderabad Metro and allows you to book QR tickets for Hyderabad Metro Rail travel. To download the TSavaari app, you may scan the QR code below.</p>

            <h4>You may also recharge your smart cards at all our station counters.</h4>
            <div className='row'>
                <div className='col-lg-4'>
                    <img src={qr} alt=''/>
                    <p>Google Play Store</p>
                </div>
                <div className='col-lg-4'>
                    <img src={qrr} alt=''/>
                    <p>App Store</p>
                </div>
                <p>For any further assistance related to existing accounts or complaints related to valid recharges, please contact Hyderabad Metro customer care
                <br/>Email: CustomerService@ltmetro.com <br/> 
                        Phone: +91 40 23332555</p>
            </div>
            <span><p>Disclaimer: Any transactions conducted on third-party online payments apps are facilitated by the third-party themselves and are subject to the applicable policies of the relevant third-party. L&T Metro Rail (Hyderabad) Limited shall not be liable for any error/deficiency in the use of these third-party online payments apps.</p>
            </span>
                 </div>
    </div>
  )
}

export default Myaccount
