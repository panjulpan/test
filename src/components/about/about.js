import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
        <div className="row">
            <div className="three columns">
            <img className="profile-pic" src="images/profilepic.png" alt="" />
            </div>
            <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Hello I'm Moch. Fadli Rahmadi I am a fresh graduated from Politeknik Negeri Jakarta, 
               majoring in Electrical Engineering and Study Programs of Industrial Electronics Engineering. 
               I have an interest in web programming and hope to be able to improve my skills in JavaScript, 
               HTML, CSS, PHP and other programming language. Very motivated to continue to learn and develop 
               my skills and also grow professionally.
            </p>
            <div className="row">
                <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                    <span>Moch. Fadli Rahmadi</span><br />
                    <span>Komp. Griya Bandung Asri 1 Blok B-185<br />
                    Bojongsoang, Kab. Bandung 40288 Indonesia
                    </span><br />
                    <span>085624799017</span><br />
                    <span>mochfadlirahmadi97@gmail.com</span>
                </p>
                </div>
                <div className="columns download">
                <p>
                    <a href="https://drive.google.com/file/d/1lR8XgY1vHzx94TMLYwq28eHueFZ1Htox/view" target="_blank" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
                </div>
            </div> {/* end row */}
            </div> {/* end .main-col */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}