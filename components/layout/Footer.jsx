import Title from "../ui/Title";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto flex pt-10 pb-6 flex-wrap justify-center md:gap-0 gap-14">
        <div className="flex md:flex-1 flex-col text-center">
          <Title className={"text-[30px] mb-7"}>Contact Us</Title>
          <a className="flex justify-center items-center gap-1 mb-2">
            <HiLocationMarker />
            <span>Location</span>
          </a>
          <a className="flex justify-center items-center gap-1 mb-2">
            <IoIosCall />
            <span>Call +01 1234567890</span>
          </a>
          <a className="flex justify-center items-center gap-1">
            <GoMail />
            <span>demo@gmail.com</span>
          </a>
        </div>

        <div className="flex md:flex-1 flex-col text-center">
          <Title className={"text-[40px] mb-3"}>Feane</Title>
          <p className="mb-5">
            Necesarry, making this the firs true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with this.
          </p>
          <div className="flex justify-center">
            <ul className="flex text-xl text-secondary gap-2">
              <li className="bg-white rounded-full p-2 hover:text-primary duration-200">
                <a href="https://www.instagram.com/" target="_blank">
                  <BsFacebook />
                </a>
              </li>
              <li className="bg-white rounded-full p-2 hover:text-primary duration-200">
                <a href="https://facebook.com/" target="_blank">
                  <BsTwitter />
                </a>
              </li>
              <li className="bg-white rounded-full p-2 hover:text-primary duration-200">
                <a href="https://www.linkedin.com/" target="_blank">
                  <BiLogoLinkedin />
                </a>
              </li>
              <li className="bg-white rounded-full p-2 hover:text-primary duration-200">
                <a href="https://twitter.com/" target="_blank">
                  <BsInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex md:flex-1 flex-col text-center">
          <Title className={"text-[30px] mb-7"}>Opening Hours</Title>
          <span className="mb-5">Everyday</span>
          <span>14.00 Am - 12.00 Pm</span>
        </div>
      </div>
      <p className="text-center mt-10 pb-5">
        © 2022 All Rights Reserved By Free Html Templates
      </p>
    </div>
  );
};

export default Footer;
