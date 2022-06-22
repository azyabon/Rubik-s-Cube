import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Cube = ({ position = [], color = "black" }) => {
  const rotateCubeRef = useRef();

  useFrame(() => {
    rotateCubeRef.current.scale.x = 0.4;
    rotateCubeRef.current.scale.y = 0.4;
    rotateCubeRef.current.scale.z = 0.4;

    rotateCubeRef.current.rotation.x += 0.1;
    rotateCubeRef.current.rotation.y += 0.1;
    rotateCubeRef.current.rotation.z += 0.1;
  }, []);

  return (
    <>
      <mesh position={position} ref={rotateCubeRef}>
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};
