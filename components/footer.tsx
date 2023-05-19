import React from 'react'

const Footer = () => {
  return (
    <div className="relative">
        <div className="bg-red-600">
            <div className="container mx-auto px-4 py-2 md:py-4 h-full flex flex-col md:flex-row justify-between items-center text-center text-white">
                <h2>Portfolio for <br /> <span className="text-2xl">Kana Arima</span></h2>
                <p>by <a className="underline" target='_blank' href="https://dwag.me/">dwag</a>
                <br/><a className="underline" target='_blank' href="https://github.com/DanielWTE/kana-arima">GitHub</a></p>
                <p>All image rights reserved by: <br /> <a href="http://www.dogakobo.com/en/" className="text-2xl underline">Doga Kobo</a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer;