import { Text3D, Float, Center } from "@react-three/drei";

export const SectionTitle = ({ children, ...props }) => {
  return (
    <Float
      floatIntensity={1}
      speed={2}
      rotationIntensity={0}
      floatingRange={[0, 0.2]}
    >
      <group position={[-3, 0, -2]} scale={1}>
        <Text3D
          font={"fonts/VT323_Regular.json"}
          size={1.3}
          height={0.1}
          {...props}
        >
          {children}
          <meshStandardMaterial color="black" />
        </Text3D>

        <Text3D
          font={"fonts/VT323_Regular.json"}
          size={1.28}
          height={0.105}
          {...props}
        >
          {children}
          <meshStandardMaterial color="#990000" />
        </Text3D>
        <Text3D
          font={"fonts/VT323_Regular.json"}
          size={1.26}
          height={0.11}
          {...props}
        >
          {children}
          <meshStandardMaterial color="#daa520" />
        </Text3D>
      </group>
    </Float>
  );
};
