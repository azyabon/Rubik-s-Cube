import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Cube = ({ position = [], color = "black" }) => {
  const rotateCubeRef = useRef();

  useFrame(() => {
    rotateCubeRef.current.scale.x = 0.5;
    rotateCubeRef.current.scale.y = 0.5;
    rotateCubeRef.current.scale.z = 0.5;
    rotateCubeRef.current.rotation.x += Math.random() * 0.035;
    rotateCubeRef.current.rotation.y += Math.random() * 0.02;
  }, []);

  return (
    <>
      <mesh position={position} ref={rotateCubeRef}>
        <boxGeometry />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};
