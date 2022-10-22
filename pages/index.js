import Head from "next/head";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// ICONS
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

// IMAGES
import zingTitle from "../public/assets/zingTitle.svg";
import Link from "next/link";
import SlideShow from "../components/Home/SlideShow";
import twitter from "../public/assets/socials/twitter.svg";
import linkedin from "../public/assets/socials/linkedin.svg";
import instagram from "../public/assets/socials/instagram.svg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zing - Preorder food takeaway</title>
      </Head>
      <h1 className="text-[0px]">Zing preorder food online</h1>
      <section
        className="flex flex-col md:justify-center items-center 
      relative h-screen"
      >
        <header className="mt-8 md:mt-0 mb-5">
          <Image
            src={zingTitle}
            alt="zing-title-logo"
            objectFit="contain"
            className="h-full w-full"
          />
        </header>

        <div
          className="absolute w-screen top-[40%] md:top-[42%] z-30
        before:content-[''] before:w-[85%] before:left-1/2 before:-translate-x-1/2 before:-translate-y-[20px] md:before:-translate-y-[35px] before:h-[2px] before:absolute before:bg-white before:z-30
        after:content-[''] after:w-[85%] after:left-1/2 after:-translate-x-1/2 after:translate-y-[20px] md:after:translate-y-[35px] after:h-[2px] after:absolute after:bg-white after:z-30"
        >
          <Marquee
            speed={220}
            gradient={false}
            className="text-5xl md:text-7xl font-medium text-white overflow-hidden"
          >
            <p className="ml-4 tracking-wide">
              <span className="text-zing-orange ">SKIP</span> THE QUEUE.
              <span className="text-zing-orange "> COLLECT</span> YOUR FOOD.
            </p>
          </Marquee>
        </div>

        <div>
          <div className="flex flex-col relative justify-center items-center">
            <SlideShow />
            <Link
              href="https://play.google.com/store/apps/details?id=com.zingit.user"
              passHref
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center bg-white absolute cursor-pointer 
        -bottom-[5%] md:bottom-[20%] p-2 md:pl-2 md:pr-2 md:pt-1 md:pb-1 w-[200px] md:w-[280px] b rounded-full z-20"
              >
                <p className=" mr-2 font-medium text-2xl md:text-3xl relative">
                  Get It Now
                </p>
                <ArrowLongRightIcon className="w-8 h-8 md:w-12 md:h-12" />
              </a>
            </Link>
          </div>

          <div
            className="text-white flex justify-center font-medium text-lg md:xl mt-[70px] md:mt-6
         cursor-pointer "
          >
            <Link href="https://twitter.com/zing_now" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image src={twitter} alt="twitter" width={30} height={30} />
              </a>
            </Link>

            <Link href="https://www.instagram.com/zingnow/" passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 mr-6"
              >
                <Image src={instagram} alt="twitter" width={30} height={30} />
              </a>
            </Link>
            <Link href="http://careers.zingnow.in" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image src={linkedin} alt="twitter" width={30} height={30} />
              </a>
            </Link>
          </div>
          <div
            className="text-white flex justify-evenly font-medium text-lg md:xl
        mt-[30px] md:mt-2 cursor-pointer "
          >
            <Link href="http://careers.zingnow.in" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Careers{" "}
              </a>
            </Link>
            <Link href="http://careers.zingnow.in" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Restaurants{" "}
              </a>
            </Link>
            <Link href="http://careers.zingnow.in" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Legal
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
