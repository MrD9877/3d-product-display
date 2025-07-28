"use client";
import Configurator from "@/components/Configurator";
import Expirence from "@/components/Expirence";
import { CustomizationProvider } from "@/hooks/CustomisationProvider";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <CustomizationProvider>
      <Canvas dpr={[1, 2]}>
        {/* <OrbitControls /> */}
        <color attach="background" args={["#213547"]} />
        <fog attach="fog" args={["#213547", 10, 20]} />
        <Expirence />
      </Canvas>
      <Configurator />
    </CustomizationProvider>
  );
}
