import React from 'react'
import Image from 'next/image';
import pic1 from '../public/images/pic1.png';

const About = () => {
    return (
      <div className="relative z-20">
          <div className="container bg-red-600 rounded-2xl mx-auto px-4 py-8 md:py-16 h-full flex flex-col md:flex-row">
              <div className="pr-10 pl-10 mb-4 md:mb-0">
                  <Image width={450} src={pic1} alt="Picture" className="rounded-lg mx-auto md:mx-0" />
              </div>
              <div className="w-px bg-white hidden md:block"></div>
              <div className="pl-10 pr-10 mt-10 md:mt-0">
                  <h1 className="text-5xl font-bold mb-4 text-white">About Me</h1>
                  <p className="text-white break-words text-lg">
                    Hey everyone!
                    <br /><br />
                    I'm Kana Arima, a 19-year-old actress from Japan. I'm passionate about making a positive impact in the entertainment industry. I've overcome challenges and transformed my acting style to be more supportive of my peers.
                    <br />
                    I love wearing adorable outfits and hats. Let's embark on this exciting journey together and create unforgettable experiences in the world of acting and entertainment.
                    <br /><br />
                    Thanks for stopping by!
                  </p>
              </div>
          </div>
      </div>
    )
}

export default About;