import React from 'react'
import Image from 'next/image';
import base from '../public/design/base.png';
import star from '../public/design/star.png';
import star2 from '../public/design/star2.png';
import profilePicture from '../public/images/profilePicture.png';

const Welcomer = () => {
  return (
    <div className="relative">
        <div className="container mx-auto px-4 py-8 md:py-16 h-full flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
                <div className="flex flex-col md:flex-row justify-center items-center md:gap-20 md:space-x-16 z-20 relative">
                    <div className="text-center mb-8 md:mb-0 z-10">
                        <h1 className="text-5xl lg:h-14 font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-950">Kana Arima</h1>
                        <p className="mb-8 leading-relaxed md:max-w-[20rem] z-40">
                            Welcome to my Portfolio! Here you can find a few facts about me, my references and so on. I hope you enjoy your stay!
                        </p>
                    </div>
                    <div className="relative z-20">
                        <Image width={350} className="rounded-full" src={profilePicture} alt="Profile Picture" />
                    </div>
                    {/* Star images */}
                    <Image className="absolute animate-rotate" style={{ top: '0px', left: '0px' }} width={50} src={star} alt="Star" />
                    <Image className="absolute animate-rotate" style={{ top: '60px', left: '-100px' }} width={25} src={star2} alt="Star" />
                    <Image className="absolute animate-rotate" style={{ top: '30px', left: '100px' }} width={60} src={star} alt="Star" />
                    <Image className="absolute animate-rotate" style={{ top: '80px', left: '250px' }} width={30} src={star} alt="Star" />
                    <Image className="absolute animate-rotate" style={{ top: '240px', left: '110px' }} width={40} src={star2} alt="Star" />
                    <Image className="absolute animate-rotate" style={{ top: '250px', left: '190px' }} width={40} src={star} alt="Star" />
                    <Image className="absolute animate-rotate" style={{ top: '245px', left: '10px' }} width={30} src={star} alt="Star" />
                    <Image className="absolute animate-rotate" style={{ top: '230px', left: '-90px' }} width={50} src={star2} alt="Star" />
                </div>
            </div>
        </div>
        <div className="absolute top-0 right-0 z-10 hidden md:block">
            <Image height={800} src={base} alt="Base" />
        </div>
    </div>
  )
}

export default Welcomer;