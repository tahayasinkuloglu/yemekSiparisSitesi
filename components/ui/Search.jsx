import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { GiCancel } from 'react-icons/gi';

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="absolute w-screen z-50 h-screen top-0 left-0 grid place-content-center
    after:content-[''] after:w-screen after:bg-white after:h-screen after:absolute after:top-0 after:left-0 after:opacity-60">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className='w-full h-full grid place-content-center'>
          <div className="relative z-50 w-[370px] md:w-[600px] bg-white border-2 p-10 rounded-3xl">
            <Title className={'text-[40px] text-center'}>Search</Title>
            <input type="text" placeholder="Search" className="border w-full my-10" />
            <div>
              <ul>
                <li className="flex items-center justify-between cursor-pointer p-1 hover:bg-primary duration-200">
                    <Image src='/images/pizza.png' width={48} height={48} alt='pizza' />
                  <span className='font-bold'>Good Pizza</span>
                  <span className='font-bold'>$10</span>
                </li>
                <li className="flex items-center justify-between cursor-pointer p-1 hover:bg-primary duration-200">
                    <Image src='/images/pizza.png' width={48} height={48} alt='pizza' />
                  <span className='font-bold'>Good Pizza</span>
                  <span className='font-bold'>$10</span>
                </li>
                <li className="flex items-center justify-between cursor-pointer p-1 hover:bg-primary duration-200">
                    <Image src='/images/pizza.png' width={48} height={48} alt='pizza' />
                  <span className='font-bold'>Good Pizza</span>
                  <span className='font-bold'>$10</span>
                </li>
              </ul>
              <button className="absolute top-3 right-3" onClick={() => setIsSearchModal(false)}>
                <GiCancel size={25} className="hover:text-primary duration-150" />
              </button>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;