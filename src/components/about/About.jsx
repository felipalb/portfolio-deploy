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
              <h3>Experiência</h3><br/>
                <div className='about__content'>
                <h4>iOS Developer<br/></h4><h5><span>Apple Developer Academy</span></h5>
                <h4>1A Analista de dados<br/></h4><h5><span>Pieralisi Circular Thinking</span></h5>
                </div>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h3>Educação</h3>
              <div className='about__content'>
              <h4>Eng. de Software<br/></h4><h5><span>Fiap - São Paulo</span></h5>
              <h4>Metodologia CBL de trabalho<br/></h4><h5><span>by Apple</span></h5>
              </div>
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