import { navbar } from '@/src/Components/Array';
import { useRouter } from 'next/router';
import React from 'react'
import 'animate.css';
function Navbar() {
    const router = useRouter()
  return (
    <>
      <div className=" justify-between items-center flex flex-row ">
            
            <div className="flex flex-col w-full h-full justify-arround pt-20 animate__animated animate__fadeInRight">
              {navbar.map((item, id) => {
                return (
                  <div
                    key={id}
                    onClick={() => {
                      router.push(item.to);
                    }}
                    className="cursor-pointer hover:scale-110 text-white transistion w-full flex flex-row gap-2 w-35 h-16 items-center justify-between "
                  >             
                  <div > {item.title}</div>     
                    <div className='text-blue-500 text-2xl'>{item.icon}</div>
                  </div>
                );
              })}
            </div>
          </div>
    </>
  )
}

export default Navbar