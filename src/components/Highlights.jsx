import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { watchImg } from "../utils";
import { rightImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc-950"
    >
      <div className="screen-max-width ">
        <div className="mb-12 w-full flex flex-col md:flex-row md:items-center justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex items-center  gap-3 md:gap-4">
            <p className="link text-sm gap-1 items-center ">
              <span className="text-sm">Watch the film</span>
              <img src={watchImg} alt="watch" className="w-3 h-3 ml-1" />
            </p>
            <p className="link text-sm gap-1 items-center">
              <span className="text-sm">Watch the event</span>
              <img src={rightImg} alt="right" className="w-3 h-3 ml-1" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
