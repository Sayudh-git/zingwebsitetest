/* eslint-disable @next/next/no-img-element */
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function About() {
  const router = useRouter();
  return (
    <section className="py-5 md:py-20 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex max-w-6xl items-center mx-auto pl-3">
          <h1 className="text-4xl font-semibold">About Us</h1>
        </div>
        <div className="flex flex-wrap max-w-6xl mx-auto mt-2 -m-3">
          {/* SECTIONS  */}
          <div className="w-full p-3 ">
            <div className="flex flex-col justify-end h-full ">
              <div>
                <p className="mb-8 text-opacity-70 font-medium leading-relaxed text-lg">
                  We created the Zing app out of the frustrations with queueing
                  we share. We are an ordering & payment platform for you to
                  browse, order and pay for your favourite food and drinks.
                  Pre-order ahead to skip the queue, and just collect it when
                  its ready!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex max-w-6xl items-center mx-auto pl-3">
          <h1 className="text-4xl font-semibold w-full flex md:w-1/2">
            Want to get in <br />
            touch with us?
          </h1>
        </div>
        <div className="flex flex-wrap max-w-6xl mx-auto mt-2 -m-3">
          {/* SECTIONS  */}
          <div className="w-full p-3 ">
            <div className="flex flex-col justify-end h-full ">
              <div>
                <p className="mb-2 text-opacity-70 font-medium leading-relaxed text-md">
                  Send us a mail
                </p>
                <p className="mb-8 text-opacity-70 font-medium leading-relaxed text-lg">
                  admin@zingnow.in
                </p>

                <p className="mb-2 text-opacity-70 font-medium leading-relaxed text-md">
                  Follow us
                </p>
                <div className="cursor-pointer">
                  <p
                    className="mb-2 text-opacity-70 font-medium leading-relaxed text-lg"
                    onClick={() => router.push("https://twitter.com/zing_now")}
                  >
                    Twitter
                  </p>
                  <p
                    className="mb-2 text-opacity-70 font-medium leading-relaxed text-lg"
                    onClick={() =>
                      router.push("https://www.linkedin.com/company/zingindia/")
                    }
                  >
                    Linkedin
                  </p>
                  <p
                    className="mb-2 text-opacity-70 font-medium leading-relaxed text-lg"
                    onClick={() =>
                      router.push("https://www.instagram.com/zingnow/")
                    }
                  >
                    Instagram
                  </p>
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

export default About;
