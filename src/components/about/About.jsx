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
              <h4>iOS Developer - Apple Developer Academy 25/26</h4>
              <h4>1Y como analista de dados</h4>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h3>Certificados</h3>
              <h5>Cursando Eng. de Software - <span>Fiap - São Paulo</span></h5>
              <h5>Curso Desenvolvimento Web -<span>Rocketseat</span></h5>
              <h5>Curso de Análise de dados com ChatGPT -<span>Alura</span></h5>
              <h5>Curso de pensamento computacional -<span>TIC em trilhas</span></h5>

            </article>
          </div>
            <p>
            Com uma grande curiosidade pelo meio de tecnologia, iniciei meus estudos em 2020, desde então peguei prática e conhecimento sobre diversas áreas de atuação, obtendo experiências na área de tratamento de dados, desenvolvimento front-end e lógica de programação para desenvolvimento back-end.
            </p>

            <a href='#contact' className='btn btn-primary'>Entre em contato!</a>
        </div>
      </div>
    </section>
  )
}

export default About