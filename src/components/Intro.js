import { introText } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Intro = () => {
  return (
    <section id="intro">
            <div class="intro_inner">
                <h2 class="intro_title">
                    port developer
                </h2>
               <div class="intro_lines" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
               </div>
               <div class="intro_text">
                    <div class="text">
                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </div>
                    <div class="img">
                        <Image
                          src={introText.img}
                          alt='about'
                          width={300}
                          height={300}
                        />
                    </div>
               </div> 
               <div class="intro_lines bottom" aria-hidden="true">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
           </div>
            </div>
        </section>
  )
}

export default Intro