import React from 'react'
import './About.css';
import ME from '../../assets/img-1.jpg';
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
                <h4>Mobile Software QA<br/></h4><h5><span>Meta computer services</span></h5>
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
              A Software Engineering graduate from FIAP and a participant in the Apple Developer Academy, where, with a keen interest in meeting societal needs and challenges, I develop several iOS apps, leveraging my knowledge in practice and learning from documentation and online materials to bring practical, profitable technologies and products to life for end users.
<br/>
              I currently work as a Mobile Software QA, combining critical thinking and a focus on product quality to transform technology into solutions that matter.
            </p>

            <a href='#contact' className='btn btn-primary'>Get in touch!</a>
        </div>
      </div>
    </section>
  )
}

export default About