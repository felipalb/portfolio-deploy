import React from 'react'
import './About.css';
import ME from '../../assets/img-1.jpeg';
import { FaAward } from 'react-icons/fa';
const About = () => {
  return (
    <section id="about">
      <h2>About me</h2>
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
              <h3>Experience</h3>
                <div className='about__content'>
                <h4>iOS Developer<br/></h4><h5><span>Apple Developer Academy</span></h5>
                </div>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h3>Education</h3>
              <div className='about__content'>
              <h4>Eng. de Software<br/></h4><h5><span>Fiap - São Paulo</span></h5>
              <h4>Apple Developer Academy<br/></h4><h5><span>Instituto de pesquisas Eldorado</span></h5>
              </div>
            </article>
          </div>
            <p>
              I am an undergraduate student in Software Engineering at FIAP and a participant in the Apple Developer Academy, where, with a strong interest in meeting the needs and challenges of society, I develop some applications for Apple platforms, applying my knowledge in practice and learning from documentation and online materials to bring to life practical and profitable technologies and products for end users.
            </p>

            <a href='#contact' className='btn btn-primary'>Get in touch!</a>
        </div>
      </div>
    </section>
  )
}

export default About