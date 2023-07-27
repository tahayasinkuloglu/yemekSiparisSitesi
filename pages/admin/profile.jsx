import { useState } from "react";
import Image from "next/image";
import { BiExit, BiCategoryAlt } from "react-icons/bi";
import { GiScooter } from "react-icons/gi";
import { MdOutlineFastfood } from "react-icons/md";
import { LuPanelBottom } from "react-icons/lu";
import Products from "@/components/admin/Products";
import Order from "@/components/admin/Order";
import Category from "@/components/admin/Category";
import Footer from "@/components/admin/Footer";

const Profile = () => {
  const [tabs, setTabs] = useState(0);
  
  return (
    <div className="flex lg:flex-row flex-col px-10 min-h-[calc(100vh_-_436px)]">
      <div className="lg:w-[25%] my-10 flex-shrink-0 flex flex-col justify-end w-full">
        <div className="relative flex flex-col items-center gap-2 py-5 px-10 border h-full justify-center">
          <Image
            src="/images/admin.png"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full inline"
          />
          <b className="text-2xl">Admin</b>
        </div>
        <ul className="cursor-pointer font-semibold">
          <li className={`flex items-center gap-1 border-x py-4 px-4 duration-150 hover:bg-primary justify-center lg:justify-start
          ${tabs === 0 && "bg-primary text-white"}`} onClick={() => setTabs(0)} >
            <MdOutlineFastfood />
            <button>Products</button>
          </li>
          <li className={`flex items-center gap-1 border-x py-4 px-4 duration-150 hover:bg-primary justify-center lg:justify-start
          ${tabs === 1 && "bg-primary text-white"}`} onClick={() => setTabs(1)} >
            <GiScooter />
            <button>Orders</button>
          </li>
          <li className={`flex items-center gap-1 border py-4 px-4 duration-150 hover:bg-primary justify-center lg:justify-start
          ${tabs === 2 && "bg-primary text-white"}`} onClick={() => setTabs(2)} >
            <BiCategoryAlt />
            <button>Categories</button>
          </li>
          <li className={`flex items-center gap-1 border py-4 px-4 duration-150 hover:bg-primary justify-center lg:justify-start
          ${tabs === 3 && "bg-primary text-white"}`} onClick={() => setTabs(3)} >
            <LuPanelBottom />
            <button>Footer</button>
          </li>
          <li className={`flex items-center gap-1 border py-4 px-4 duration-150 hover:bg-primary justify-center lg:justify-start
          ${tabs === 4 && "bg-primary text-white"}`} onClick={() => setTabs(4)} >
            <BiExit />
            <button>Exit</button>
          </li>
        </ul>
      </div>

      {tabs === 0 && <Products />}
      {tabs === 1 && <Order />}
      {tabs === 2 && <Category />}
      {tabs === 3 && <Footer />}
    </div>
  );
};

export default Profile;
