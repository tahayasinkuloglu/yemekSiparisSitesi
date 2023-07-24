import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button
        className="flex text-2xl items-center justify-center absolute w-10 h-10 rounded-full -bottom-12 left-1/2 bg-primary text-white ml-4"
        onClick={onClick}
      >
        <MdArrowForwardIos className="absolute left-[9px]" />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button
        className="flex text-2xl items-center justify-center absolute w-10 h-10 rounded-full -bottom-12 right-1/2 bg-primary text-white"
        onClick={onClick}
      >
        <MdArrowBackIos className="absolute left-3" />
      </button>
    );
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        },
      },      
    ]
  };

  return (
    <div className="container mx-auto my-20">
      <Title className="text-[40px] text-center">What Says Our Customers</Title>
      <Slider {...settings}>
        <CustomerItem imgSrc="/images/client1.jpg" />
        <CustomerItem imgSrc="/images/client2.jpg" />
        <CustomerItem imgSrc="/images/client1.jpg" />
        <CustomerItem imgSrc="/images/client2.jpg" />
      </Slider>
    </div>
  );
};

export default Customers;
