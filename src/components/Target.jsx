import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF("/models/target-stand/model.gltf");
  useGSAP(() => {
    gsap.to(targetRef.current.rotation, {
      y: targetRef.current.rotation.y + 0.5,
      duration: 1.5,

      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
