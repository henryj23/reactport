import React from "react";
import "./JobBourd.css";
import Job from "./Job";

const JobBourd = () => {
    return (
      <div className="JobBourd" id="experiences">
        <Job link="https://techfios.com" types="Java SpringBoot MySQL JWT" title="Entry Software Intern" 
        subtext={<span>* Built and maintained components across Home Depot servers, allowing associates to easily and securely access the server through protected API endpoints.
          <br /><br />* Worked closely with other developers to roll out new software and major changes, resulting in a significantly improved system for tracking items and tools, which had a positive impact on store operations and shrinkage.</span>} 
        date="2023 - present" 
      />
        

        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="TextCapp">
        View Resume
      </a>
        
        
      </div>
    );
};

export default JobBourd;