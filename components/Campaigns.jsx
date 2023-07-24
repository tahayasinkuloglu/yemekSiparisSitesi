import Image from "next/image";
import Title from "./ui/Title";
import { MdShoppingCart } from "react-icons/md";

const CampaignItem = ({ sale, campaignName }) => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-6">
      <div className="relative sm:w-44 sm:h-44 w-36 h-36 border-[5px] border-primary rounded-full overflow-hidden">
        <Image src="/images/o1.jpg" alt="food" layout="fill" className="hover:scale-110 duration-200"/>
      </div>
      <div className="text-white">
        <Title className={"text-2xl"}>{campaignName}</Title>
        <div className="font-dancing my-1">
          <span className="text-[40px]">{sale}</span>
          <span className="text-md inline-block ml-1">Off</span>
        </div>
      <button className="btn-primary flex items-center gap-x-2">
        Order Now <MdShoppingCart size={20} />
      </button>        
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
      <CampaignItem campaignName={"Tasty Thursday"} sale={"20%"} />
      <CampaignItem campaignName={"Tasty Thursday"} sale={"20%"} />
    </div>
  );
};

export default Campaigns;