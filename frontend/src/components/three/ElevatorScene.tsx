'use client'
// src/components/three/ElevatorScene.tsx
import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ElevatorCar() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    const c = (t % 6) / 6
    let y = -1.2
    if (c < 0.20) y = -1.2
    else if (c < 0.45) y = THREE.MathUtils.lerp(-1.2, 1.2, (c - 0.20) / 0.25)
    else if (c < 0.65) y = 1.2
    else y = THREE.MathUtils.lerp(1.2, -1.2, (c - 0.65) / 0.25)
    ref.current.position.y = y
  })
  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.7, 0.4, 0.4]} />
      <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} emissive="#2563eb" emissiveIntensity={0.25} />
    </mesh>
  )
}

function ShaftLine({ x }: { x: number }) {
  const geo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(x, -1.6, 0),
    new THREE.Vector3(x, 1.6, 0),
  ])
  const mat = new THREE.LineBasicMaterial({ color: '#2563eb', transparent: true, opacity: 0.25 })
  return <primitive object={new THREE.Line(geo, mat)} />
}

function Orb() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((s) => {
    if (!ref.current) return
    const t = s.clock.getElapsedTime()
    ref.current.rotation.x = t * 0.3
    ref.current.rotation.y = t * 0.5
    ref.current.position.y = Math.sin(t * 0.8) * 0.3
  })
  return (
    <mesh ref={ref} position={[2.2, 0, -1]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#2563eb" metalness={0.8} roughness={0.2} transparent opacity={0.25} />
    </mesh>
  )
}

function Rings() {
  const g = useRef<THREE.Group>(null)
  useFrame((s) => { if (g.current) g.current.rotation.y = s.clock.getElapsedTime() * 0.2 })
  return (
    <group ref={g} position={[-2, 0, -1]}>
      <mesh>
        <torusGeometry args={[0.8, 0.012, 8, 64]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.4} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[0.55, 0.009, 8, 64]} />
        <meshStandardMaterial color="#2563eb" transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#3b82f6" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#2563eb" />
      <spotLight position={[0, 5, 0]} intensity={2} color="#60a5fa" angle={0.3} penumbra={1} />
      <ShaftLine x={0} />
      <ShaftLine x={0.42} />
      <ShaftLine x={-0.42} />
      <ElevatorCar />
      <Orb />
      <Rings />
    </>
  )
}

export function ElevatorScene() {
  return (
    <Canvas camera={{ position: [3, 0, 5], fov: 45 }} style={{ width: '100%', height: '100%' }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
      <Suspense fallback={null}><Scene /></Suspense>
    </Canvas>
  )
}
