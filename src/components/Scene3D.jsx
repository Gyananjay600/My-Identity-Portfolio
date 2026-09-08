import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Float, RoundedBox, ContactShadows, OrbitControls, Sparkles as DreiSparkles, Environment } from "@react-three/drei";
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

function DesktopSetup() {
  const group = useRef();

  return (
    <group ref={group} position={[0, -0.3, 0]}>
      {/* Desk Mat */}
      <RoundedBox args={[3.4, 0.02, 1.4]} radius={0.01} position={[0, 0, 0.5]} castShadow>
        <meshStandardMaterial color="#1A1C23" roughness={0.8} metalness={0.1} />
      </RoundedBox>

      {/* Ultrawide Monitor */}
      <group position={[-0.5, 0.6, 0]}>
        {/* Monitor Base */}
        <RoundedBox args={[0.7, 0.04, 0.4]} radius={0.02} position={[0, -0.58, 0]} castShadow>
          <meshStandardMaterial color="#111" roughness={0.6} metalness={0.5} />
        </RoundedBox>
        {/* Monitor Neck */}
        <RoundedBox args={[0.1, 0.6, 0.08]} radius={0.02} position={[0, -0.3, -0.1]} castShadow>
          <meshStandardMaterial color="#222" roughness={0.5} metalness={0.8} />
        </RoundedBox>
        {/* Monitor Screen Shell */}
        <RoundedBox args={[2.8, 1.2, 0.08]} radius={0.04} position={[0, 0, 0]} castShadow>
          <meshStandardMaterial color="#111" roughness={0.3} metalness={0.8} />
        </RoundedBox>
        {/* Monitor Screen Bezel (Front) */}
        <mesh position={[0, 0, 0.042]}>
          <planeGeometry args={[2.75, 1.15]} />
          <meshStandardMaterial color="#050505" roughness={0.4} metalness={0.2} />
        </mesh>
        {/* Monitor Display */}
        <mesh position={[0, 0, 0.044]}>
          <planeGeometry args={[2.7, 1.1]} />
          <meshStandardMaterial
            color="#0F1E1D"
            roughness={0.2}
            metalness={0.1}
            emissive="#0d1b2a"
            emissiveIntensity={0.5}
            polygonOffset
            polygonOffsetFactor={-1}
            polygonOffsetUnits={-1}
          />
        </mesh>
        {/* CodeScreen */}
        <Html
          transform
          position={[0, 0, 0.047]}
          distanceFactor={1.4}
          occlude={false}
          className="pointer-events-none select-none"
          style={{
            pointerEvents: "none",
            userSelect: "none",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          <div style={{ width: "620px", height: "375px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CodeScreen is3D={true} />
          </div>
        </Html>
        {/* Back Logo */}
        <Html
          transform
          position={[0, 0, -0.046]}
          rotation={[0, Math.PI, 0]}
          distanceFactor={1.5}
          occlude={false}
          className="pointer-events-none select-none"
          style={{
            pointerEvents: "none",
            userSelect: "none",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          <LidBackLogo />
        </Html>
      </group>

      {/* PC Tower */}
      <group position={[1.4, 0.6, 0.2]}>
        {/* Case Body */}
        <RoundedBox args={[0.7, 1.2, 1.4]} radius={0.03} position={[0, 0, 0]} castShadow>
          <meshStandardMaterial color="#0a0a0c" roughness={0.7} metalness={0.3} />
        </RoundedBox>
        {/* Glass Panel (Left side facing monitor) */}
        <mesh position={[-0.358, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[1.3, 1.1]} />
          <meshPhysicalMaterial color="#000" transparent opacity={0.4} roughness={0.1} metalness={0.8} />
        </mesh>
        {/* RGB Fans */}
        <group position={[-0.2, 0, 0.5]}>
          {[0.35, 0, -0.35].map((y, i) => (
            <mesh key={i} position={[0, y, 0]} rotation={[0, Math.PI / 2, 0]}>
              <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
              <meshStandardMaterial color="#000" emissive={i % 2 === 0 ? "#B9852E" : "#3FA893"} emissiveIntensity={2} />
            </mesh>
          ))}
        </group>
        {/* Internal Glow */}
        <pointLight position={[0, 0, 0]} intensity={1.5} color="#B9852E" distance={1.5} />
      </group>

      {/* Keyboard */}
      <group position={[-0.5, 0.035, 0.5]}>
        <KeyboardKeys />
      </group>
      
      {/* Mouse */}
      <RoundedBox args={[0.15, 0.04, 0.25]} radius={0.02} position={[0.4, 0.035, 0.5]} castShadow>
        <meshStandardMaterial color="#1A1C23" roughness={0.6} metalness={0.4} />
        {/* Mouse Glow (bottom) */}
        <mesh position={[0, -0.021, 0]} rotation={[Math.PI / 2, 0, 0]}>
           <planeGeometry args={[0.13, 0.23]} />
           <meshStandardMaterial color="#3FA893" emissive="#3FA893" emissiveIntensity={2} />
        </mesh>
      </RoundedBox>

    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      camera={{ position: [0, 0.8, 5.2], fov: 45 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        logarithmicDepthBuffer: true,
      }}
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

      <Environment preset="city" />
      <Float speed={1} rotationIntensity={0.05} floatIntensity={0.2}>
        <group scale={0.75}>
          <DesktopSetup />
        </group>
      </Float>

      <CodeParticles />
      <DreiSparkles count={26} scale={[4, 2.2, 4]} size={2.2} speed={0.25} color="#D9A94B" opacity={0.45} />

      <ContactShadows position={[0, -0.7, 0]} opacity={0.4} scale={7} blur={2.4} far={2} color="#211A12" />

      {/* full 360° orbit — auto-rotates, and can be dragged to look at the back of the lid */}
      <OrbitControls
        makeDefault
        target={[-0.3, 0.3, 0]}
        enablePan={false}
        enableZoom={false}
        enableRotate
        enableDamping
        dampingFactor={0.06}
        autoRotate={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={(Math.PI * 5) / 6}
      />
    </Canvas>
  );
}
