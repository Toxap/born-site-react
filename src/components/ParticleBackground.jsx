import { useMemo } from 'react'
import './ParticleBackground.css'

const symbols = ['ПИДОР', '✵', '✵', '✵', '✵️', '✵', '✵', '✵', 'Х', 'У', 'Й']
const colors = ['#F59C47', '#F56047', '#F5CB47']

export default function ParticleBackground({ count = 30 }) {

  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        size: Math.random() * 1.2 + 0.8,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
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
            fontSize: `${p.size}rem`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            color: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  )
}
