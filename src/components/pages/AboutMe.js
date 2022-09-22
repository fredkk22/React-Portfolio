import React from 'react';
import profilepic from '../images/portfolio-profile-image.jpg'

export default function AboutMe() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img alt="Freddy Smiling on a Bridge" src={profilepic} ></img>
      </div>
      <div className="d-flex justify-content-center">
        <h2 className="m-4">
          B.A. in Communication, Villanova University / Aug 2018 - Dec 2021
        </h2>
      </div>
      <p className="m-4 text-center">
        At Villanova University, I studied several different courses within the Communication Department but chose to specialize in Media Production.
        Though I was initially accepted to the College of Engineering, a film course at the New York University School of Professional Studies I attended prior to college applications completely changed that decision.
        So, I transferred to the College of Liberal Arts and Sciences before moving in and graduated with a Communication degree.
      </p>
      <p className="m-4 text-center">
        However, I realized another passion of mine after graduating was in computer science.
        Therefore, I decided to apply to and was accepted to a coding bootcamp hosted remotely by the University of Pennsylvania!
        The program officially ends on 10/3/2022, and I plan to study further and apply for MERN fullstack, React developer, or any entry-level Javascript developer positions after graduating.
      </p>
    </div>
  );
}
