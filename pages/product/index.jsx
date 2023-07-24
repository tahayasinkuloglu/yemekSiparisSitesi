import Title from "@/components/ui/Title";
import Image from "next/image";

const Index = () => {
  return (
    <div className="flex items-center h-screen py-10 flex-wrap text-center md:text-start">
      <div className="relative md:flex-1 w-[80%] md:h-[80%] h-[35%] mx-20">
        <Image src='/images/pizza.png' alt="pizza" layout="fill" className="object-contain"/>
      </div>
      <div className="md:flex-1">
        <Title className={"text-6xl"}>Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline inline-block my-5">$10</span>
        <p className="text-sm my-5 w-[60%] mx-auto md:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quo amet quas veniam aspernatur repellat sapiente dolore minus esse?
              Quas soluta tempora debitis.
        </p>
        <div>
            <h4 className="text-xl font-bold">Choose the size</h4>
            <div className="flex items-center gap-10 mt-2 justify-center md:justify-start">
                <div className="relative w-8 h-8">
                    <Image src='/images/size.png' alt="pizza-size" layout="fill" />
                    <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">Small</span>
                </div>
                <div className="relative w-12 h-12">
                    <Image src='/images/size.png' alt="pizza-size" layout="fill" />
                    <span className="absolute top-0 -right-8 text-xs bg-primary rounded-full px-[5px] font-medium">Medium</span>
                </div>
                <div className="relative w-16 h-16">
                    <Image src='/images/size.png' alt="pizza-size" layout="fill" />
                    <span className="absolute top-0 -right-2 text-xs bg-primary rounded-full px-[5px] font-medium">Large</span>
                </div>
            </div>
        </div>
        <div className="flex gap-x-4 my-5 justify-center md:justify-start">
            <label className="flex items-center gap-x-1">
                <input type="checkbox" className="w-5 h-5 accent-primary" />
                <span className="text-sm font-semibold">Ketçap</span>
            </label>
            <label className="flex items-center gap-x-1">
                <input type="checkbox" className="w-5 h-5 accent-primary" />
                <span className="text-sm font-semibold">Mayonez</span>
            </label>
            <label className="flex items-center gap-x-1">
                <input type="checkbox" className="w-5 h-5 accent-primary" />
                <span className="text-sm font-semibold">Acı Sos</span>
            </label>
        </div>
        <button className="btn-primary mt-5 md:mb-0">Add to Cart</button>
      </div>
    </div>
  );
};

export default Index;