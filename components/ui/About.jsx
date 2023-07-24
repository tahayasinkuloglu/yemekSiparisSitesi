import Image from "next/image";
import Title from "./Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 md:flex-nowrap flex-wrap-reverse">
        <div className="w-full grid place-content-center">
            <div className="relative w-[300px] h-[400px] md:w-[445px] md:h-[600px]">
                <Image src="/images/about-img.png" alt="about" layout="fill"/>
            </div>
        </div>
        <div>
            <Title className={"text-[40px]"}>We Are Feane</Title>
            <p className="my-5 w-[90%]">There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don`t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn`t anything embarrassing hidden in the
            middle of text.
            </p>
            <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;