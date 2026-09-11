import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ServiceNodeConfig {
  name: string;
  tag: string;
  icon: "csharp" | "dotnet" | "go" | "typescript" | "javascript" | "html" | "css" | "postgres" | "docker" | "kafka" | "gateway";
  color: number;
  colorHex: string;
  radius: number;
  speed: number;
  tilt: number;
}

interface ServiceNode {
  name: string;
  tag: string;
  icon: string;
  color: number;
  colorHex: string;
  mesh: THREE.Group;
  sprite: THREE.Sprite;
  basePos: THREE.Vector3;
  orbitRadius: number;
  orbitSpeed: number;
  orbitAngle: number;
  orbitTilt: number;
}

/**
 * Generates crisp 2D tech icon textures on-the-fly via HTML5 Canvas.
 * Guaranteed 0-latency, 100% offline-ready, no external CORS or asset loading failures.
 */
function createTechIconTexture(
  type: "csharp" | "dotnet" | "go" | "typescript" | "javascript" | "html" | "css" | "postgres" | "docker" | "kafka" | "gateway" | "hub",
  label: string,
  accentColor: string
): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");

  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Clear background
  ctx.clearRect(0, 0, 256, 256);

  // Outer Badge Container (Cybernetic rounded card)
  const x = 20;
  const y = 20;
  const w = 216;
  const h = 216;
  const radius = 32;

  ctx.save();
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, radius);
  
  // Card gradient fill
  const bgGrad = ctx.createLinearGradient(0, 20, 0, 236);
  bgGrad.addColorStop(0, "rgba(17, 24, 39, 0.95)");
  bgGrad.addColorStop(1, "rgba(10, 14, 20, 0.98)");
  ctx.fillStyle = bgGrad;
  ctx.fill();

  // Outer Neon Glow Border
  ctx.lineWidth = 6;
  ctx.strokeStyle = accentColor;
  ctx.shadowColor = accentColor;
  ctx.shadowBlur = 16;
  ctx.stroke();
  ctx.restore();

  // Subtle inner grid texture
  ctx.save();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
  ctx.lineWidth = 1;
  for (let i = 40; i < 220; i += 24) {
    ctx.beginPath();
    ctx.moveTo(x + 10, i);
    ctx.lineTo(x + w - 10, i);
    ctx.stroke();
  }
  ctx.restore();

  // Vector Icon Drawing by Technology Type
  ctx.save();
  ctx.translate(128, 98);
  ctx.shadowColor = accentColor;
  ctx.shadowBlur = 12;

  if (type === "csharp") {
    // C# Logo with modern branding & sharp symbol
    ctx.font = "bold 56px 'Space Grotesk', system-ui, sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("C#", -4, -10);

    ctx.font = "bold 15px 'JetBrains Mono', monospace";
    ctx.fillStyle = accentColor;
    ctx.fillText("MICROSOFT .NET", 0, 34);
  } else if (type === "dotnet") {
    // .NET Core Logo & Brand Typography
    ctx.font = "bold 46px 'Space Grotesk', system-ui, sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(".NET", 0, -10);

    ctx.font = "bold 16px 'JetBrains Mono', monospace";
    ctx.fillStyle = accentColor;
    ctx.fillText("CORE / API", 0, 32);
  } else if (type === "go") {
    // Golang dynamic speed logo
    ctx.font = "900 62px 'Space Grotesk', system-ui, sans-serif";
    ctx.fillStyle = accentColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("GO", 0, -8);

    // Speed lines behind Go
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-60, -22);
    ctx.lineTo(-44, -22);
    ctx.moveTo(-64, -8);
    ctx.lineTo(-44, -8);
    ctx.moveTo(-58, 6);
    ctx.lineTo(-44, 6);
    ctx.stroke();
  } else if (type === "typescript") {
    // TypeScript (TS badge)
    ctx.fillStyle = "#3178c6";
    ctx.beginPath();
    ctx.roundRect(-42, -42, 84, 84, 14);
    ctx.fill();

    ctx.font = "bold 50px 'Space Grotesk', system-ui, sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("TS", 0, -2);

    ctx.font = "bold 14px 'JetBrains Mono', monospace";
    ctx.fillStyle = accentColor;
    ctx.fillText("TYPESCRIPT", 0, 56);
  } else if (type === "javascript") {
    // JavaScript (JS badge)
    ctx.fillStyle = "#f7df1e";
    ctx.beginPath();
    ctx.roundRect(-42, -42, 84, 84, 14);
    ctx.fill();

    ctx.font = "900 50px 'Space Grotesk', system-ui, sans-serif";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("JS", 0, -2);

    ctx.font = "bold 14px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#f7df1e";
    ctx.fillText("JAVASCRIPT", 0, 56);
  } else if (type === "html") {
    // HTML5 Shield Emblem
    ctx.beginPath();
    ctx.moveTo(-36, -34);
    ctx.lineTo(36, -34);
    ctx.lineTo(30, 24);
    ctx.lineTo(0, 38);
    ctx.lineTo(-30, 24);
    ctx.closePath();
    ctx.fillStyle = accentColor;
    ctx.fill();

    // Inner < / > symbols
    ctx.font = "bold 32px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("</>", 0, -4);

    ctx.font = "bold 15px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("HTML5", 0, 54);
  } else if (type === "css") {
    // CSS3 Shield Emblem
    ctx.beginPath();
    ctx.moveTo(-36, -34);
    ctx.lineTo(36, -34);
    ctx.lineTo(30, 24);
    ctx.lineTo(0, 38);
    ctx.lineTo(-30, 24);
    ctx.closePath();
    ctx.fillStyle = accentColor;
    ctx.fill();

    ctx.font = "900 36px 'Space Grotesk', system-ui, sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("3", 0, -4);

    ctx.font = "bold 15px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("CSS3", 0, 54);
  } else if (type === "postgres") {
    // Database Storage Cylinders (PostgreSQL / Redis)
    const drawCylinder = (offsetY: number, fill: string) => {
      ctx.beginPath();
      ctx.ellipse(0, offsetY, 42, 14, 0, 0, Math.PI * 2);
      ctx.fillStyle = fill;
      ctx.fill();
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.beginPath();
      ctx.rect(-42, offsetY, 84, 18);
      ctx.fillStyle = fill;
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(-42, offsetY);
      ctx.lineTo(-42, offsetY + 18);
      ctx.moveTo(42, offsetY);
      ctx.lineTo(42, offsetY + 18);
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(0, offsetY + 18, 42, 14, 0, 0, Math.PI);
      ctx.fill();
      ctx.stroke();
    };

    drawCylinder(-26, "rgba(51, 103, 145, 0.85)");
    drawCylinder(4, "rgba(30, 64, 110, 0.95)");

    // Little LED status dots
    ctx.fillStyle = "#3ddc84";
    ctx.beginPath();
    ctx.arc(24, -12, 3.5, 0, Math.PI * 2);
    ctx.arc(24, 18, 3.5, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === "docker") {
    // Docker Container Stack
    ctx.fillStyle = accentColor;
    const boxSize = 13;
    const gap = 3;
    const startX = -32;
    const startY = -28;

    // 3 rows of container blocks
    const layout = [
      [0, 1, 1, 0],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];

    layout.forEach((row, rIdx) => {
      row.forEach((cell, cIdx) => {
        if (cell) {
          ctx.beginPath();
          ctx.roundRect(
            startX + cIdx * (boxSize + gap),
            startY + rIdx * (boxSize + gap),
            boxSize,
            boxSize,
            2
          );
          ctx.fill();
        }
      });
    });

    // Hull curve under containers
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-46, 26);
    ctx.quadraticCurveTo(-10, 42, 34, 26);
    ctx.lineTo(44, 20);
    ctx.stroke();
  } else if (type === "kafka") {
    // Kafka / Event Stream Message Bus
    ctx.fillStyle = accentColor;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 4;

    // 3 Nodes
    const p1 = { x: -36, y: 16 };
    const p2 = { x: 36, y: 16 };
    const p3 = { x: 0, y: -26 };

    // Connectors
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();

    // Node circles
    [p1, p2, p3].forEach((p, i) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 14, 0, Math.PI * 2);
      ctx.fillStyle = i === 2 ? accentColor : "#1e293b";
      ctx.fill();
      ctx.strokeStyle = accentColor;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
    });
  } else if (type === "gateway") {
    // API Gateway Router
    ctx.fillStyle = accentColor;
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 4;

    // Central hub
    ctx.beginPath();
    ctx.roundRect(-24, -24, 48, 48, 8);
    ctx.fillStyle = "rgba(45, 125, 255, 0.25)";
    ctx.fill();
    ctx.stroke();

    // Arrow vectors
    ctx.font = "bold 18px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("API", 0, 0);

    // Routing arrows
    ctx.strokeStyle = "#3ddc84";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-46, 0);
    ctx.lineTo(-28, 0);
    ctx.moveTo(28, 0);
    ctx.lineTo(46, 0);
    ctx.stroke();
  } else {
    // Hub Core
    ctx.beginPath();
    ctx.arc(0, 0, 32, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(45, 125, 255, 0.3)";
    ctx.fill();
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.font = "bold 20px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("HUB", 0, 0);
  }
  ctx.restore();

  // Label text under icon
  ctx.save();
  ctx.font = "bold 22px 'JetBrains Mono', monospace";
  ctx.fillStyle = "#e8ebf0";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "rgba(0,0,0,0.8)";
  ctx.shadowBlur = 4;
  ctx.fillText(label, 128, 190);
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Builds a futuristic 3D cybernetic/robotic hand that holds and cradles
 * the glowing distributed architecture core from underneath.
 */
function createCyberHand(materialsToDispose: THREE.Material[]) {
  const handGroup = new THREE.Group();
  handGroup.position.set(0, -2.0, 0);

  // High-tech cyber materials
  const metalMat = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    roughness: 0.35,
    metalness: 0.85,
  });
  materialsToDispose.push(metalMat);

  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x8b5cf6,
    wireframe: true,
    transparent: true,
    opacity: 0.45,
  });
  materialsToDispose.push(wireMat);

  const neonJointMat = new THREE.MeshStandardMaterial({
    color: 0xa78bfa,
    emissive: 0x7c3aed,
    emissiveIntensity: 1.5,
    roughness: 0.1,
    metalness: 0.9,
  });
  materialsToDispose.push(neonJointMat);

  const glowTipMat = new THREE.MeshBasicMaterial({
    color: 0x06b6d4,
    transparent: true,
    opacity: 0.9,
  });
  materialsToDispose.push(glowTipMat);

  // 1. Forearm & Wrist base
  const armGeo = new THREE.CylinderGeometry(0.55, 0.75, 1.6, 16);
  const armMesh = new THREE.Mesh(armGeo, metalMat);
  armMesh.position.set(0, -1.3, -0.2);
  armMesh.rotation.x = -0.15;
  handGroup.add(armMesh);

  const armWire = new THREE.Mesh(armGeo, wireMat);
  armMesh.add(armWire);

  // Glowing Wrist Ring
  const wristRingGeo = new THREE.TorusGeometry(0.68, 0.04, 16, 32);
  const wristRing = new THREE.Mesh(wristRingGeo, neonJointMat);
  wristRing.position.set(0, -0.55, -0.1);
  wristRing.rotation.x = Math.PI / 2;
  handGroup.add(wristRing);

  // 2. Palm Base
  const palmGeo = new THREE.BoxGeometry(1.5, 0.35, 1.3);
  const palmMesh = new THREE.Mesh(palmGeo, metalMat);
  palmMesh.position.set(0, 0, 0);
  handGroup.add(palmMesh);

  const palmWire = new THREE.Mesh(palmGeo, wireMat);
  palmMesh.add(palmWire);

  // Palm Center Core / Hologram emitter
  const emitterGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.08, 24);
  const emitterMesh = new THREE.Mesh(emitterGeo, neonJointMat);
  emitterMesh.position.set(0, 0.19, 0.05);
  palmMesh.add(emitterMesh);

  const emitterRingGeo = new THREE.TorusGeometry(0.38, 0.02, 16, 32);
  const emitterRing = new THREE.Mesh(emitterRingGeo, glowTipMat);
  emitterRing.position.set(0, 0.2, 0.05);
  emitterRing.rotation.x = Math.PI / 2;
  palmMesh.add(emitterRing);

  // 3. Articulated Fingers (Thumb, Index, Middle, Ring, Pinky)
  const fingerConfigs = [
    { name: "thumb", x: -0.85, z: 0.35, rotY: -0.5, rotZ: 0.45, length: 0.65, segs: 2 },
    { name: "index", x: -0.55, z: -0.65, rotY: -0.12, rotZ: 0.12, length: 0.8, segs: 3 },
    { name: "middle", x: -0.12, z: -0.72, rotY: 0, rotZ: 0.02, length: 0.9, segs: 3 },
    { name: "ring", x: 0.35, z: -0.68, rotY: 0.1, rotZ: -0.1, length: 0.82, segs: 3 },
    { name: "pinky", x: 0.72, z: -0.58, rotY: 0.22, rotZ: -0.28, length: 0.65, segs: 3 },
  ];

  const fingerMeshes: { group: THREE.Group; tip: THREE.Mesh }[] = [];

  fingerConfigs.forEach((cfg) => {
    const fingerBase = new THREE.Group();
    fingerBase.position.set(cfg.x, 0.1, cfg.z);
    fingerBase.rotation.y = cfg.rotY;
    fingerBase.rotation.z = cfg.rotZ;

    // Knuckle joint
    const knuckleGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const knuckle = new THREE.Mesh(knuckleGeo, neonJointMat);
    fingerBase.add(knuckle);

    let currentParent: THREE.Group = fingerBase;
    let tipMesh: THREE.Mesh | null = null;

    for (let s = 0; s < cfg.segs; s++) {
      const segGroup = new THREE.Group();
      // Curve upwards to cup and hold the floating core
      segGroup.rotation.x = s === 0 ? 0.35 : 0.42;
      currentParent.add(segGroup);

      const segLength = cfg.length / cfg.segs;
      const segGeo = new THREE.BoxGeometry(0.15, segLength, 0.15);
      const segMesh = new THREE.Mesh(segGeo, metalMat);
      segMesh.position.set(0, segLength / 2, 0);
      segGroup.add(segMesh);

      const segWire = new THREE.Mesh(segGeo, wireMat);
      segMesh.add(segWire);

      if (s < cfg.segs - 1) {
        const jointGeo = new THREE.SphereGeometry(0.09, 10, 10);
        const jointMesh = new THREE.Mesh(jointGeo, neonJointMat);
        jointMesh.position.set(0, segLength, 0);
        segGroup.add(jointMesh);

        currentParent = segGroup;
        currentParent.position.set(0, segLength, 0);
      } else {
        const tipGeo = new THREE.SphereGeometry(0.08, 10, 10);
        tipMesh = new THREE.Mesh(tipGeo, glowTipMat);
        tipMesh.position.set(0, segLength, 0);
        segGroup.add(tipMesh);
      }
    }

    if (tipMesh) {
      fingerMeshes.push({ group: fingerBase, tip: tipMesh });
    }

    palmMesh.add(fingerBase);
  });

  return { handGroup, fingerMeshes, emitterMesh };
}

