import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";

const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-3xl rounded-t-[30px]">
        <div className="w-full bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-t-3xl">
           <div className="relative w-36 h-36">
                <Image src="/images/o1.jpg" alt="food" layout="fill" className="hover:scale-110 duration-200" />
            </div> 
        </div>      
      <div className="text-white p-6">
        <h4 className="text-xl font-semibold mb-2">Delicious Pizza</h4>
        <p className="text-[15px] mb-5">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque
        </p>
        <div className="flex justify-between items-center">
            <span>$20</span>
            <button className="btn-primary w-10 h-10 p-0 rounded-full">
                <MdShoppingCart className="mx-auto"/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;