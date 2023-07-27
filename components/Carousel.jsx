import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 60000,
        appenDots: (dots) => (
                <ul>{dots}</ul>
        ),
        customPaging: (i) => (
            <div className="w-3 h-3 bg-white rounded-full" />
        ),
    };

  return (
    <div className="h-screen w-full -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
            <Image
            src="/images/hero-bg.jpg"
            alt="hero-bg"
            layout="fill"
            objectFit="cover"
            />
        </div>
      </div>
      <Slider {...settings}>
        <div>
            <div className="mt-48 text-white flex flex-col gap-y-10 container mx-auto text-center md:text-start">
                <Title className={'text-6xl'}>Fast Food Restaurant</Title>
                <p className="text-sm md:w-1/2 md:text-start text-center">Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
                ad mollitia laborum quam quisquam esse error unde. Tempora ex
                doloremque, labore, sunt repellat dolore, iste magni quos nihil
                ducimus libero ipsam.
                </p>
                <button className="btn-primary w-max mx-auto md:mx-0">Order Now</button>
            </div>
        </div>
        <div>
            <div className="mt-48 text-white flex flex-col gap-y-10 container mx-auto text-center md:text-start">
                <Title className={'text-6xl'}>Fast Food Restaurant</Title>
                <p className="text-sm md:w-1/2 md:text-start text-center">Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
                ad mollitia laborum quam quisquam esse error unde. Tempora ex
                doloremque, labore, sunt repellat dolore, iste magni quos nihil
                ducimus libero ipsam.
                </p>
                <button className="btn-primary w-max mx-auto md:mx-0">Order Now</button>
            </div>
        </div>
        <div>
            <div className="mt-48 text-white flex flex-col gap-y-10 container mx-auto text-center md:text-start">
                <Title className={'text-6xl'}>Fast Food Restaurant</Title>
                <p className="text-sm md:w-1/2 md:text-start text-center">Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
                ad mollitia laborum quam quisquam esse error unde. Tempora ex
                doloremque, labore, sunt repellat dolore, iste magni quos nihil
                ducimus libero ipsam.
                </p>
                <button className="btn-primary w-max mx-auto md:mx-0">Order Now</button>
            </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
