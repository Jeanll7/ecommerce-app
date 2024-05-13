import React from 'react';
import WomanImg from '../img/woman_hero.png'

const Hero = () => {
  return (
    <section className='bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        {/* texto */}
        <div className='flex'>
          <div>
            <div>Nova tendência</div>
          </div>
        </div>
        {/* image */}
        <div className='hidden lg:block'>
          <img src={WomanImg} alt='' />
        </div>
      </div>

    </section>
  )
};

export default Hero;
