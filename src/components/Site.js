import { siteText } from '@/constants'
import React from 'react'

const Site = () => {
  return (
    <section id="site">
      <div className="site_inner">
        <h2 className="site_title">
            Site Cording <em>나의 작업물</em>
        </h2>
        <div className="site_wrap">
          {siteText.map((site, key) => (
            <article className={`site_item s${key+1}`} key={key}>
            <span className="num">{key+1}.</span>
            <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
                <div>{site.text[2]}</div>
            </div>
            <h3 className="title">
                {site.title}
            </h3>
            <div className="btn">
                <a href={site.code}>코드확인하기</a>
                <a href={site.view}>사이트 보러가기 </a>
            </div>
            <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
            </div>
            </article>
          ))}
                                                 
        </div>
      </div>
    </section>
  )
}

export default Site