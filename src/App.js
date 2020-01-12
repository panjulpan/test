import React, { Component } from 'react';
import Header from './components/header/header.js';
import About from './components/about/about.js';
import Resume from './components/resume/resume.js';
import Portfolio from './components/portofolio/portofolio.js';
import ContactUs from './components/contactus/contactus.js';
import Footer from './components/footer/footer.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default App;