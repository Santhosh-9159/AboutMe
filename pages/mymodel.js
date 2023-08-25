import { Modal } from '@mui/material'
import React from 'react'

function Mymodel({aboutMe, setAboutMe}) {
  return (
    <>
     <Modal open={aboutMe} sx={{display:"flex",borderRadius:"10px" ,flexDirection:"column " ,width:"100%",padding:"20px",alignItems:"center",justifyContent:"center",backgroundColor:"#3b3b3b9c",overflowY:"scroll",height:"100%"}}>
      <div className="flex flex-col w-[80%] text-white m-10 h-[80%]">
<div className="flex flex-row p-2 items-center justify-around text-[40px] rounded-md">
<div> <h1>About
  <span className=" text-blue-500 pl-2"   >ME</span>
  </h1></div>
 <button onClick={()=>(setAboutMe(false))}  className='px-5 py-1 bg-blue-400 color-white text-xl cursor-pointer rounded-md'>X</button>
  </div>        
<div className="flex flex-col  w-full gap-5">

        <div className="flex flex-row w-full  items-center justify-center">
          <div className="flex flex-col w-[60%] gap-5 p-2">
          <div className="flex flex-col p-5 text-[30px] text-blue-500 ">PERSONAL INFO'S</div>
          <div className="flex flex-row  w-[100%] p-3  bg-[#262626]  rounded-lg animate__animated animate__backInLeft ">
          <div className="flex flex-col w-[50%] gap-3 p-3 bg-[#262626]  ">
            <p  className=" bg-[#262626] ">First Name : Santhosh</p>
            <p  className=" bg-[#262626] ">Age : 21</p>
            <p  className=" bg-[#262626] ">Experience : Fresher</p>
            <p  className=" bg-[#262626] ">Phone Number : +91 9159755719</p>
            <p  className=" bg-[#262626] ">GitHub : Santhosh-9159</p>
          </div>
          <div className="flex flex-col w-[50%] gap-3 p-3 bg-[#262626] ">
          
            <p  className=" bg-[#262626] ">Last Name : gunaseelan</p>
            <p  className=" bg-[#262626] ">Nationality : Indian</p>
            <p  className=" bg-[#262626] ">Address : 3/389,Sanarpathy,Vinnapalli(po),<br/>Sathyamangalam</p>
            <p  className=" bg-[#262626] ">Email : santhoshgunaseelan8@gamil.com</p>
            <p  className=" bg-[#262626] ">Language : Tamil,English</p>
          </div>
    
           </div>
           </div>
           
          <div className="flex flex-col w-[35%] gap-3">
          <div className="flex flex-row w-full justify-center items-center gap-3  text-[30px] text-blue-500">Self-sumarry</div>
          <div className="bg-[#262626] p-3 rounded-2xl">
            As a web designer, my objective is to make a positive impact on
            clients, co-workers, and the Internet using my skills and experience
            to design compelling and attractive websites. Solving code problems.
            Editing & Design with designing team in the company to build perfect
            web designs.
          </div>
          </div>
           
        </div>
        
        
            <div className="flex flex-row justify-evenly p-5 gap-5 w-full">
                <div className="flex flex-col w-[50%] ">
                  <div className="text-[30px] text-blue-500">Education</div>
                  <div className="p-3 bg-[#262626] rounded-md ">
                    <p  className=" bg-[#262626] ">2020 - 2023</p>
                    <p  className=" bg-[#262626] ">Kaamadhenu Arts And Science College</p>
                    CGPA - 7.9%
                    <div className=" bg-[#262626] ">
                      <p  className=" bg-[#262626] ">2017 - 2019</p>
                      <p className=" bg-[#262626] ">Sri Ragavendra Matric Hr.Sec.School</p>
                      <p className=" bg-[#262626] ">HSC - 44.5%</p>
                      <p className=" bg-[#262626] ">SSLC - 75%</p>
                    </div>
                  </div>
                  </div>
                <div  className="flex flex-col w-[50%]  ">
                  
                    <div className="text-[30px] text-blue-500"><p>Area Of Interest</p></div>
                    <div className="p-3 bg-[#262626] rounded-md  ">
                      <p className=" bg-[#262626] ">1. Web Development</p>
                      <p className=" bg-[#262626] ">2. Photograpy</p>
                      <p className=" bg-[#262626] ">3. Technical Videos</p>
                    </div>
                  
                  </div>
                
            </div>
            <div className="flex flex-row w-full justify-evenly p-5 gap-5">
              <div className="flex flex-col w-[50%]  ">
                <div className="text-[30px] text-blue-500">Skills</div>
                <div  className="p-3 bg-[#262626] rounded-md">
                  <p className=" bg-[#262626] ">HTML & CSS</p>
                  <p className=" bg-[#262626] ">Javascrip</p>
                  <p className=" bg-[#262626] ">React Js</p>
                  <p className=" bg-[#262626] ">Material UI</p>
                  <p className=" bg-[#262626] ">Next Js</p>
                  <p className=" bg-[#262626] ">Tail Wind</p>
                </div>
              </div>
                 <div className="flex flex-col w-[50%] ">
              
                    <div className="text-[30px] text-blue-500">Soft Skills</div>
                    <div  className="p-3 bg-[#262626] rounded-md"><p className=" bg-[#262626] ">Photograpy</p></div>
                
                 </div>
            </div>
            </div>
      </div>
      </Modal>

    </>
  )
}

export default Mymodel