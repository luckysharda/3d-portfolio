import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF("/models/target-stand/model.gltf");
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap.to(targetRef.current.rotation, {
      y: targetRef.current.rotation.y + 0.5,
      duration: 1.5,

      repeat: -1,
      yoyo: true,
    });
  });

  // Grow slightly while the pointer hovers the target.
  useFrame((_, delta) => {
    if (!targetRef.current) return;
    const scale = hovered ? 1.7 : 1.5;
    easing.damp3(targetRef.current.scale, [scale, scale, scale], 0.25, delta);
  });

  return (
    <mesh
      {...props}
      ref={targetRef}
      rotation={[0, Math.PI / 5, 0]}
      scale={1.5}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
