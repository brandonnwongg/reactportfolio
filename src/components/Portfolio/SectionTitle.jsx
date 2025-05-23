import { Text3D } from "@react-three/drei";

export const SectionTitle = ({ children, ...props }) => {
  return (
    <group position={[-2.5, 0.5, 0.5]}>
      <group>
        <Text3D
          font={"fonts/Anton_Regular.json"}
          size={0.62}
          height={0.02}
          position={[0, 0, 0]}
          {...props}
        >
          {children}
          <meshStandardMaterial color="black" />
        </Text3D>
      </group>
      <Text3D
        font={"fonts/Anton_Regular.json"}
        size={0.61}
        height={0.02}
        position={[0, 0, 0.048]}
        {...props}
      >
        {children}
        <meshStandardMaterial color="black" />
      </Text3D>
      <Text3D
        font={"fonts/Anton_Regular.json"}
        size={0.6}
        height={0.02}
        position={[0, 0, 0.05]}
        {...props}
      >
        {children}
        <meshStandardMaterial color="red" />
      </Text3D>
      <Text3D
        font={"fonts/Anton_Regular.json"}
        size={0.59}
        height={0.02}
        position={[0, 0, 0.098]}
        {...props}
      >
        {children}
        <meshStandardMaterial color="black" />
      </Text3D>
      <Text3D
        font={"fonts/Anton_Regular.json"}
        size={0.58}
        height={0.02}
        position={[0, 0, 0.1]}
        {...props}
      >
        {children}
        <meshStandardMaterial color="yellow" />
      </Text3D>
    </group>
  );
};
