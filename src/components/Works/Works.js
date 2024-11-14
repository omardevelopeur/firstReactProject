import React from "react";
import "./Works.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/pex.jpg";
const Work=()=>{
    return (<section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="WorksDesc">i am experience to create website for all people and design a great website for you</span>
            <div className="worksImgs">
        <img src={img1} alt="" className="worksImg"/>
        <img src={img2} alt="" className="worksImg"/>
        <img src={img3} alt="" className="worksImg"/>
        <img src={img4} alt="" className="worksImg"/>
        <img src={img5} alt="" className="worksImg"/>
        <img src={img6} alt="" className="worksImg"/>
        </div>
        <button className="worksbtn">See More</button>
    </section>)
}
export default Work