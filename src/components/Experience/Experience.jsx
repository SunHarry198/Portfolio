import React from 'react'
import './experience.style.scss'
import plance3 from 'src/assets/images/plance-3.png'
function Experience() {
  return (
    <div className="experience scroll-section hidden" id="experience-nav">
      <div className="experience__left">
        <div className="experience__left--image">
          <img src={plance3} alt="plance" />
        </div>
      </div>
      <div className="experience__right">
        <div className="experience__right--title">Experience</div>
        <div className="experience__right--content">
          <div className="experience__right--content_item">
            <div className="experience__right--content_item-left">
              <svg
                className="line-1 svg1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 83.28 506.81"
              >
                <polyline
                  className="cls-1"
                  points="56.62 13 74.62 77 0.62 206 82.62 290 2.62 395 56.84 496.93"
                />
                <path
                  className="cls-2"
                  d="M55.5.5c12.12,0,19.17,9.2,13.8,13s-9.2,6.91-13,6.14-13.8-1.54-13-6.14S50.13.5,55.5.5Z"
                />
                <path
                  className="cls-2"
                  d="M54.36,487c12.12,0,19.17,9.2,13.8,13s-9.2,6.9-13,6.14-13.8-1.54-13-6.14S49,487,54.36,487Z"
                />
              </svg>
            </div>
            <div className="experience__right--content_item-right">
              <div>
                <section className="experience__right--content_item-right_title">
                  Comma Media Company.
                </section>
                <span>
                  25/7 Nguyen Binh Khiem, Ben Nghe Ward, Dist 1, HCMC, VietNam
                </span>
                <section className="experience__right--content_item-right_work">
                  Intern Front-end.(11/2019-01/2020)
                </section>
                <ul>
                  <li>
                    <article>Main responsibilities:</article>- Convert .psd
                    files, .ai files to HTML/CSS/JS, responsive.
                  </li>
                  <li>
                    <article>Recognition and Gains:</article>- Given good
                    recognition by leader in terms of Front-end. <br />
                    -I was accepted as a full-time employee after my internship,
                    but I turned it down for some personal reasons.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience__right--content_item">
            <div className="experience__right--content_item-left">
              <svg
                className="line-1 svg2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 81.39 538.34"
              >
                <polyline
                  className="cls-1"
                  points="53.68 0.26 0.68 88.55 80.68 140.26 6.68 245.06 80.68 357.26 54.89 434.08 54.89 528.76"
                />
                <path
                  className="cls-2"
                  d="M52.79,518.56c12.12,0,19.17,9.2,13.8,13s-9.2,6.9-13,6.14-13.81-1.54-13-6.14S47.42,518.56,52.79,518.56Z"
                />
              </svg>
            </div>
            <div className="experience__right--content_item-right">
              <div>
                <section className="experience__right--content_item-right_title">
                  Vinasay Company.
                </section>
                <span>
                  171 Nguyen Thi Thap, Tan Phu Ward, Dist 7, HCMC, VietNam
                </span>
                <section className="experience__right--content_item-right_work">
                  Fresher Front-end.(5/2020 - 10/2020)
                </section>
                <ul>
                  <li>
                    <article>Main responsibilities:</article>- Plan an idea and
                    design Vinasay Website with Illustrator.
                    <br />- Convert .ai files to HTML/CSS/JS, responsive.
                  </li>
                  <li>
                    <article>Recognition and Gains:</article>- Given good
                    recognition by leader in terms of Front-end.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
