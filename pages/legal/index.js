import Image from "next/image";
import React from "react";
import zingLegal from "../../public/assets/legal/zingLegal.svg";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";

function Legal() {
  const router = useRouter();
  return (
    <section className="py-5 md:py-20 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex max-w-6xl items-center mx-auto pl-3">
          <Image src={zingLegal} alt="Zing Legal" width={100} height={100} />
          <h1 className="text-4xl font-semibold">Zing Legal</h1>
        </div>
        <div className="flex flex-wrap max-w-6xl mx-auto mt-10 -m-3">
          {/* SECTIONS  */}
          <div className="w-full md:w-1/3 p-3">
            <div className="flex flex-col justify-end p-10 h-full bg-zing-orange rounded-md">
              <div>
                <h3 className="mb-4 text-4xl text-white font-semibold leading-snug">
                  Privacy Policy
                </h3>
                <p className="mb-8 text-white text-opacity-70 font-medium leading-relaxed truncate">
                  BlitzBee Ptv. Ltd. (“we/us/our“) are committed to protecting
                  and respecting your privacy.
                </p>
                <div className="md:max-w-max">
                  <button
                    className="py-4 px-7 w-full font-semibold rounded-xl shadow-6xl focus:ring focus:ring-gray-300 bg-white hover:bg-gray-100 transition ease-in-out duration-200"
                    type="button"
                    onClick={() => router.push("/legal/privacypolicy")}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-3">
            <div className="flex flex-col justify-end p-10 h-full bg-zing-orange rounded-md">
              <div>
                <h3 className="mb-4 text-4xl text-white font-semibold leading-snug">
                  T n C
                </h3>
                <p className="mb-8 text-white text-opacity-70 font-medium leading-relaxed truncate">
                  Zing is licensed to You (End-User) by BlitzBee Ptv. Ltd. ,
                  located and registered at Kolkata, West Bengal India.
                </p>
                <div className="md:max-w-max">
                  <button
                    className="py-4 px-7 w-full font-semibold rounded-xl shadow-6xl focus:ring focus:ring-gray-300 bg-white hover:bg-gray-100 transition ease-in-out duration-200 tracking-wide"
                    type="button"
                    onClick={() => router.push("/legal/tnc")}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-3">
            <div className="flex flex-col justify-end p-10 h-full bg-zing-orange rounded-md">
              <div>
                <h3 className="mb-4 text-4xl text-white font-semibold leading-snug">
                  About Us
                </h3>
                <p className="mb-8 text-white text-opacity-70 font-medium leading-relaxed truncate">
                  We created the Zing app out of the frustrations with queueing
                  we share.
                </p>
                <div className="md:max-w-max">
                  <button
                    className="py-4 px-7 w-full font-semibold rounded-xl shadow-6xl focus:ring focus:ring-gray-300 bg-white hover:bg-gray-100 transition ease-in-out duration-200 tracking-wide"
                    type="button"
                    onClick={() => router.push("/legal/about")}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl items-center mx-auto pl-3 mt-10 ">
          <Link href="/" passHref>
            <a
              rel="noopener noreferrer"
              className="flex items-center text-white py-4 px-7 w-40 font-semibold rounded-md shadow-6xl focus:ring focus:ring-gray-500 bg-zing-green hover:bg-green-400 transition ease-in-out duration-200 tracking-wide"
            >
              <ArrowLeftIcon className="w-6 h-6 mr-2" />
              Home
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Legal;
