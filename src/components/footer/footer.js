import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <footer>
        <div className="row">
            <div className="twelve columns">
            <ul className="social-links">
                <li><a href="https://github.com/panjulpan" target="_blank"><i className="fa fa-github" /></a></li>
                <li><a href="https://linkedin.com/in/mochfadli" target="_blank"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://www.instagram.com/panjulpan/" target="_blank"><i className="fa fa-instagram" /></a></li>
            </ul>
            <ul className="copyright">
                <li>© Copyright 2019 Moch. Fadli Rahmadi</li>   
            </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
      </React.Fragment>
    );
  }
}