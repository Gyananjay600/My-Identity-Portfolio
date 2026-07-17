import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Float, RoundedBox, ContactShadows, OrbitControls, Sparkles as DreiSparkles } from "@react-three/drei";
import * as THREE from "three";
import CodeScreen from "./CodeScreen.jsx";

const KEY_COLS = 14;
const KEY_ROWS = 5;

function KeyboardKeys() {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const phase = useMemo(
    () => new Array(KEY_COLS * KEY_ROWS).fill(0).map(() => Math.random() * Math.PI * 2),
    []
  );

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    let i = 0;
    for (let row = 0; row < KEY_ROWS; row++) {
      for (let col = 0; col < KEY_COLS; col++) {
        const x = (col - (KEY_COLS - 1) / 2) * 0.145;
        const z = (row - (KEY_ROWS - 1) / 2) * 0.145;
        const press = Math.max(0, Math.sin(t * 2.2 + phase[i]) - 0.94) * 16;
        dummy.position.set(x, -press * 0.02, z);
        dummy.scale.set(1, 1 - press * 0.15, 1);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
        i++;
      }
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, KEY_COLS * KEY_ROWS]} castShadow>
      <boxGeometry args={[0.11, 0.035, 0.11]} />
      <meshStandardMaterial color="#3A3D42" roughness={0.5} metalness={0.2} />
    </instancedMesh>
  );
}

/** The back of the lid — visible once you orbit past 180°.
 * Brushed-silver body with an original "GS" mark (not a real brand logo). */
function LidBackLogo() {
  return (
    <div className="flex select-none flex-col items-center justify-center gap-2 opacity-90">
      <span
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 font-serif text-lg font-semibold text-white/85"
        style={{ background: "linear-gradient(145deg, #E9EBEE, #AEB3BA)" }}
      >
        GS
      </span>
      <span className="font-mono text-[9px] tracking-[0.3em] text-white/40">GYANANJAY</span>
    </div>
  );
}

/** Small drifting "code particles" — ambient motion without any remote font load. */
function CodeParticles() {
  const group = useRef();
  const specs = useMemo(
    () =>
      new Array(10).fill(0).map(() => ({
        pos: [
          (Math.random() - 0.5) * 3.6,
          Math.random() * 1.6 - 0.2,
          (Math.random() - 0.5) * 3.6,
        ],
        scale: 0.045 + Math.random() * 0.05,
        speed: 0.4 + Math.random() * 0.6,
        offset: Math.random() * Math.PI * 2,
        color: Math.random() > 0.5 ? "#B9852E" : "#D9A94B",
      })),
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    group.current?.children.forEach((mesh, i) => {
      const s = specs[i];
      mesh.position.y = s.pos[1] + Math.sin(t * s.speed + s.offset) * 0.18;
      mesh.rotation.x = t * 0.4 + s.offset;
      mesh.rotation.y = t * 0.3 + s.offset;
    });
  });

  return (
    <group ref={group}>
      {specs.map((s, i) => (
        <mesh key={i} position={s.pos} scale={s.scale}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={s.color}
            emissive={s.color}
            emissiveIntensity={0.4}
            roughness={0.3}
            metalness={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

function Laptop() {
  const group = useRef();

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    // tiny idle bob only — camera orbiting (not the object spinning) drives the 360° view
    group.current.position.y = -0.15 + Math.sin(t * 0.6) * 0.035;
  });

  return (
    <group ref={group} position={[0, -0.15, 0]}>
      {/* base / body — brushed aluminum */}
      <RoundedBox args={[2.15, 0.09, 1.5]} radius={0.05} smoothness={4} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial color="#C6CBD2" roughness={0.32} metalness={0.75} />
      </RoundedBox>

      {/* keyboard deck */}
      <group position={[0, 0.05, 0.02]}>
        <KeyboardKeys />
      </group>

      {/* trackpad */}
      <RoundedBox args={[0.55, 0.01, 0.38]} radius={0.03} position={[0, 0.05, 0.55]}>
        <meshStandardMaterial color="#8B9099" roughness={0.35} metalness={0.5} />
      </RoundedBox>

      {/* screen / lid group — open at a fixed angle so it reads clearly from any orbit angle */}
      <group position={[0, 0.03, -0.72]} rotation={[-1.72, 0, 0]}>
        {/* the lid shell itself — silver on every edge as you orbit around it */}
        <RoundedBox args={[2.15, 1.35, 0.06]} radius={0.06} smoothness={4} castShadow>
          <meshStandardMaterial color="#CDD2D8" roughness={0.28} metalness={0.8} />
        </RoundedBox>

        {/* FRONT — dark bezel surrounding the live display */}
        <mesh position={[0, 0, 0.031]}>
          <planeGeometry args={[2.05, 1.28]} />
          <meshStandardMaterial color="#111312" roughness={0.4} metalness={0.2} />
        </mesh>
        {/* the display itself, lit slightly so it reads as "on" */}
        <mesh position={[0, 0, 0.033]}>
          <planeGeometry args={[1.94, 1.16]} />
          <meshStandardMaterial
            color="#0F1E1D"
            roughness={0.2}
            metalness={0.1}
            emissive="#123231"
            emissiveIntensity={0.35}
          />
        </mesh>
        {/* HTML code overlay glued to the screen — typed Java, front-facing */}
        <Html
          transform
          occlude
          position={[0, 0, 0.035]}
          distanceFactor={1.28}
          className="pointer-events-none select-none"
        >
          <CodeScreen />
        </Html>

        {/* BACK of the lid — silver body + original "GS" mark, revealed on the far side of the orbit */}
        <Html
          transform
          occlude
          position={[0, 0, -0.033]}
          rotation={[0, Math.PI, 0]}
          distanceFactor={1.5}
          className="pointer-events-none select-none"
        >
          <LidBackLogo />
        </Html>
      </group>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      camera={{ position: [0, 0.95, 4.3], fov: 34 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[3, 4, 2]}
        intensity={1.15}
        castShadow
        shadow-mapSize={[1024, 1024]}
        color="#FBF6EC"
      />
      <directionalLight position={[-3, 2, -3]} intensity={0.5} color="#DCE3E6" />
      <pointLight position={[-3, 1, -2]} intensity={0.5} color="#B9852E" />
      <pointLight position={[0, 0.6, -1]} intensity={0.35} color="#3FA893" />

      <Float speed={1} rotationIntensity={0.05} floatIntensity={0.2}>
        <Laptop />
      </Float>

      <CodeParticles />
      <DreiSparkles count={26} scale={[4, 2.2, 4]} size={2.2} speed={0.25} color="#D9A94B" opacity={0.45} />

      <ContactShadows position={[0, -0.62, 0]} opacity={0.4} scale={7} blur={2.4} far={2} color="#211A12" />

      {/* full 360° orbit — auto-rotates, and can be dragged to look at the back of the lid */}
      <OrbitControls
        makeDefault
        target={[0, 0.15, 0]}
        enablePan={false}
        enableZoom={false}
        enableRotate
        enableDamping
        dampingFactor={0.08}
        autoRotate
        autoRotateSpeed={1.1}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI - Math.PI / 4}
      />
    </Canvas>
  );
}