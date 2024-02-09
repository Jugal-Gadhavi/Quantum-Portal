"use client"

import { authSsessions } from "@/Lib/auth";
import { signOut } from "next-auth/react";


const getName = (email: string) =>{
    const nameArray = email.split('.')
    const initials = nameArray[0][0] + nameArray[1][0];
    return initials;
}

const DisplayPhoto = ({session}: any)=>{
    return(
      
        <div>
            {session === undefined ? ( <div className="">
          <button
            onClick={(e) => {
              signOut();
            }}
            className="flex aspect-square rounded-full border-2 border-solid border-[#3FD28B] bg-[#3C4E62] p-5 text-white text-lg items-center text-center align-middle"
          >
            {/* {getName(session.user_email)} */}
          </button>
        </div>) : (<div><button className="px-4 p-2 rounded bg-green-400"> SIGNOUT </button></div>)}
        </div>
    )
}

export default DisplayPhoto;
