import React from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from "./components/Card";
import data from './data'
import star from './img/Star.png';


export default function App() {
  const cards = data.map(item => {
    return (
        <Card 
            key = {item.id}
            {...item}
            icon = {star}
        />
    )
  }
)
  return(
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
  
}