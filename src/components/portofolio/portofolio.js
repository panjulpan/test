import React, { Component } from 'react';
export default class Portofolio extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="portfolio">
        <div className="row">
            <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                <div className="item-wrap">
                    <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/coffee.jpg" />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                        <h5>Bridge Monitoring System</h5>
                        <p>Final Project</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                <div className="item-wrap">
                    <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/console.png" />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                        <h5>Online Calc</h5>
                        <p>Hobby</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                <div className="item-wrap">
                    <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/judah.png" />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                        <h5>Simple CRUD</h5>
                        <p>Task Project</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                <div className="item-wrap">
                    <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/into-the-light.jpg" />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                        <h5>Personal Site</h5>
                        <p>Hobby</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                </div>
                </div> {/* item end */}
            </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup
                --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt="" />
            <div className="description-box">
                <h4>Bridge Monitoring System</h4>
                <p>Monitoring of bridge structure, one of which is deflection must be carried out periodically for the safety of the people 
                   who use it. But the obstacles in its implementation, monitoring was carried out directly on the bridge which was tested to 
                   determine the amount of deflection.</p>
                <span className="categories"><i className="fa fa-tag" />Project, Embedded System</span>
            </div>
            <div className="link-box">
                <a href="https://drive.google.com/drive/folders/1b2jmvm1OmAAPk5ntoQGWHTZHcgvvcbzp" target="_blank">Details</a>
                <a className="popup-modal-dismiss">Close</a>
            </div>
            </div>{/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-console.png" alt="" />
            <div className="description-box">
                <h4>Online Calc</h4>
                <p>A simple online calculator made with javascript.</p>
                <span className="categories"><i className="fa fa-tag" />Web Project, Hobby</span>
            </div>
            <div className="link-box">
                <a href="https://panjulpan.github.io/online-calc/" target="_blank">Details</a>
                <a className="popup-modal-dismiss">Close</a>
            </div>
            </div>{/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-judah.png" alt="" />
            <div className="description-box">
                <h4>Simple CRUD</h4>
                <p>Simple CRUD Project with ExpressJS and MongoDB.</p>
                <span className="categories"><i className="fa fa-tag" />Project, CRUD</span>
            </div>
            <div className="link-box">
                <a href="https://github.com/panjulpan/simple-crud" target="_blank">Details</a>
                <a className="popup-modal-dismiss">Close</a>
            </div>
            </div>{/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
            <div className="description-box">
                <h4>Personal Site</h4>
                <p>Making a personal site and online resume.</p>
                <span className="categories"><i className="fa fa-tag" />Hobby</span>
            </div>
            <div className="link-box">
                <a href="https://github.com/panjulpan/personal-site" target="_blank">Details</a>
                <a className="popup-modal-dismiss">Close</a>
            </div>
            </div>{/* modal-04 End */}
        </div> {/* row End */}
      </section>
      </React.Fragment>
    );
  }
}