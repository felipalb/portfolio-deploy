import React from 'react';
import './Portfolio.css';
import IMG3 from '../../assets/portfolio3.jpeg';
import IMG4 from '../../assets/portfolio4.jpeg';
import IMG5 from '../../assets/portfolio5.jpeg';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus projetos recentes</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Softtek finalist NEXT 2024 <br/>Sistema de gestão de capacidade</h3>
          <div className='portfolio__item-cta'> 
            <a href='https://github.com/GuiDecker/Softtek' className='btn' target='blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Marketplace seleção de Azeites</h3>
          <div className='portfolio__item-cta'> 
            <a href='https://github.com/felipalb/clubedoazeitepieralisi' className='btn' target='blank'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Sistema de Qualidade do ar</h3>
          <div className='portfolio__item-cta'> 
            <a href='https://github.com/Time2PI/PI-SistemaQualidadeDoAr/tree/main' className='btn' target='blank'>GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio