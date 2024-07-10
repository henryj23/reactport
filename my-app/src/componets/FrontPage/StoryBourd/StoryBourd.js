import React from "react";
import "./StoryBourd.css";
import Spacer from "../../Utility/Spacer";
import trooperImage from "../../assets/img/image2.png";

const StoryBourd = () => {
  const customCursorStyle = {
    cursor: `url(${trooperImage}), auto`,
    color: 'rgb(219, 225, 234)',
    fontWeight: 900
};


    return (
      <div className='StoryBourd' id="about">
        <Spacer amount={1.4}/>
        <p className="descriptionp">
        &nbsp; Software Developing has been a part of my life for as long as I can remember. My first memories of coding go back to 2018 when I was writing simple gaming scripts. Over the next couple of years I would learn to love coding even more and go on to learn more advnaced languages and frameworks. In the last couple years, I made the decision to go even further with coding, enrolling in my first technical bootcamp at TechFios.
            <br/><br/>
            &nbsp;In my personal time I love working on personal projects and gaming. I also love working on cars, motorcycles, and just about anything that moves.
            <br/><br/>
            </p>
      </div>
    );
};

export default StoryBourd;

  /*
  <a href="https://www.homedepot.com" target="_blank" rel="noopener noreferrer" className="no-style-link">Home Depot</a>
  <a href="https://techfios.com/" target="_blank" rel="noopener noreferrer" className="no-style-link">Tech Fios</a>
  
  */