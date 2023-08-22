import Image from "next/image";
import React from "react";
import Layout from "./components/Layout";
import 'animate.css';

function work() {
  return (
    <>
      <Layout>
        <div className="flex flex-col text-white w-full">
          <div className="flex flex-col text-[40px] items-center justify-center p-5">
            projects
          </div>
          <div className="flex flex-row gap-3 p-5 items-center justify-center animate__animated animate__backInDown">
            <div className="flex flex-col hover:shadow-lg hover:shadow-blue-400 transition duration-300 hover:scale-105">
              <div className="flex flex-col p-5 gap-3 bg-[#262626] rounded-2xl ">
                <div>
                  <Image
                    src={require("../src/Assest/project 1.png")}
                    className="felx w-[100%] rounded-2xl"
                  ></Image>
                </div>
                <div className="flex flex-col gap-3 bg-[#262626] items-center justify-center">
                  <div className="bg-[#262626]">Web Development</div>
                  <a
                    href="https://himalayan-website.vercel.app/"
                    className="bg-[#262626] "
                  >
                    Project Web Center
                  </a>
                  <div className="bg-[#262626] ">
                    Built- React JS | Material UI
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col hover:shadow-lg hover:shadow-blue-400 transition duration-300 hover:scale-105">
              <div className="flex flex-col p-5 gap-3 bg-[#262626] rounded-2xl ">
                <div>
                  <Image
                    src={require("../src/Assest/project 1.png")}
                    className="felx w-[100%] rounded-2xl"
                  ></Image>
                </div>
                <div className="flex flex-col gap-3 bg-[#262626] items-center justify-center">
                  <div className="bg-[#262626]">Web Development</div>
                  <a
                    href="https://himalayan-website.vercel.app/"
                    className="bg-[#262626] rounded-2xl"
                  >
                    Project Web Center
                  </a>
                  <div className="bg-[#262626] ">
                    Built- React JS | Material UI
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col hover:shadow-lg hover:shadow-blue-400 transition duration-300 hover:scale-105">
              <div className="flex flex-col p-5 gap-3 bg-[#262626] rounded-2xl ">
                <div>
                  <Image
                    src={require("../src/Assest/project 1.png")}
                    className="felx w-[100%] rounded-2xl"
                  ></Image>
                </div>
                <div className="flex flex-col gap-3 bg-[#262626] items-center justify-center">
                  <div className="bg-[#262626]">Web Development</div>
                  <a
                    href="https://himalayan-website.vercel.app/"
                    className="bg-[#262626] "
                  >
                    Project Web Center
                  </a>
                  <div className="bg-[#262626] ">
                    Built- React JS | Material UI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default work;
