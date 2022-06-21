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
          <Cube position={[0.5, 0.5, 0.1]} color={"red"} />
          <Cube position={[0, 0.5, 0.1]} color={"red"} />
          <Cube position={[0, 0, 0.1]} color={"red"} />
          <Cube position={[0.5, 0, 0.1]} color={"red"} />
          <Cube position={[0, -0.5, 0.1]} color={"red"} />
          <Cube position={[0.5, -0.5, 0.1]} color={"red"} />
          <Cube position={[-0.5, 0.5, 0.1]} color={"red"} />
          <Cube position={[-0.5, -0.5, 0.1]} color={"red"} />
          <Cube position={[-0.5, 0, 0.1]} color={"red"} />

          <Cube position={[0.5, 0.9, 0.5]} color={"yellow"} />
          <Cube position={[-0.5, 0.9, 0.5]} color={"yellow"} />
          <Cube position={[0, 0.9, 0.5]} color={"yellow"} />
          <Cube position={[0.5, 0.9, 1]} color={"yellow"} />
          <Cube position={[0, 0.9, 1]} color={"yellow"} />
          <Cube position={[-0.5, 0.9, 1]} color={"yellow"} />
          <Cube position={[-0.5, 0.9, 1.5]} color={"yellow"} />
          <Cube position={[0.5, 0.9, 1.5]} color={"yellow"} />
          <Cube position={[0, 0.9, 1.5]} color={"yellow"} />

          <Cube position={[-0.9, 0.5, 0.5]} color={"green"} />
          <Cube position={[-0.9, -0.5, 0.5]} color={"green"} />
          <Cube position={[-0.9, 0, 0.5]} color={"green"} />
          <Cube position={[-0.9, 0, 1]} color={"green"} />
          <Cube position={[-0.9, -0.5, 1]} color={"green"} />
          <Cube position={[-0.9, 0.5, 1]} color={"green"} />
          <Cube position={[-0.9, 0.5, 1.5]} color={"green"} />
          <Cube position={[-0.9, -0.5, 1.5]} color={"green"} />
          <Cube position={[-0.9, 0, 1.5]} color={"green"} />

          <Cube position={[0.9, 0, 0.5]} color={"blue"} />
          <Cube position={[0.9, -0.5, 0.5]} color={"blue"} />
          <Cube position={[0.9, 0.5, 0.5]} color={"blue"} />
          <Cube position={[0.9, 0, 1]} color={"blue"} />
          <Cube position={[0.9, -0.5, 1]} color={"blue"} />
          <Cube position={[0.9, 0.5, 1]} color={"blue"} />
          <Cube position={[0.9, 0.5, 1.5]} color={"blue"} />
          <Cube position={[0.9, -0.5, 1.5]} color={"blue"} />
          <Cube position={[0.9, 0, 1.5]} color={"blue"} />

          <Cube position={[-0.5, -0.9, 0.5]} color={"white"} />
          <Cube position={[0, -0.9, 0.5]} color={"white"} />
          <Cube position={[0.5, -0.9, 0.5]} color={"white"} />
          <Cube position={[0.5, -0.9, 1]} color={"white"} />
          <Cube position={[0, -0.9, 1]} color={"white"} />
          <Cube position={[-0.5, -0.9, 1]} color={"white"} />
          <Cube position={[-0.5, -0.9, 1.5]} color={"white"} />
          <Cube position={[0.5, -0.9, 1.5]} color={"white"} />
          <Cube position={[0, -0.9, 1.5]} color={"white"} />

          <Cube position={[0, 0.5, 1.9]} color={"orange"} />
          <Cube position={[0, -0.5, 1.9]} color={"orange"} />
          <Cube position={[0, 0, 1.9]} color={"orange"} />
          <Cube position={[0.5, 0, 1.9]} color={"orange"} />
          <Cube position={[0.5, -0.5, 1.9]} color={"orange"} />
          <Cube position={[0.5, 0.5, 1.9]} color={"orange"} />
          <Cube position={[-0.5, 0.5, 1.9]} color={"orange"} />
          <Cube position={[-0.5, -0.5, 1.9]} color={"orange"} />
          <Cube position={[-0.5, 0, 1.9]} color={"orange"} />
        </Canvas>
      </Suspense>
    </main>
  );
};

