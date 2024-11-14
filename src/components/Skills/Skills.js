import log1 from "../../assets/img4.jpg";
import log2 from "../../assets/img2.jpg";
import log3 from "../../assets/img3.jpg";
import React from "react"
import "./Skills.css"
const Skills=()=>{
    return (
<section id="Skills">
            <span className="Skilltitle">what i do</span>
            <span className="skillDesc">I am skilled and passionate web designer experience to create website and visual web</span>
<div className="skillBars">
<div className="skillBar">
<img  className="skillBarImg" src={log1} alt="uiDesign"/>
<div className="skillBarText">
    <h2>UI/UX</h2>
    <p>design ui and ux design</p>
</div>
</div>
<div className="skillBar">
<img  className="skillBarImg" src={log2} alt="webdesign"/>
<div className="skillBarText">
    <h2>Web Design</h2>
    <p>design website for all people</p>
</div>
</div>
<div className="skillBar">
<img  className="skillBarImg" src={log3} alt="appdesign"/>
<div className="skillBarText">
    <h2>App Design</h2>
    <p>design App for all people</p>
</div>
</div>
        </div>
        </section>
    )
}
export default Skills