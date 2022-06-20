import { Canvas } from "@react-three/fiber";
import { Cube } from "../Cube/Cube";
import { Suspense } from "react";

export const Main = () => {
  return (
    <main style={{ height: "100vh" }}>
      <Suspense>
        <Canvas>
          <ambientLight intesity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Cube position={[1, 1, 0]} color={"red"} />
          <Cube position={[0, 1, 0]} color={"green"} />
          <Cube position={[0, 0, 0]} color={"yellow"} />
          <Cube position={[1, 0, 0]} color={"purple"} />
          <Cube position={[0, -1, 0]} color={"gray"} />
          <Cube position={[1, -1, 0]} color={"lime"} />
          <Cube position={[-1, 1, 0]} color={"pink"} />
          <Cube position={[-1, -1, 0]} color={"orange"} />
          <Cube position={[-1, 0, 0]} color={"black"} />

          <Cube position={[1, 2, -1]} color={"red"} />
          <Cube position={[0, 2, -1]} color={"green"} />
          <Cube position={[-1, 2, -1]} color={"pink"} />
          <Cube position={[2, 0, -1]} color={"purple"} />
          <Cube position={[-2, 0, -1]} color={"black"} />
          <Cube position={[-1, -2, -1]} color={"orange"} />
          <Cube position={[0, -2, -1]} color={"gray"} />
          <Cube position={[1, -2, -1]} color={"lime"} />
        </Canvas>
      </Suspense>
    </main>
  );
};
