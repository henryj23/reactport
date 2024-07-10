import React from "react";
import './ProjectBourd.css';
import Project from './Project.js';

const ProjectBourd = () => {
    return (
       <div className="ProjectBourd" id="projects">

            <Project image='project1' title='JWT Quick Start' 
            subtext='A simple jwt spring boot guide that explains how to setup and start a jwt protected project.' 
            topic='SpringBoot JWT Java' 
            link='https://github.com/KevinKohutek04/JWT_STARTER/blob/main/README.md'/>

            <Project image='PAPERTRADERS' title='Homes on Angular' 
            subtext="A straightforward Angular project listing home data and filtering by categories. This project highlights Angular's suitability 
            for single-page web apps. Its responsive two-way data binding ensures immediate UI updates from changes in the data model. 
            Angular's modular architecture supports scalability 
            through reusable components, and its efficient routing enhances performance by enabling seamless view navigation." 
            topic='JavaScript HTML CSS node.Js Angular AWS' 
            link='https://github.com/henryj23/homes-app'/>
            
            <Project image='KevinKohutek' title='React Portfolio' 
            subtext='My source code for this project is public, so anyone can see how these components were built. Check it out here.' 
            topic='React JavaScript Router CSS HTML' 
            link='https://github.com/KevinKohutek04/ReactPortfolio'/>


       </div>
    );
};
//fixes
export default ProjectBourd;
