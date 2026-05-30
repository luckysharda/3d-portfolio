import { useRef, useState } from "react";
import { Float, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/react.glb");
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Smoothly scale up on hover and spin a little faster while pointed at.
  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const target = hovered ? 0.55 : 0.4;
    easing.damp3(groupRef.current.scale, [target, target, target], 0.25, delta);
    groupRef.current.rotation.y += (hovered ? 1.2 : 0.25) * delta;
  });

  const onOver = (e) => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = "pointer";
  };
  const onOut = () => {
    setHovered(false);
    document.body.style.cursor = "auto";
  };

  return (
    <Float floatIntensity={1}>
      <group
        ref={groupRef}
        position={[8, 8, 0]}
        scale={0.4}
        onPointerOver={onOver}
        onPointerOut={onOut}
        {...props}
      >
        <mesh
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/react.glb");

export default ReactLogo;
