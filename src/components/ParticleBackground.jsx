import { useMemo } from 'react'
import './ParticleBackground.css'

export default function ParticleBackground({ count = 30 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 20,
      })),
    [count]
  )

  return (
    <div className="particle-bg">
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
