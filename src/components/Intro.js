import { introText } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Intro = () => {
  return (
    <section id="intro">
            <div className="intro_inner">
                <h2 className="intro_title">
                    port developer
                </h2>
               <div className="intro_lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
               </div>
               <div className="intro_text">
                    <div className="text">
                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </div>
                    <div className="img">
                        <Image
                          src={introText.img}
                          alt='about'
                          width={300}
                          height={300}
                          style={{ width: '100', height: 'auto'}}
                        />
                    </div>
               </div> 
               <div className="intro_lines bottom" aria-hidden="true">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
           </div>
            </div>
        </section>
  )
}

export default Intro