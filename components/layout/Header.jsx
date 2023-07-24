import { useState } from "react";
import { FaUserAlt, FaShoppingCart, FaSearch, FaHamburger } from 'react-icons/fa';
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import { GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";
import Link from "next/link";

const CustomLink = ({ href, title }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`relative group`}>
      {title}

      <span className={`h-[1px] inline-block bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  );
};

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);

  const router = useRouter();

  return (
    <div className={`h-[5.5rem] z-50 relative ${router.asPath === '/' ? "bg-transparent" : 'bg-secondary'}`}>
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />

        <nav className={`hidden absolute top-0 left-0 h-screen w-full text-black bg-white
                         sm:static sm:w-auto sm:h-auto sm:text-white sm:bg-transparent sm:flex
                         ${isMenuModal === true && "!grid place-content-center"}`}>
          <ul className="flex items-center flex-col gap-10 sm:flex-row sm:gap-x-2">
            <li className="px-[5px] uppercase hover:text-primary duration-200">
              <CustomLink href="/" title='Home'/>
            </li>
            <li className="px-[5px] uppercase hover:text-primary duration-200">
            <CustomLink href="/menu" title='Menu'/>
            </li>
            <li className="px-[5px] uppercase hover:text-primary duration-200">
            <CustomLink href="/about" title='About'/>
            </li>
            <li className="px-[5px] uppercase hover:text-primary duration-200">
            <CustomLink href="/reservation" title='Reservation'/>
            </li>
          </ul>          
          {isMenuModal && (
            <button className="absolute top-3 right-3" onClick={() => setIsMenuModal(false)}>
              <GiCancel size={25} className="hover:text-primary duration-150 sm:hidden" />
            </button>
          )}
        </nav>

        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login" className="hover:text-primary duration-200">
            <FaUserAlt />
          </Link>
          <Link href="/cart" className="hover:text-primary duration-200">
            <FaShoppingCart />
          </Link>
          <button onClick={() => setIsSearchModal(true)} className="hover:text-primary duration-200">
            <FaSearch />
          </button>
          <a href="/" className="md:inline-block hidden">
            <button className="btn-primary">Order Online</button>
          </a>
          <button className="sm:hidden inline-block" onClick={() => setIsMenuModal(true)}>
            <FaHamburger className="text-xl hover:text-primary duration-200" />
          </button>
        </div>
      </div>

      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;