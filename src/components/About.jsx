import CardSwap, { Card } from './CardSwap.jsx'
import ParticleBackground from './ParticleBackground.jsx'
import ScrollFloat from './ScrollFloat.jsx'
import ScrollReveal from './ScrollReveal.jsx'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <ParticleBackground />
      <ScrollFloat containerClassName="about-title">
        О наших курсах
      </ScrollFloat>
      <ScrollReveal containerClassName="about-description">
        Наша школа программирования предоставляет современное образование,
        основанное на практике и работе с актуальными технологиями. Мы создаём
        пространство, где каждый может раскрыть свой потенциал и получить
        поддержку опытных наставников.
      </ScrollReveal>
      <CardSwap width={700} height={400} cardDistance={50} verticalDistance={60}>
        <Card customClass="about-card about-card-1" />
        <Card customClass="about-card about-card-2" />
        <Card customClass="about-card about-card-3" />
      </CardSwap>
    </section>
  )
}
