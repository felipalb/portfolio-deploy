import React from 'react'
import './About.css';
import ME from '../../assets/img-1.jpg';
import { FaAward } from 'react-icons/fa';
const About = () => {
  return (
    <section id="about">
      <h2>SOBRE MIM</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="about_image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h3>Experiência</h3>
              <h5>iOS Developer</h5>
              <h5>Apple Developer Academy</h5>
              <h5>1Y como analista de dados</h5>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h3>Certificados</h3>
              <h5><span>Cursando</span> Eng. de Software<br/><span>Fiap - São Paulo</span></h5>
              <h5>Desenvolvimento Web<br/><span>by Rocketseat</span></h5>
              <h5>Análise de dados com IA<br/><span>by Alura</span></h5>
              <h5>pensamento computacional<br/><span>by TIC em trilhas</span></h5>

            </article>
          </div>
            <p>
            Experiência na área de tratamento de dados, desenvolvimento front-end e lógica de programação para desenvolvimento back-end.
            </p>

            <a href='#contact' className='btn btn-primary'>Entre em contato!</a>
        </div>
      </div>
    </section>
  )
}

export default About