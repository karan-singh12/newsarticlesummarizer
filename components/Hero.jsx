import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex  items-center justify-start flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} 
        alt='sumz_logo' 
        className='w-16 object-contain' />
        <h1 className=' absolute mb-10 pt-5  ml-20 head_text'>Summz</h1>
        <button
          type='button'
          onClick={() =>
            window.open("https://www.linkedin.com/in/karan-singh-9b3271237/")
          }
          className='black_btn'
        >
          👤
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;