import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useRef } from "react";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { models, sizes } from "../constants";
const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);
  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <section className="common-padding  ">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className=" w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              ControlRef={cameraControlSmall}
              item={model}
              setRotationState={setSmallRotation}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              ControlRef={cameraControlLarge}
              item={model}
              setRotationState={setLargeRotation}
              size={size}
            />
          </div>
          <div className="mx-auto w-full ">
            <p
              className={`text-sm text-center mb-5 ${model.title.startsWith("iPhone 15 Pro") ? "font-semibold" : "font-light"}`}
            >
              {model.title}
            </p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className={`w-6 h-6 rounded-full mx-2 cursor-pointer ${model.title === item.title ? "ring-2 ring-offset-1 ring-white" : ""}`}
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => {
                      
                      setModel(item);
                    }}
                  ></li>
                ))}
              </ul>
              <div className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn" style={{ backgroundColor: size === value ? "white" : "transparent",
                        color: size === value ? "black" : "white"
                     }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