export function ThreeHeroScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeNode, setActiveNode] = useState<{ name: string; tag: string; icon: string; color: string }>({
    name: "C#",
    tag: "OOP & Enterprise Backend",
    icon: "csharp",
    color: "#a855f7",
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090d16, 0.04);

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, width < 420 ? 13.2 : width < 640 ? 12.0 : 10.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Track textures and materials for comprehensive disposal
    const texturesToDispose: THREE.Texture[] = [];
    const materialsToDispose: THREE.Material[] = [];

    // --- Multi-spectrum Chromatic Lighting ---
    const ambientLight = new THREE.AmbientLight(0x2d3748, 1.8);
    scene.add(ambientLight);

    const violetPoint = new THREE.PointLight(0x8b5cf6, 6.5, 26);
    violetPoint.position.set(4, 5, 6);
    scene.add(violetPoint);

    const cyanPoint = new THREE.PointLight(0x06b6d4, 4.5, 22);
    cyanPoint.position.set(-5, -4, 4);
    scene.add(cyanPoint);

    const amberPoint = new THREE.PointLight(0xf59e0b, 3.5, 18);
    amberPoint.position.set(0, 6, -3);
    scene.add(amberPoint);

    const coralPoint = new THREE.PointLight(0xf97316, 2.5, 15);
    coralPoint.position.set(0, -5, 2);
    scene.add(coralPoint);

    // --- Core Master Group for smooth mouse rotation ---
    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);

    // --- 1. Central Core Node (Microservices Hub) ---
    const coreGroup = new THREE.Group();
    sceneGroup.add(coreGroup);

    // Central wireframe icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      wireframe: true,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);
    materialsToDispose.push(coreMat);

    // Central inner solid glowing sphere
    const innerCoreGeo = new THREE.SphereGeometry(0.65, 32, 32);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0xa78bfa,
      emissive: 0x6d28d9,
      emissiveIntensity: 1.3,
      roughness: 0.1,
      metalness: 0.9,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreGroup.add(innerCoreMesh);
    materialsToDispose.push(innerCoreMat);

    // Central pulsing energy ring (Cyan)
    const ringGeo = new THREE.TorusGeometry(1.6, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.75,
    });
    const energyRing = new THREE.Mesh(ringGeo, ringMat);
    energyRing.rotation.x = Math.PI / 2;
    coreGroup.add(energyRing);
    materialsToDispose.push(ringMat);

    // Secondary energy ring (Amber)
    const ringGeo2 = new THREE.TorusGeometry(1.9, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.6,
    });
    const energyRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    energyRing2.rotation.x = Math.PI / 3;
    energyRing2.rotation.y = Math.PI / 6;
    coreGroup.add(energyRing2);
    materialsToDispose.push(ringMat2);

    // --- 2. Futuristic Cybernetic Hand cradling the Core from below ---
    const { handGroup, fingerMeshes, emitterMesh } = createCyberHand(materialsToDispose);
    sceneGroup.add(handGroup);

    // --- 3. Technology & Skill Satellites orbiting in 3D ---
    const serviceConfigs: ServiceNodeConfig[] = [
      { name: "C#", tag: "OOP & Enterprise Backend", icon: "csharp", color: 0xa855f7, colorHex: "#a855f7", radius: 3.2, speed: 0.38, tilt: 0.2 },
      { name: ".NET Core", tag: "Web APIs & Microservices", icon: "dotnet", color: 0x6366f1, colorHex: "#6366f1", radius: 3.6, speed: -0.32, tilt: -0.3 },
      { name: "Go", tag: "High Concurrency & Workers", icon: "go", color: 0x00add8, colorHex: "#00add8", radius: 4.1, speed: 0.28, tilt: 0.45 },
      { name: "TypeScript", tag: "Strict Types & Architecture", icon: "typescript", color: 0x3178c6, colorHex: "#3178c6", radius: 3.4, speed: -0.4, tilt: -0.38 },
      { name: "JavaScript", tag: "Modern ESNext & Async", icon: "javascript", color: 0xf7df1e, colorHex: "#f7df1e", radius: 4.5, speed: 0.24, tilt: 0.35 },
      { name: "HTML5", tag: "Semantic Markup & Web", icon: "html", color: 0xe34f26, colorHex: "#e34f26", radius: 3.8, speed: -0.28, tilt: 0.55 },
      { name: "CSS3", tag: "Responsive UI & Keyframes", icon: "css", color: 0x1572b6, colorHex: "#1572b6", radius: 4.7, speed: 0.22, tilt: -0.45 },
      { name: "PostgreSQL", tag: "Relational Schema & Redis", icon: "postgres", color: 0x60a5fa, colorHex: "#60a5fa", radius: 3.5, speed: -0.42, tilt: 0.65 },
      { name: "Docker", tag: "Containers & CI/CD", icon: "docker", color: 0x38bdf8, colorHex: "#38bdf8", radius: 4.3, speed: 0.32, tilt: -0.55 },
      { name: "Kafka", tag: "Event Bus & MQ Streaming", icon: "kafka", color: 0xf59e0b, colorHex: "#f59e0b", radius: 4.9, speed: -0.22, tilt: 0.25 },
      { name: "API Gateway", tag: "REST & gRPC Routing", icon: "gateway", color: 0x2d7dff, colorHex: "#2d7dff", radius: 3.9, speed: 0.36, tilt: -0.25 },
    ];

    const serviceNodes: ServiceNode[] = [];
    const connectionLines: { line: THREE.Line; startNode: THREE.Group; endPos: THREE.Vector3 }[] = [];

    serviceConfigs.forEach((cfg, idx) => {
      const nodeGroup = new THREE.Group();

      // 3D Billboard Tech Icon Badge (Zero latency canvas texture)
      const iconTexture = createTechIconTexture(cfg.icon, cfg.name.split(" ")[0], cfg.colorHex);
      texturesToDispose.push(iconTexture);

      const spriteMat = new THREE.SpriteMaterial({
        map: iconTexture,
        transparent: true,
        depthWrite: false,
      });
      materialsToDispose.push(spriteMat);

      const iconSprite = new THREE.Sprite(spriteMat);
      iconSprite.scale.set(1.15, 1.15, 1);
      iconSprite.position.set(0, 0, 0);
      nodeGroup.add(iconSprite);

      const angle = (idx / serviceConfigs.length) * Math.PI * 2;
      const x = Math.cos(angle) * cfg.radius;
      const y = Math.sin(angle * 2) * cfg.tilt;
      const z = Math.sin(angle) * cfg.radius;

      nodeGroup.position.set(x, y, z);
      sceneGroup.add(nodeGroup);

      // Connection beam to center hub
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(x, y, z),
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.35,
      });
      const connLine = new THREE.Line(lineGeo, lineMat);
      sceneGroup.add(connLine);
      materialsToDispose.push(lineMat);

      serviceNodes.push({
        name: cfg.name,
        tag: cfg.tag,
        icon: cfg.icon,
        color: cfg.color,
        colorHex: cfg.colorHex,
        mesh: nodeGroup,
        sprite: iconSprite,
        basePos: new THREE.Vector3(x, y, z),
        orbitRadius: cfg.radius,
        orbitSpeed: cfg.speed,
        orbitAngle: angle,
        orbitTilt: cfg.tilt,
      });

      connectionLines.push({
        line: connLine,
        startNode: nodeGroup,
        endPos: new THREE.Vector3(0, 0, 0),
      });
    });

    // --- 3. Flowing Data Packet Particles Along Connections ---
    const packetCount = 30;
    const packetGeo = new THREE.SphereGeometry(0.045, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x3ddc84 });
    const packetGroup = new THREE.Group();
    sceneGroup.add(packetGroup);

    const packets: { mesh: THREE.Mesh; nodeIdx: number; progress: number; speed: number; direction: number }[] = [];

    for (let i = 0; i < packetCount; i++) {
      const pMat = packetMat.clone();
      const nodeIdx = i % serviceNodes.length;
      pMat.color.setHex(serviceNodes[nodeIdx].color);
      materialsToDispose.push(pMat);

      const mesh = new THREE.Mesh(packetGeo, pMat);
      packetGroup.add(mesh);
      packets.push({
        mesh,
        nodeIdx,
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.007,
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }

    // --- 4. Ambient Particle Network / Chromatic Starfield ---
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const paletteColors = [
      new THREE.Color(0x8b5cf6), // violet
      new THREE.Color(0x06b6d4), // cyan
      new THREE.Color(0x10b981), // emerald
      new THREE.Color(0xf59e0b), // amber
      new THREE.Color(0x38bdf8), // sky
      new THREE.Color(0xf43f5e), // rose
    ];

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 4.5 + Math.random() * 5.5;

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);

      const col = paletteColors[i % paletteColors.length];
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    sceneGroup.add(particlePoints);
    materialsToDispose.push(particleMat);

    // --- Mouse & Touch Interaction ---
    let targetRotationX = 0.2;
    let targetRotationY = 0.3;
    let currentRotationX = 0.2;
    let currentRotationY = 0.3;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      previousPointerX = clientX;
      previousPointerY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      if (isDragging) {
        const deltaX = clientX - previousPointerX;
        const deltaY = clientY - previousPointerY;
        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;
        previousPointerX = clientX;
        previousPointerY = clientY;
      } else {
        const rect = container.getBoundingClientRect();
        const normX = ((clientX - rect.left) / rect.width) * 2 - 1;
        const normY = -(((clientY - rect.top) / rect.height) * 2 - 1);
        targetRotationY = normX * 0.45;
        targetRotationX = -normY * 0.35 + 0.15;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);

    container.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerUp);

    // --- Resize Handling ---
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;

      camera.aspect = newWidth / newHeight;
      if (newWidth < 420) {
        camera.position.z = 13.2;
      } else if (newWidth < 640) {
        camera.position.z = 12.0;
      } else if (newWidth < 1024) {
        camera.position.z = 11.2;
      } else {
        camera.position.z = 10.8;
      }
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // --- Animation Loop with Viewport Visibility Caching ---
    let animationFrameId: number;
    const clock = new THREE.Clock();
    let isVisible = true;

    const intersectionObserver = new IntersectionObserver((entries) => {
      isVisible = entries[0]?.isIntersecting ?? true;
    });
    intersectionObserver.observe(container);

    let nearestNodeTimer = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera/scene rotation interpolation
      currentRotationX += (targetRotationX - currentRotationX) * 0.06;
      currentRotationY += (targetRotationY - currentRotationY) * 0.06;

      sceneGroup.rotation.x = currentRotationX;
      sceneGroup.rotation.y = currentRotationY + elapsedTime * 0.06;

      // Core rotation
      coreMesh.rotation.x = elapsedTime * 0.25;
      coreMesh.rotation.y = elapsedTime * 0.35;
      innerCoreMesh.rotation.y = -elapsedTime * 0.4;
      energyRing.rotation.z = elapsedTime * 0.5;
      energyRing2.rotation.z = -elapsedTime * 0.4;

      // Pulse core scale slightly
      const pulse = 1 + Math.sin(elapsedTime * 3) * 0.04;
      innerCoreMesh.scale.set(pulse, pulse, pulse);

      // Cybernetic Hand subtle breathing hover & finger articulation
      handGroup.position.y = -2.0 + Math.sin(elapsedTime * 1.5) * 0.05;
      handGroup.rotation.y = Math.sin(elapsedTime * 0.7) * 0.04;
      emitterMesh.rotation.y = -elapsedTime * 0.5;
      fingerMeshes.forEach((f, idx) => {
        const flex = Math.sin(elapsedTime * 2.2 + idx) * 0.03;
        f.group.rotation.x = 0.15 + flex;
      });

      // Update Satellites
      let closestDist = Infinity;
      let closestNodeObj = {
        name: serviceNodes[0].name,
        tag: serviceNodes[0].tag,
        icon: serviceNodes[0].icon,
        color: serviceNodes[0].colorHex,
      };

      serviceNodes.forEach((node, idx) => {
        const angle = node.orbitAngle + elapsedTime * node.orbitSpeed * 0.35;
        const x = Math.cos(angle) * node.orbitRadius;
        const y = Math.sin(angle * 1.5) * (node.orbitTilt * 1.6) + Math.cos(elapsedTime * 0.8 + idx) * 0.15;
        const z = Math.sin(angle) * node.orbitRadius;

        node.mesh.position.set(x, y, z);
        node.mesh.rotation.x += delta * 0.4;
        node.mesh.rotation.y += delta * 0.5;

        // Subtle floating pulse on the sprite icon
        const spriteBounce = Math.sin(elapsedTime * 2.5 + idx) * 0.06;
        node.sprite.position.y = spriteBounce;

        // Update line geometry
        const line = connectionLines[idx].line;
        const posAttr = line.geometry.attributes.position as THREE.BufferAttribute;
        posAttr.setXYZ(1, x, y, z);
        posAttr.needsUpdate = true;

        // Find which node is visually closest to front (highest z in world)
        const worldPos = new THREE.Vector3();
        node.mesh.getWorldPosition(worldPos);
        const distToCam = worldPos.distanceTo(camera.position);
        if (distToCam < closestDist) {
          closestDist = distToCam;
          closestNodeObj = {
            name: node.name,
            tag: node.tag,
            icon: node.icon,
            color: node.colorHex,
          };
        }
      });

      // Periodic state update for the HUD tag
      nearestNodeTimer += delta;
      if (nearestNodeTimer > 0.3) {
        nearestNodeTimer = 0;
        setActiveNode(closestNodeObj);
      }

      // Update Data Packets along connections
      packets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
        }

        const targetNode = serviceNodes[p.nodeIdx].mesh.position;
        const t = p.direction === 1 ? p.progress : 1 - p.progress;

        // Linear interpolation from core (0,0,0) to node
        p.mesh.position.lerpVectors(new THREE.Vector3(0, 0, 0), targetNode, t);
        const packetScale = 0.8 + Math.sin(p.progress * Math.PI) * 0.5;
        p.mesh.scale.setScalar(packetScale);
      });

      // Background particle slow drift
      particlePoints.rotation.y = -elapsedTime * 0.02;
      particlePoints.rotation.x = Math.sin(elapsedTime * 0.03) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      container.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);

      container.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);

      // Clean up geometries and materials
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Line || obj instanceof THREE.Points || obj instanceof THREE.Sprite) {
          obj.geometry?.dispose();
        }
      });

      texturesToDispose.forEach((tex) => tex.dispose());
      materialsToDispose.forEach((mat) => mat.dispose());

      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className="relative flex h-[310px] xs:h-[360px] sm:h-[420px] md:h-[480px] lg:h-[540px] xl:h-[620px] 2xl:h-[680px] w-full items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Canvas Mount Point with touch-pan-y for smooth mobile scroll */}
      <div
        ref={containerRef}
        className="h-full w-full cursor-grab active:cursor-grabbing touch-pan-y"
        title="Drag to rotate 3D architecture"
        aria-label="Interactive 3D distributed architecture visualization"
      />

      {/* Topology HUD overlay badge */}
      <div
        className="pointer-events-none absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs backdrop-blur-md transition-all sm:bottom-4 sm:left-5 sm:right-5 sm:px-3 sm:py-2"
        style={{
          backgroundColor: "rgba(17, 23, 38, 0.92)",
          border: "1px solid var(--color-border-bright)",
          fontFamily: "var(--font-mono)",
        }}
      >
        <div className="flex items-center gap-2 overflow-hidden truncate">
          <span
            className="status-dot inline-block h-2 w-2 shrink-0 rounded-full sm:h-2.5 sm:w-2.5"
            style={{ backgroundColor: activeNode.color, color: activeNode.color }}
          />
          <div className="flex items-center gap-1.5 overflow-hidden truncate">
            <span className="text-[10px] sm:text-[11px] text-[var(--color-text-tertiary)] uppercase tracking-wider">
              NODE:
            </span>
            <span
              className="truncate text-[11px] font-semibold sm:text-xs"
              style={{ color: activeNode.color }}
            >
              {activeNode.name}
            </span>
            <span className="hidden text-[10px] text-[var(--color-text-secondary)] sm:inline">
              · {activeNode.tag}
            </span>
          </div>
        </div>

        <div className="hidden shrink-0 items-center gap-1.5 text-[10px] text-[var(--color-text-tertiary)] sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald)]" />
          <span>{isHovered ? "Drag to Orbit Topology" : "Interactive 3D View"}</span>
        </div>
      </div>
    </div>
  );
}
