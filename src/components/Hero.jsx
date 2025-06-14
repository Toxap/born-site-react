import './Hero.css'
import DecryptedText from './DecryptedText.jsx'

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
      <h1 className="hero-title">
        <DecryptedText text="COURSE" />
      </h1>
      <h1 className="hero-title-2">
        <DecryptedText text="BORN" />
      </h1>
    </section>
  )
}
