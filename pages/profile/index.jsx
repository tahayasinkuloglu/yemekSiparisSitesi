import { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { BiSolidKey, BiExit } from "react-icons/bi";
import { GiScooter } from "react-icons/gi";
import Account from "@/components/profile/Account";
import Password from "@/components/profile/Password";
import Order from "@/components/profile/Order";

const Profile = () => {
  const [tabs, setTabs] = useState(0);
  
  return (
    <div className="flex lg:flex-row flex-col px-10 min-h-[calc(100vh_-_436px)]">
      <div className="lg:w-[25%] my-10 flex-shrink-0 flex flex-col justify-end w-full">
        <div className="relative flex flex-col items-center gap-2 py-5 px-10 border h-full justify-center">
          <Image
            src="/images/client1.jpg"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full inline"
          />
          <b className="sm:text-2xl text-md">Emma Olivia</b>
        </div>
        <ul className="cursor-pointer font-semibold">
          <li className={`flex items-center gap-1 border-x py-4 px-4 duration-150 hover:bg-primary justify-center lg:justify-start
          ${tabs === 0 && "bg-primary text-white"}`} onClick={() => setTabs(0)} >
            <AiFillHome />
            <button>Account</button>
          </li>
          <li className={`flex items-center gap-1 border py-4 px-4 duration-150 hover:bg-primary justify-center lg:justify-start
          ${tabs === 1 && "bg-primary text-white"}`} onClick={() => setTabs(1)} >
            <BiSolidKey />
            <button>Password</button>
          </li>
          <li className={`flex items-center gap-1 border-x py-4 px-4 duration-150 hover:bg-primary justify-center lg:justify-start
          ${tabs === 2 && "bg-primary text-white"}`} onClick={() => setTabs(2)} >
            <GiScooter />
            <button>Orders</button>
          </li>
          <li className={`flex items-center gap-1 border py-4 px-4 duration-150 hover:bg-primary justify-center lg:justify-start
          ${tabs === 3 && "bg-primary text-white"}`} onClick={() => setTabs(3)} >
            <BiExit />
            <button>Exit</button>
          </li>
        </ul>
      </div>

      {tabs === 0 && <Account />}
      {tabs === 1 && <Password />}
      {tabs === 2 && <Order />}
    </div>
  );
};

export default Profile;
