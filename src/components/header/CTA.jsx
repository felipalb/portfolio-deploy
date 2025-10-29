import React from 'react';
import CV from '../../assets/cv-felipe-alberto-5.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Resume</a>
        <a href='#contact' className='btn btn-primary'>let&apos;s talk!</a>
    </div>
  )
}

export default CTA;