import { navbar } from '@/src/Components/Array';
import { useRouter } from 'next/router';
import React from 'react'
import 'animate.css';
import { Box } from '@mui/material';
function Navbar() {
    const router = useRouter()
    const location = router.pathname
  return (
    <>
      <div className=" justify-between items-center flex flex-row ">
            
            <div className="flex flex-col w-full h-full justify-arround pt-20">
              {navbar.map((item, id) => {
                return (
                  <Box
                 
                    key={id}
                    onClick={() => {
                      router.push(item.to);
                    }}
                    className="cursor-pointer hover:scale-110 text-white transistion w-full flex flex-row gap-2 w-35 h-16 items-center justify-between "
                  >             
                  <Box  sx={{color: location == item.to ? "#fff" : "#4d4d4d"}} > {item.title}</Box>     
                    <div className='text-blue-500 text-2xl'>{item.icon}</div>
                  </Box>
                );
              })}
            </div>
          </div>
    </>
  )
}

export default Navbar