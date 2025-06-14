import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src="http://cdn.bornsite.ru/static/backAI.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <h1 className="hero-title">COURSEBORN</h1>
    </section>
  )
}
