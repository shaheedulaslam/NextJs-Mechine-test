import React from 'react'
import { BodyButton, InterviewsParagraph } from './subcomponent/ReusableComponents'


export default function Body() {
  return (
<><div>
<h1 className="mt-20 text-4xl font-bold text-blue-950 lg:ml-auto lg:mr-0">Remote Work Visa</h1>
<p className='text-gray-500 mt-3'>Digital nomad visas (or remote work visas) allow you to live in a country as a normal resident while you work remotely.</p>
<p className='text-gray-500'>These generally last a year or so and can normally be extended</p>

<div className='grid gap-5 lg:mb-0 sm:grid-cols-3 mt-8'>
    <div>
      <div className="rounded-[40px] overflow-hidden">
        <picture>
          <img src="italy.png" alt="city" className="hover:scale-110 duration-300" />
        </picture>
      </div>
      <p className="text-3xl tracking-tight text-slate-800 font-bold text-center mt-5">Italy</p>
      <p className="text-lg text-center text-gray-500 font-light mt-2">Remote visa for Italy</p>
    </div>

    <div>
      <div className="rounded-[40px] overflow-hidden">
        <picture>
          <img src="dubai.png" alt="city" className="hover:scale-110 duration-300" />
        </picture>
      </div>
      <p className="text-3xl tracking-tight text-slate-800 font-bold text-center mt-5">Dubai</p>
      <p className="text-lg text-center text-gray-500 font-light mt-2">Remote Visa for Dubai</p>
    </div>

    <div>
      <div className="rounded-[40px] overflow-hidden">
        <picture>
          <img src="germany.png" alt="city" className="hover:scale-110 duration-300" />
        </picture>
      </div>
      <p className="text-3xl tracking-tight text-slate-800 font-bold text-center mt-5">Germany</p>
      <p className="text-lg text-center text-gray-500 font-light mt-2">Remote Visa for Germany</p>
    </div>
</div>

<div className="flex justify-center mt-8">
  <BodyButton value='Explore all Visas'/>
</div>
</div>
{/* interview.....content */}
 <div>
    <h1 className="mt-20 text-4xl font-bold text-blue-950 lg:ml-auto lg:mr-0">Interviews</h1>
    <p className='text-gray-500 mt-3'>Get our exclusive interviews & blogs in your inbox</p>

    <div className='grid gap-5 lg:mb-0 sm:grid-cols-3 mt-8'>
    <div>   
      <div className="rounded-[40px] overflow-hidden">
        <picture>
          <img src="v.png" alt="city" className="hover:scale-110 duration-300" />
          
        </picture>
       
      </div>
      <div className="px-2">
        <p className="text-lg tracking-tight text-slate-800 font-bold text-left mt-5">
          How I created a graphic design tool for non-designers
        </p>
        <InterviewsParagraph/>
      </div>
    </div>

    <div>
      <div className="rounded-[40px] overflow-hidden">
        <picture>
          <img src="download.svg" alt="city" className="hover:scale-110 duration-300" />
        </picture>
      </div>
      <div className="px-2">
        <p className="text-lg tracking-tight text-slate-800 font-bold text-left mt-5">
        Think about how many people can you help - Story of Euphorya..
        </p>
        <InterviewsParagraph/>
      </div>
    </div>

    <div>
      <div className="rounded-[40px] overflow-hidden">
        <picture>
          <img src="v2.png" alt="city" className="hover:scale-110 duration-300" />
        </picture>
      </div>
      <div className="px-2">
        <p className="text-lg tracking-tight text-slate-800 font-bold text-left mt-5">
        How I started a $1.5K MMR Payment service - Story of Payhere.
        </p>
        <InterviewsParagraph/>
      </div>
    </div>
    </div>
    <div className="flex justify-center mt-8">
    <BodyButton value='Explore all Interviews'/>
    </div>
</div></>

  )
}


