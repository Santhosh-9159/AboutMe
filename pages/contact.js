import React from "react";
import Layout from "./components/Layout";
import 'animate.css';

function contact() {
  return (
    <>
      <Layout>
        <div className="flex flex-col text-white">
          <div className="flex flex-col items-center justify-center p-10 text-[40px]">
            <h1>
              GET IN <span className="text-blue-500 font-Georgia">
                TOUCH
              </span>
            </h1>
          </div>
          <div className="flex flex-row text-white gap-5 w-full justify-around">
            <div className=" flex flex-col p-5 w-[40%] animate__animated animate__backInUp">
              <div className=" flex flex-col p-5 text-blue-500 ">DON'T BE SHY !</div>
              <div className=" flex flex-col p-5">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </div>
              <div className=" flex flex-col p-5">
                <h1 className="text-blue-500">ADDRESS POINT</h1>
                <div>3/389 Sanarpathy Vinnapalli(po),Sathyamangalam,638402</div>
              </div>
              <div className=" flex flex-col p-5">
                <h1 className="text-blue-500">MAIL ME</h1>
                <div>santhoshgunaseelan8@gmail.com</div>
              </div>
              <div className=" flex flex-col p-5">
                <h1 className="text-blue-500">CALL ME</h1>
                <div>+91 9159755719</div>
              </div>
            </div>



            <div className="flex flex-col w-[60%] animate__animated animate__backInRight ">
              <div className="flex flex-row w-[100%] p-5 gap-3 ">
                <form className="w-[50%]">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-[#262626] w-full  p-2 h-10 rounded-2xl"
                  ></input>
                </form>

                <form className="w-[50%]">
                  <input
                    type="Email"
                    placeholder="Your Email"
                    className="bg-[#262626] w-full p-2 h-10 rounded-2xl"
                  ></input>
                </form>
              </div>
              <div className="flex flex-col  w-full p-5">
                <form>
                  <input
                    type="text"
                    placeholder="subject"
                    className="bg-[#262626] p-2 w-[100%] h-10 rounded-2xl"
                  ></input>
                </form>
              </div>
              <div className="flex flex-col w-full  p-5">
                <form>
                  <input
                    type="text area "
                    placeholder="Your Message"
                    className="bg-[#262626] w-[100%] p-2 rounded-2xl "
                  ></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default contact;
