import React from 'react'
import Card from "../components/Card"
import male from "../assets/profile_male.png"
import female from "../assets/profile_female.png"
import { Link } from 'react-router-dom';
function Profile() {
    return (
        <div className='bg-cyan-100'>
            <div className=' px-5 lg:px-0 flex flex-col rounded-lg lg:flex-row items-center justify-center lg:w-[50%] h-screen gap-10 mx-auto ' >
                <Card  para="Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this"
                    subject={<><span className='flex flex-col items-center mx-auto w-full h-full'>Dr.Rahul Acharya</span> <span className='font-mono text-sm'>Dental Surgeon BDS</span></>} 
                    image={male}
                />

                <Card para="Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this"
                    subject={<><span className='flex flex-col items-center mx-auto w-full h-full'>Dr.Komal Achare</span> <span className='font-mono text-sm'>Dental Surgeon BDS</span></>} 
                    image={female}
                />

//Nothing just cheking
            </div>
        </div>

    )
}

export default Profile
