import React from 'react'
import Navbar from '../components/Navbar'
// import Typewriter from 'typewriter-effect';
import Main from '../components/Main';
import About from './About';
import Services from './Services';
import Features from './Features';
// import GetInTouch from './GetInTouch';
import Footer from '../components/Footer';
import ScrollButton from '../components/ScrollButton';


function Home() {

  return (
    <div>

      <div>
        <Main />
      </div>

      {/* <div class="relative h-32 w-full ...">
        <div class="absolute bottom-0 bg-white sticky right-0 h-16 w-16 ...">09</div>
      </div> */}

      <div id='about'>
        <About />
      </div>
      <div className="overflow-y-scroll">
        {/* Your content here */}
        <ScrollButton />
      </div>
      <div id='services'>
        <Services />
      </div>

      <div id='features'>
        <Features />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
