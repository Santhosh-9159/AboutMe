import { FaHome  } from "react-icons/fa";
import {FcAbout} from "react-icons/fc"
import {PiSuitcaseSimpleDuotone} from "react-icons/pi"
import {MdPermContactCalendar} from "react-icons/md"
import {SiBloglovin} from "react-icons/Si"
export const navbar =[
    {
        title :"Home",
        to :"/homepg",
        icon: <FaHome />
    },
    {
        title :"About",
        to :"/about",
        icon:<FcAbout />
    },
    {
        title :"Work",
        to :"/work",
        icon:<PiSuitcaseSimpleDuotone/>
    },
    {
        title :"Contact",
        to :"/contact",
        icon:<MdPermContactCalendar />
    },
    {
        title :"Blog",
        to :"/blog",
        icon:<SiBloglovin />
    },
]



