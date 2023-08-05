import React from 'react'
import './knowledge.style.scss'
import plance2 from 'src/assets/images/plance-2.png'
function Knowledge() {
  return (
    <div className="knowledge scroll-section hidden" id="skill-nav">
      <div className="knowledge__left">
        <div className="knowledge__left--title">
          My Knowledge
          <br />
          {/* <span>Click show full</span> */}
        </div>

        <div className="knowledge__left--content">
          <div className="knowledge__left--content_item">HTML</div>
          <div className="knowledge__left--content_item">LESS/SCSS</div>
          <div className="knowledge__left--content_item">Javascript</div>
          <div className="knowledge__left--content_item">TypeScript</div>
          <div className="knowledge__left--content_item">Bootstrap</div>
          <div className="knowledge__left--content_item">JQuery</div>
          <div className="knowledge__left--content_item">
            ReacJs <br />
            (Hook)
          </div>
          <div className="knowledge__left--content_item cursor_small">
            NextJS
          </div>
        </div>
      </div>
      <div className="knowledge__right">
        <img src={plance2} alt="plance " />
      </div>
    </div>
  )
}

export default Knowledge
