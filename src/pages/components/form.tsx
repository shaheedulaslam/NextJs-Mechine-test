import TextField from '@mui/material/TextField'
import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button } from "@mui/material";

export default function Form() {
  return (
 <div>
<div className="bg-secondary-100 text-center dark:bg-[#0744C3] mt-20 rounded-lg" style={{height:"auto", width:'auto'}}>
<div className="px-6 pt-6">
      <form action="">
        <p className="text-white text-xl mt-8 text-center">
          <strong>Get our exclusive interviews & blogs in your inbox</strong>
        </p>
        <div className="grid grid-cols-2 items-center justify-center gap-4 md:grid-cols-3">
          <img src="/flower.png" alt="SVG Image" />
          <div className="gap-3 relative md:mb-3 sm:flex flex-col">
            <div className=''>
            <TextField
              id="outlined-basic"
              type="email"
              className="rounded bg-white"
              placeholder="Email"
              variant="outlined"
              style={{ width: '100%' }}
              InputProps={{
                startAdornment: (
                  <MailOutlineIcon
                    className="h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                ),
              }}
            />
            </div>
          <div className="md:ml-3 mt-3 mb-3">
              <Button
                className="hover:bg-gray-400 rounded-lg pb-2 pt-2.5 bg-[#018891] text-white"
                sx={{ width: 'auto' , height:'auto'}}
              >
                Stay Informed
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
</div>
    </div>
  )
}


