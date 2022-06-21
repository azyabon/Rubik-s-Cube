import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Cube = ({ position = [], color = "black" }) => {
  const rotateCubeRef = useRef();

  useFrame(() => {
    rotateCubeRef.current.scale.x = 0.4;
    rotateCubeRef.current.scale.y = 0.4;
    rotateCubeRef.current.scale.z = 0.4;
    rotateCubeRef.current.rotation.x += Math.random() * 0.03;
    rotateCubeRef.current.rotation.y += Math.random() * 0.01;
    rotateCubeRef.current.rotation.z += Math.random() * 0.01;
  }, []);

  return (
    <>
      <mesh onClick={() => {}} position={position} ref={rotateCubeRef}>
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};
