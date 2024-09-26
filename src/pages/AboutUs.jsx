import React from 'react'
import about_img from "../assets/about_img.webp"
function AboutUs() {
    return (
        
        <div className=' container mx-auto py-20   flex flex-col lg:flex-row items-center justify-center    h-full w-[75%]'>
            <div className='lg:w-[100%]  flex flex-col '>
            <h1 className='font-bold text-5xl py-6 font-mono'>About Us</h1>
                <div>
                
                    <h2 className='py-10 text-3xl font-semibold   '>We’re glad you hand your dental health concerns to our skilled hands</h2>
                    <h4 className='py-4 text-lg'>We'll make sure to deliver the best possible healthcare to all our patients! Of course, we always complement our main services with a customer service oriented approach. We sincerely believe that visiting a dentist shouldn't be a frightening or stressful experience! We provide an equally comfortable experience of relaxation for all our young and adult customers! Also we implement a lot of pain management and anesthesia options.</h4>

                </div>
                <div className='mx-auto py-10 '>
                    <button className='bg-cyan-500 mx-auto px-10 py-3 text-xl rounded-xl hover:bg-white text-white  hover:text-black hover:border border-black'>Read More</button>
                </div>
            </div>

            <div className='mx-auto  '>
                <img className='rounded-3xl lg:w-[90%] mx-auto h-full hover:scale-105' src="https://omdentalclinic.vercel.app/static/media/about_img.13bb375245f1a0305283.webp" alt="" />
            </div>
        </div>
    )
}

export default AboutUs
