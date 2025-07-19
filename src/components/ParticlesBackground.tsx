"use client";

import { useCallback, useEffect, useState } from "react";
import { Engine } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";
import { Particles, initParticlesEngine } from "@tsparticles/react";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 60, density: { enable: true } },
          color: { value: ["#fcb69f", "#a6c1ee", "#ffecd2", "#ff7e5f"] },
          links: { enable: true, color: "#ffecd2", opacity: 0.2, distance: 120 },
          move: { enable: true, speed: 1.2, outModes: "out" },
          opacity: { value: 0.5 },
          size: { value: { min: 2, max: 5 } },
          shape: { type: "circle" },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
} 