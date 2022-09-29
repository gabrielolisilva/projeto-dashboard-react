import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <div></div>
          <span>A melhor academia da cidade</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Busque </span>
            <span>seu</span>
          </div>
          <div>
            <span>corpo ideal</span>
          </div>
          <div>
            <span>
              Aqui vamos te ajudar a conquistar seu físico ideal, te tornando
              uma pessoa mais saudável e ativa.
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+140</span>
            <span>Coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>Membros</span>
          </div>
          <div>
            <span>+50</span>
            <span>Programas</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Começar agora</button>
          <button className="btn">Saiba mais</button>
        </div>
      </div>
      <div className="right-h">Right Side</div>
    </div>
  );
};

export default Hero;
