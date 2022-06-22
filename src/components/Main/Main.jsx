import { Canvas } from "@react-three/fiber";
import { Cube } from "../Cube/Cube";
import { Suspense, useRef } from "react";
import { OrbitControls, Stars } from "@react-three/drei";

export const Main = () => {
  return (
    <main
      style={{
        height: "100vh",
        width: "100vw",
        // background: 'url("/romb.png")',
        backgroundColor: "#262626",
      }}
    >
      <div style={{ padding: "20px" }}>
        <span style={{ fontSize: "42px", fontWeight: "700" }}>
          Rubik's cube model
        </span>
        <p style={{ fontSize: "24px" }}>In development...</p>
      </div>
      <Suspense>
        <Canvas
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            transform: "translate(50%, 50%)",
          }}
        >
          <OrbitControls />
          <Stars />
          <ambientLight intesity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Cube position={[0.3, 0.5, 0.1]} color={"white"} />
          <Cube position={[-0.1, 0.5, 0.1]} color={"black"} />
          <Cube position={[-0.1, 0.1, 0.1]} color={"black"} />
          <Cube position={[0.3, 0.1, 0.1]} color={"black"} />
          <Cube position={[-0.1, -0.3, 0.1]} color={"black"} />
          <Cube position={[0.3, -0.3, 0.1]} color={"white"} />
          <Cube position={[-0.5, 0.5, 0.1]} color={"white"} />
          <Cube position={[-0.5, -0.3, 0.1]} color={"white"} />
          <Cube position={[-0.5, 0.1, 0.1]} color={"black"} />
          <Cube position={[-0.1, 0.5, 0.9]} color={"white"} />
          <Cube position={[0.3, 0.5, 0.5]} color={"black"} />
          <Cube position={[-0.1, 0.5, 0.5]} color={"black"} />
          <Cube position={[0.3, 0.5, 0.9]} color={"black"} />
          <Cube position={[-0.5, 0.5, 0.5]} color={"black"} />
          <Cube position={[-0.5, -0.3, 0.5]} color={"black"} />
          <Cube position={[-0.5, 0.1, 0.5]} color={"black"} />
          <Cube position={[-0.5, 0.1, 0.9]} color={"black"} />
          <Cube position={[-0.5, -0.3, 0.9]} color={"black"} />
          <Cube position={[-0.5, 0.5, 0.9]} color={"black"} />
          <Cube position={[-0.1, -0.3, 0.9]} color={"white"} />
          <Cube position={[-0.1, 0.1, 0.9]} color={"black"} />
          <Cube position={[0.3, 0.1, 0.9]} color={"black"} />
          <Cube position={[0.3, -0.3, 0.9]} color={"black"} />
          <Cube position={[0.3, -0.3, 0.5]} color={"black"} />
          <Cube position={[0.3, 0.1, 0.5]} color={"black"} />
          <Cube position={[-0.1, -0.3, 0.5]} color={"black"} />
        </Canvas>
      </Suspense>
    </main>
  );
};