// <Canvas>
//   <ambientLight intesity={0.1} />
//   <pointLight position={[10, 10, 10]} />
//   <Cube position={[1, 1, 0]} color={"red"} />
//   <Cube position={[0, 1, 0]} color={"red"} />
//   <Cube position={[0, 0, 0]} color={"red"} />
//   <Cube position={[1, 0, 0]} color={"red"} />
//   <Cube position={[0, -1, 0]} color={"red"} />
//   <Cube position={[1, -1, 0]} color={"red"} />
//   <Cube position={[-1, 1, 0]} color={"red"} />
//   <Cube position={[-1, -1, 0]} color={"red"} />
//   <Cube position={[-1, 0, 0]} color={"red"} />
//
//   <Cube position={[1, 2, 0]} color={"green"} />
//   <Cube position={[0, 2, 0]} color={"green"} />
//   <Cube position={[-1, 2, 0]} color={"green"} />
//   <Cube position={[1, 3, 0]} color={"green"} />
//   <Cube position={[0, 3, 0]} color={"green"} />
//   <Cube position={[-1, 3, 0]} color={"green"} />
//   <Cube position={[-1, 4, 0]} color={"green"} />
//   <Cube position={[1, 4, 0]} color={"green"} />
//   <Cube position={[0, 4, 0]} color={"green"} />
//
//   <Cube position={[-2, 1, 0]} color={"yellow"} />
//   <Cube position={[-2, -1, 0]} color={"yellow"} />
//   <Cube position={[-2, 0, 0]} color={"yellow"} />
//   <Cube position={[-3, 0, 0]} color={"yellow"} />
//   <Cube position={[-3, -1, 0]} color={"yellow"} />
//   <Cube position={[-3, 1, 0]} color={"yellow"} />
//   <Cube position={[-4, 1, 0]} color={"yellow"} />
//   <Cube position={[-4, -1, 0]} color={"yellow"} />
//   <Cube position={[-4, 0, 0]} color={"yellow"} />
//
//   <Cube position={[2, 1, 0]} color={"white"} />
//   <Cube position={[2, -1, 0]} color={"white"} />
//   <Cube position={[2, 0, 0]} color={"white"} />
//   <Cube position={[3, 0, 0]} color={"white"} />
//   <Cube position={[3, -1, 0]} color={"white"} />
//   <Cube position={[3, 1, 0]} color={"white"} />
//   <Cube position={[4, 1, 0]} color={"white"} />
//   <Cube position={[4, -1, 0]} color={"white"} />
//   <Cube position={[4, 0, 0]} color={"white"} />
//
//   <Cube position={[1, -2, 0]} color={"blue"} />
//   <Cube position={[0, -2, 0]} color={"blue"} />
//   <Cube position={[-1, -2, 0]} color={"blue"} />
//   <Cube position={[1, -3, 0]} color={"blue"} />
//   <Cube position={[0, -3, 0]} color={"blue"} />
//   <Cube position={[-1, -3, 0]} color={"blue"} />
//   <Cube position={[-1, -4, 0]} color={"blue"} />
//   <Cube position={[1, -4, 0]} color={"blue"} />
//   <Cube position={[0, -4, 0]} color={"blue"} />
//
//   <Cube position={[-7, 1, 0]} color={"orange"} />
//   <Cube position={[-7, -1, 0]} color={"orange"} />
//   <Cube position={[-7, 0, 0]} color={"orange"} />
//   <Cube position={[-6, 0, 0]} color={"orange"} />
//   <Cube position={[-6, -1, 0]} color={"orange"} />
//   <Cube position={[-6, 1, 0]} color={"orange"} />
//   <Cube position={[-5, 1, 0]} color={"orange"} />
//   <Cube position={[-5, -1, 0]} color={"orange"} />
//   <Cube position={[-5, 0, 0]} color={"orange"} />
// </Canvas>
