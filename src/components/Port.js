import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import { portText } from '@/constants'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Port = () => {
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionRef.current;

        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                end: () => "+=" +horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            }
        });

        return () => {
            scrollTween.kill();
        };
    }, []);

  return (
    <section id="port" ref={horizontalRef}>
        <div className="port_inner">
            <h2 className="port_title">
                portfolio <em>포트폴리오 작업물</em>
            </h2> 
            <div className="port_wrap">
                {portText.map((port, key) => (
                    <article 
                        className={`port_item p${key+1}`} 
                        key={key}
                        ref={(el) => (sectionRef.current[key] = el)}    
                    >
                        <span className="num">{port.num}.</span>
                        <a href={port.code} target="_blank" className="img">
                            <Image src={port.img} alt={port.name} width={420} height={262} />
                        </a>
                        <h3 className="title">{port.title}</h3>
                        <p className="desc">
                            {port.desc}
                        </p>
                        <a href={port.view} target="_blank" className="site">사이트 보기</a>
                    </article>
                ))}                                    
            </div>   
        </div>
    </section>
  )
}

export default Port