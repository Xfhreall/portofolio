/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import X from "./assets/x.svg";
import Github from "./assets/github.svg";
import Instagram from "./assets/instagram.svg";
import Linkedin from "./assets/linkedin.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center text-white font-poppins">
      <section className="min-h-screen h-max w-5/6 lg:w-4/6 justify-center flex items-center border-x-2 border-white border-opacity-20 flex-col">
        <div className="border-2 w-11/12 h-5/6 rounded-3xl flex flex-col lg:flex-row items-start py-14 lg:py-20 px-6 border-white border-opacity-20 gap-8">
          <div className="flex justify-center flex-col w-1/2 items-center gap-3 lg:gap-6 mx-auto">
            <div className="flex w-full sm:w-10/12">
              <Image
                src="https://i.pinimg.com/originals/82/0a/31/820a31ebc7a75832858aed4f0db952fb.jpg"
                className="rounded-circle h-auto border-2 p-1 border-white/20 hover:brightness-75 transition-all "
                alt="...."
                width={500}
                height={400}
              />
            </div>
            <div className="grid justify-center text-center lg:text-start w-max">
              <h1 className=" text-base lg:text-2xl font-bold tracking-wider ">
                Risqi <br className="hidden lg:flex" />
                Achmad Fahreal
              </h1>
              <p className="text-xs lg:text-base tracking-widest opacity-50 font-mono">
                Farel · he/him
              </p>
            </div>
          </div>
          <div className="w-auto lg:w-5/6 h-auto grid gap-3 lg:gap-6">
            <div>
              <h1 className=" text-xl lg:text-3xl font-bold tracking-wider border-b-2 w-max pb-2 font-mono">
                Front End
                <br />
                <span className="text-2xl lg:text-4xl tracking-widest">
                  Developer
                </span>
              </h1>
              <p className="text-xs sm:text-sm lg:text-sm text-justify mt-2 leading-5 sm:leading-6 lg:leading-6">
                A software engineer based in Malang, Indonesia. I specialize in{" "}
                <strong>front end development</strong>. I use technologies such
                as react, vite, next, tailwind, and other technologies and tools
                to add attractiveness, integrate systems, deploy, and maintain
                applications. Additionaly, i'm an{" "}
                <strong>
                  Computer Science student at Brawijaya University.
                </strong>
              </p>
            </div>
            <div className="flex flex-row gap-2 sm:gap-4 lg:gap-4 items-center">
              <Link
                href="https://github.com/Xfhreall"
                target="_blank"
                className="lg:hover:scale-125 transition-all duration-300 lg:scale-100 scale-75 sm:scale-90 hover:scale-90"
              >
                <Image src={Github} alt="..." />
              </Link>
              <Link
                href="https://www.instagram.com/arfah.real_"
                target="_blank"
                className="lg:hover:scale-125 transition-all duration-300 lg:scale-100 scale-75 sm:scale-90 hover:scale-90"
              >
                <Image src={Instagram} alt="..." />
              </Link>
              <Link
                href="https://x.com/ursnctuary"
                target="_blank"
                className="lg:hover:scale-125 transition-all duration-300 lg:scale-100 scale-75 sm:scale-90 hover:scale-90"
              >
                <Image src={X} alt="..." />
              </Link>
              <Link
                href="/"
                target="_blank"
                className="lg:hover:scale-125 transition-all duration-300 lg:scale-100 scale-75 sm:scale-90 hover:scale-90"
              >
                <Image src={Linkedin} alt="..." />
              </Link>
              <button className="border-2 w-max py-1 px-4 rounded-lg transition-all ease-in-out duration-500 hover:bg-white hover:text-black flex flex-row items-center gap-1 font-mono hover:rounded-none ml-auto scale-75 sm:scale-90 lg:scale-100">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
                    />
                  </svg>
                </span>
                Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
