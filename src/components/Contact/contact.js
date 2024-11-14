import React from "react";
import "./contact.css";
import img1 from "../../assets/a2.jpg";
import img2 from "../../assets/app.jpg";
import img3 from "../../assets/f3.png";
import img4 from "../../assets/f4.png";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
const Cont=()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_nl3tskw', 'template_78kr6im', form.current, {
            publicKey: 'jKbh-24-OCoF87ZH9',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert("your email was sent");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (<section id="contactPage">
    <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientsDesc">I work online with a lot of companies.
            Some of the notable companies I have worked with Includes.
        </p>
        <div className="clientsImg">
            <img src={img1} alt="logo" className="clientImg"/>
            <img src={img2} alt="logo" className="clientImg"/>
            <img src={img3} alt="logo" className="clientImg"/>
            <img src={img4} alt="logo" className="clientImg"/>
        </div>
    </div>
    <div id="contact">
<h1 className="contactPageTitle">Contact me</h1>
<span className="contactDesc">please fill the input and the send it</span>
<form className="contactform" ref={form} onSubmit={sendEmail}>
<input type="text" className="name" placeholder="Your Name" name="name"/>
<input type="email" className="email" placeholder="Your Email" name="email"/>
<textarea className="msg" name="message"  rows="5" placeholder="Your Message"></textarea>
<button type="submit" value="send" className="submitbtn">Submit</button>
<div className="links">
<img src={img3} alt="facebook" className="link"/>
<img src={img2} alt="youtube" className="link"/>
<img src={img3} alt="twiteer" className="link"/>
<img src={img4} alt="instagram" className="link"/>
</div>
</form>
    </div>
    </section>)
}
export default Cont