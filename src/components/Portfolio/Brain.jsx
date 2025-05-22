import React, { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { shaderMaterial, Float } from "@react-three/drei";
import { data } from "./data";

const PATHS = data.economics[0].paths;
console.log(data.economics[0].paths);

const randomRange = (min, max) => Math.random() * (max - min) + min;
let curves = [];

//curves
for (let i = 0; i < 100; i++) {
  let points = [];
  let length = randomRange(0.1, 1);
  for (let j = 0; j < 100; j++) {
    points.push(
      new THREE.Vector3().setFromSphericalCoords(
        1,
        Math.PI - (j / 100) * Math.PI * length,
        (i / 100) * Math.PI * 2
      )
    );
  }
  let tempcurve = new THREE.CatmullRomCurve3(points);
  curves.push(tempcurve);
}

// console.log(curves);

let brainCurves = [];

PATHS.forEach((path) => {
  let points = [];
  for (let j = 0; j < path.length; j += 3) {
    points.push(new THREE.Vector3(path[j], path[j + 1], path[j + 2]));
  }
  let tempcurve = new THREE.CatmullRomCurve3(points);
  brainCurves.push(tempcurve);
});

// console.log(brainCurves);

// BRAIN TUBES
function Tube({ curve }) {
  const brainMaterial = useRef();

  useFrame(({ clock }) => {
    brainMaterial.current.uniforms.time.value = clock.getElapsedTime();
  });

  const BrainMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color(0.2, 0.4, 0.1) },
    // vertex shader
    /*glsl*/ `
          varying vec2 vUv;
          uniform float time;
          varying float vProgress;
          void main() {
            vUv = uv;
            vProgress = smoothstep(-1., 1., sin(vUv.x*8. + time * 3.));
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
    // fragment shader
    /*glsl*/ `
          uniform float time;
          uniform vec3 color;
          varying vec2 vUv;
          varying float vProgress;
          void main() {
            float hideCorners1 = smoothstep(1., 0.9, vUv.x);
            float hideCorners2 = smoothstep(0., 0.1, vUv.x);
            vec3 finalColor = mix(color, color*0.25, vProgress);
            gl_FragColor.rgba = vec4(vec3(vProgress), 1.);
            gl_FragColor.rgba = vec4(finalColor, hideCorners1 * hideCorners2);
          }
        `
  );

  // declaratively
  extend({ BrainMaterial });
  return (
    <mesh>
      <tubeGeometry args={[curve, 64, 0.001, 3, false]} />
      <brainMaterial
        ref={brainMaterial}
        side={THREE.DoubleSide}
        transparent={true}
        depthTest={false}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function Tubes({ allthecurve }) {
  return (
    <>
      {brainCurves.map((curve, index) => {
        return <Tube curve={curve} key={index} />;
      })}
    </>
  );
}

// BRAIN PARTICLES FOR THE TUBE
function BrainParticles({ allthecurve }) {
  let density = 10;
  let numberOfPoints = allthecurve.length * density;
  const myPoints = useRef([]);
  const brainGeo = useRef();
  let positions = useMemo(() => {
    let positions = [];
    for (let i = 0; i < numberOfPoints; i++) {
      positions.push(
        randomRange(-1, 1),
        randomRange(-1, 1),
        randomRange(-1, 1)
      );
    }
    return new Float32Array(positions);
  }, []);

  let randoms = useMemo(() => {
    let randoms = [];

    for (let i = 0; i < numberOfPoints; i++) {
      randoms.push(randomRange(0.3, 1));
    }

    return new Float32Array(randoms);
  }, []);

  useEffect(() => {
    for (let i = 0; i < allthecurve.length; i++) {
      for (let j = 0; j < density; j++) {
        myPoints.current.push({
          currentOffset: Math.random(),
          speed: Math.random() * 0.01,
          curve: allthecurve[i],
          curPosition: Math.random(),
        });
      }
    }
  });

  useFrame(({ clock }) => {
    const brainGeoCurPositions = brainGeo.current.attributes.position.array;

    for (let i = 0; i < myPoints.current.length; i++) {
      myPoints.current[i].curPosition += myPoints.current[i].speed;
      myPoints.current[i].curPosition = myPoints.current[i].curPosition % 1;

      const curPosition = myPoints.current[i].curve.getPointAt(
        myPoints.current[i].curPosition
      );
      brainGeoCurPositions[i * 3] = curPosition.x;
      brainGeoCurPositions[i * 3 + 1] = curPosition.y;
      brainGeoCurPositions[i * 3 + 2] = curPosition.z;
    }

    brainGeo.current.attributes.position.needsUpdate = true;
  });
  return (
    <>
      <points>
        <bufferGeometry attach="geometry" ref={brainGeo}>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-randoms"
            count={randoms.length}
            array={randoms}
            itemSize={1}
          />
        </bufferGeometry>
        <brainParticleMaterial
          attach="material"
          depthTest={false}
          depthWrite={false}
          transparent={true}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}
const BrainParticleMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color(0.1, 0.3, 0.6) },
  // vertex shader
  /*glsl*/ `
      varying vec2 vUv;
      uniform float time;
      varying float vProgress;
      attribute float randoms;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = randoms * 2. * (1. / -mvPosition.z);
      }
    `,
  // fragment shader
  /*glsl*/ `
      uniform float time;
      void main() {
        float disc = length(gl_PointCoord.xy - vec2(0.5));
        float opacity = 0.3 * smoothstep(0.5, 0.4, disc);
        gl_FragColor = vec4(vec3(opacity), 1.);
      }
    `
);

extend({ BrainParticleMaterial });

export const Brain = () => {
  const brainGroup = useRef();

  useFrame(() => {
    if (brainGroup.current) {
      brainGroup.current.rotation.y += 0.002;
    }
  });
  return (
    <>
      <group ref={brainGroup} position={[0, 1.5, 2]} scale={1}>
        <Float floatIntensity={0.2} speed={2}>
          <Tubes allthecurve={brainCurves} />
          <BrainParticles allthecurve={brainCurves} />
        </Float>
      </group>
    </>
  );
};
