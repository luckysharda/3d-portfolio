import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { workExperiences } from "../constants";
import {
  Float,
  OrbitControls,
  Sparkles,
  Stars,
} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");
  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">Experience</h3>
        <div className="work-container">
          <div className="work-canvas min-h-[520px] lg:min-h-0">
            <Canvas camera={{ position: [0, 0.6, 7.5], fov: 45 }}>
              <color attach="background" args={["#0E0E10"]} />
              <fog attach="fog" args={["#0E0E10", 10, 22]} />

              <ambientLight intensity={1.2} />
              <hemisphereLight
                args={["#a78bfa", "#0E0E10", 0.6]}
              />
              <directionalLight
                position={[5, 8, 6]}
                intensity={2.2}
                color="#ffffff"
              />
              <spotLight
                position={[-6, 6, 4]}
                angle={0.4}
                penumbra={1}
                intensity={1.6}
                color="#7dd3fc"
              />
              <pointLight
                position={[3, -2, 4]}
                intensity={1.4}
                color="#f472b6"
              />

              <Suspense fallback={<CanvasLoader />}>
                <Stars
                  radius={50}
                  depth={30}
                  count={1800}
                  factor={3}
                  saturation={0}
                  fade
                  speed={0.6}
                />
                <Sparkles
                  count={60}
                  scale={[8, 6, 4]}
                  position={[0, 0.5, 0]}
                  size={3}
                  speed={0.4}
                  color="#a78bfa"
                />

                <Float
                  speed={2}
                  rotationIntensity={1.2}
                  floatIntensity={1.5}
                  position={[-2.6, 1.6, -1]}
                >
                  <mesh castShadow>
                    <icosahedronGeometry args={[0.45, 0]} />
                    <meshStandardMaterial
                      color="#a78bfa"
                      metalness={0.6}
                      roughness={0.2}
                      emissive="#7c3aed"
                      emissiveIntensity={0.35}
                    />
                  </mesh>
                </Float>

                <Float
                  speed={1.6}
                  rotationIntensity={1}
                  floatIntensity={1.2}
                  position={[2.5, 1.9, -0.8]}
                >
                  <mesh>
                    <torusGeometry args={[0.45, 0.13, 16, 80]} />
                    <meshStandardMaterial
                      color="#22d3ee"
                      metalness={0.6}
                      roughness={0.25}
                      emissive="#0ea5e9"
                      emissiveIntensity={0.3}
                    />
                  </mesh>
                </Float>

                <Float
                  speed={1.3}
                  rotationIntensity={0.8}
                  floatIntensity={1}
                  position={[2.2, -1.4, -0.5]}
                >
                  <mesh>
                    <boxGeometry args={[0.55, 0.55, 0.55]} />
                    <meshStandardMaterial
                      color="#f472b6"
                      metalness={0.5}
                      roughness={0.3}
                      emissive="#db2777"
                      emissiveIntensity={0.25}
                    />
                  </mesh>
                </Float>

                <mesh
                  position={[0, -2.7, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  receiveShadow
                >
                  <ringGeometry args={[0.9, 1.6, 64]} />
                  <meshStandardMaterial
                    color="#a78bfa"
                    emissive="#7c3aed"
                    emissiveIntensity={0.6}
                    metalness={0.4}
                    roughness={0.4}
                    transparent
                    opacity={0.55}
                  />
                </mesh>
                <mesh
                  position={[0, -2.71, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <circleGeometry args={[0.85, 64]} />
                  <meshStandardMaterial
                    color="#1e1b4b"
                    metalness={0.3}
                    roughness={0.7}
                    transparent
                    opacity={0.7}
                  />
                </mesh>

                <Developer
                  position-y={-2.7}
                  scale={2.4}
                  animationName={animationName}
                />
              </Suspense>

              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 2.6}
                maxPolarAngle={Math.PI / 1.9}
                minAzimuthAngle={-Math.PI / 6}
                maxAzimuthAngle={Math.PI / 6}
              />
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({
                  id,
                  name,
                  pos,
                  location,
                  duration,
                  title,
                  bullets,
                  icon,
                  animation,
                }) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() => setAnimationName(animation.toLowerCase())}
                    onPointerOver={() =>
                      setAnimationName(animation.toLowerCase())
                    }
                    onPointerOut={() => setAnimationName("idle")}
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="logo" className="w-full h-full" />
                      </div>
                      <div className="work-content_bar" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="mb-5 text-sm">
                        {[pos, location, duration].filter(Boolean).join(" — ")}
                      </p>
                      <p className="group-hover:text-white transition-all ease-in-out duration-500">
                        {title}
                      </p>
                      {bullets && bullets.length > 0 && (
                        <ul className="mt-3 list-disc list-outside pl-5 space-y-2 text-sm text-white-600 group-hover:text-white-800 transition-all ease-in-out duration-500">
                          {bullets.map((point, i) => (
                            <li key={i} className="leading-relaxed">
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
