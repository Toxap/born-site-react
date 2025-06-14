import CardSwap, { Card } from './CardSwap.jsx'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="about-title">О нашей школе</h2>
      <CardSwap width={320} height={200} cardDistance={50} verticalDistance={60}>
        <Card customClass="about-card about-card-1" />
        <Card customClass="about-card about-card-2" />
        <Card customClass="about-card about-card-3" />
      </CardSwap>
    </section>
  )
}
