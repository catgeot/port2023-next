import React from 'react'

import { portText } from '@/constants'
import Image from 'next/image'

const Port = () => {
  return (
    <section id="port">
        <div class="port_inner">
            <h2 class="port_title">
                portfolio <em>포트폴리오 작업물</em>
            </h2> 
            <div class="port_wrap">
                {portText.map((port, key) => (
                    <article class={`port_item p${key+1}`} key={key}>
                        <span class="num">{port.num}.</span>
                        <a href={port.code} target="_blank" class="img">
                            <Image src={port.img} alt={port.name} width={420} height={262} />
                        </a>
                        <h3 class="title">{port.title}</h3>
                        <p class="desc">
                            {port.desc}
                        </p>
                        <a href={port.view} target="_blank" class="site">사이트 보기</a>
                    </article>
                ))}                                    
            </div>   
        </div>
    </section>
  )
}

export default Port