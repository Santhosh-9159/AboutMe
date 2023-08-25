import { navbar } from "@/src/Components/Array";
import Image from "next/image";
import { router } from "next/router";
import React, { useState } from "react";
import Layout from "./components/Layout";
import 'animate.css';
import About from "./about";
import Mymodel from "./mymodel";
function Homepg() {

  const [aboutMe, setAboutMe] = useState(false)
  return (
    <>
    <Layout>
    <div className="flex flex-col w-full overflow-hidden text-white ">
       
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row w-[90%] gap-5 h-full items-center justify-between p-10">
            <div className="flex flex-col animate__animated animate__zoomInDown">
              <Image src={require("../src/Assest/santhosh.png")} className="rounded-3xl"></Image>
            </div>
            <div className="felx felx-col  justify-between gap-10 p-5 w-[70%]  h-80  ">
              <div className="   text-[40px] "> <p>- I'M SANTHOSH.</p></div>
              <div className="felx flex-col ">
                <div className=" text-[40px] "><p>WEB DESIGNER</p></div>

                <div className="p-5 pl-0">
                 <p> I'm a Indian based web designer & front‑end developer focused
                  on crafting clean & user‑friendly experiences, I am passionate
                  about building excellent software that improves the lives of
                  those around me.
                  </p>
                </div>
              </div>
              <div>
                <button className="text-blue-500" onClick={()=>(setAboutMe(true))}>MORE ABOUT ME</button>
                {aboutMe && <Mymodel aboutMe={aboutMe} setAboutMe={setAboutMe}/>}
        </div>
            </div>
          </div>
         
        </div>
        
      </div>

            </Layout>
    </>
  );
}

export default Homepg;
