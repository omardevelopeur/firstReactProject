import React from "react";
import "./intro.css";
import mp from "../../assets/img4.jpg";
import btnimage from "../../assets/img2.jpg"
import { Link } from "react-scroll";
const Intro=()=>{
    return (
        <section id="intro">
            <div className="intro">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="introName">Smith</span>Website Designer</span>
            <p className="introPara">I am a skilled web designer experience with creating Visual website</p>
            <Link><button className="btn"><img  src={btnimage} alt="" className="btnImg"/>Hire me</button></Link>
            </div>
        <img src={mp} alt="" className="bg"/>

        </section>
    )
}
export default Intro;