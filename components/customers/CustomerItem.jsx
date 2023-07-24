import Image from "next/image";

const CustomerItem = ({ imgSrc }) => {
  return (
    <div className="mt-5 mx-4">
      <div className="p-6 bg-secondary text-white rounded-[5px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam
          debitis consequuntur tempora, dolore est velit inventore placeat
          architecto blanditiis fuga corrupti aliquid vero?
        </p>
        <div className="flex flex-col mt-4">
          <span className="text-lg font-semibold">Moana Michell</span>
          <span className="text-[15px]">magna aliqua</span>
        </div>
      </div>
      <div className="relative w-28 h-28 mt-8 flex justify-center
      before:absolute before:content-[''] before:bg-primary before:w-6 before:h-6 before:-top-2 before:rotate-45">
        <Image
          src={imgSrc}
          alt="client1"
          layout="fill"
          objectFit="contain"
          className="rounded-full border-primary border-4"
        />
      </div>
    </div>
  );
};

export default CustomerItem;
