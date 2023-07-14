import Button from '@mui/material/Button'
import React from 'react'

interface BodyButtonProps {
    value: string;
  }

export function Explorebutton() {
  return (   
<Button className="rounded-full mt-5" variant="outlined">Explore</Button>
  )
}


export const BodyButton: React.FC<BodyButtonProps> = ({ value }) => { 
return(
    <button
        type="button"
        className="rounded-full px-12 py-2 text-base bg-blue-700 hover:bg-blue-800 hover:text-white text-white mt-2 duration-200">
        {value}</button>
)
}

export function InterviewsParagraph(){
  return(
<p className="text-sm text-left text-gray-500 font-light mt-2">
  I'm Sayan, founder and CTO of Desygner . Over 15,000 B2B customers use Desygner's B2B platform
  webrand.com for..
</p>
  )
}

export function ServiceParagraph(){
  return(
  <p className="m-0 max-w-[30ch] text-sm opacity-50 text-center">
    Explore all the remote work visas available around the world.
  </p>
  )
}

export function StartUpVisaParagrapgh(){
return(
  <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-center`}>
  Explore all the startup visas available around the world.
</p>
)
}

