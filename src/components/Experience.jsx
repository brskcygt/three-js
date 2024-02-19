import { OrbitControls } from "@react-three/drei";
import Woman from './Woman'

export default function Experience() {

  return (
   <>
     <OrbitControls />
     <ambientLight />
     <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
     <group position={[0, -1, 0]}>
      <Woman />
     </group>
     <mesh>
      <planeGeometry args={[10, 10, 1, 1]}/>
      <shadowMaterial transparent opacity={0.2}/>
     </mesh>
   </>
  );
}
