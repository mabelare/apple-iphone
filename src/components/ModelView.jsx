import React, { useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import Iphone from "./Iphone";
import Loader from "./Loader";
import * as THREE from "three";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  ControlRef,
  setRotationState,
  size,
  item,
}) => {
  const localGroup = useRef();

  useEffect(() => {
    if (groupRef) groupRef.current = localGroup.current;
  }, [groupRef, item]);

  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <Lights />

        <Suspense fallback={<Loader />}>
          <group ref={localGroup}>
            <Iphone
              item={item}
              scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
              size={size}
            />
          </group>
        </Suspense>

        <OrbitControls
          ref={ControlRef}
          enablePan={false}
          enableZoom={false}
          rotateSpeed={0.4}
          target={new THREE.Vector3(0, 0, 0)}
          onEnd={() => {
            if (
              ControlRef &&
              ControlRef.current &&
              typeof ControlRef.current.getAzimuthalAngle === "function"
            ) {
              setRotationState(ControlRef.current.getAzimuthalAngle());
            }
          }}
        />
      </Canvas>
    </div>
  );
};

export default ModelView;
