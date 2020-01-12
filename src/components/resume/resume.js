import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="resume">
        <div class="row education">
            <div class="three columns header-col">
                <h1><span>Education</span></h1>
            </div>
            <div class="nine columns main-col">
                <div class="row item">
                <div class="twelve columns">
                    <h3>Politeknik Negeri Jakarta</h3>
                    <p class="info">D3 Electrical Engineering, Industrial Electronic <span>&bull;</span> <em class="date">August 2016 - August 2019</em></p>
                </div>
                </div>
                <div class="row item">
                <div class="twelve columns">
                    <h3>SMA Negeri 22 Bandung</h3>
                    <p class="info">Science Major <span>&bull;</span> <em class="date">2013 - 2016</em></p>
                </div>
                </div>
            </div>
        </div>
        <div class="row work">
            <div class="three columns header-col">
                <h1><span>Experience</span></h1>
            </div>
            <div class="nine columns main-col">
                <div class="row item">
                <div class="twelve columns">
                    <h3>BPPT - B2TKS</h3>
                    <p class="info">Calibration Division Staff (Intern) <span>&bull;</span> <em class="date">Feb 2019 - Mar 2019</em></p>
                    <p>
                    Calibrate customer devices and sensors such as loadcell, pressure transducer etc. 
                    Also calibrate the pressure gauge for tire testing. Work with 3-4 people in a team. 
                    </p>
                </div>
                </div>
                <div class="row item">

                <div class="twelve columns">
                    <h3>Lokakarya Digital Indonesia</h3>
                    <p class="info">Bootcamp Frontend Web Engineer – Participant/Trainee  <span>&bull;</span> <em class="date">Oct 2019 - Dec 2019</em></p>
                    <p>
                    Learn about web programming and web fundamentals. Also learn how to become a Web Engine 
                    Frontend. Usually use the HTML programming language, CSS, Javascript and frameworks such 
                    as (NodeJS, ReactJS)
                    </p>
                </div>
                </div>
            </div>
        </div>
        <div class="row skill">
            <div class="three columns header-col">
                <h1><span>Skills</span></h1>
            </div>
            <div class="nine columns main-col">
                    <div class="bars">
                    <ul class="skills">
                        <li><span class="bar-expand photoshop"></span><em>Javascript</em></li>
                    <li><span class="bar-expand illustrator"></span><em>Microsoft Office</em></li>
                            <li><span class="bar-expand wordpress"></span><em>ReactJS</em></li>
                            <li><span class="bar-expand css"></span><em>CSS</em></li>
                            <li><span class="bar-expand html5"></span><em>HTML5</em></li>
                    <li><span class="bar-expand jquery"></span><em>NodeJS</em></li>
                        </ul>
                    </div>
                </div>
        </div>
      </section>
      </React.Fragment>
    );
  }
}