import '../styles/components/Learning.scss'
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Learning() {

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger)
          gsap.to('#title-learning', {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: '#title-learning',
              //markers: true,
              start: 'top 800px',
              end: 'bottom 700px',
              scrub: true,
            }
          })
        
          return () => {
            gsap.killTweensOf('#title-section')
          }
      }, [])

      useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

          gsap.to('.timeline-component', {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: '.timeline-component',
              start: 'top 800px',
              end: 'bottom 700px',
              scrub: true,
             
            }
          })
        
          return () => {
            gsap.killTweensOf('.timeline-component')
          }
      }, [])


  return (
    <section className='third-part'>
        <section className="learning" id='section-learning'>
            <h2 id='title-learning'>Estudos e experiencias</h2>
            <div className="timeline">
                  <div className="timeline-empty">
                  </div>
               <div className="timeline-middle_1">
                   <div className="timeline-circle_1"></div>
               </div>
               <div className="timeline-component timeline-content">
                <h3>2022 - Inicio da jornada dev</h3>
               </div>
                <div className="timeline-component timeline-content">
                         <h3>SET-2023 - ADS</h3>
                         <p>Inicio da faculdade de ads na Uninter</p>
                </div>
                <div className="timeline-middle_2">
                    <div className="timeline-circle_2"></div>
                </div>
                <div className="timeline-empty">
                </div>

                <div className="timeline-empty">
                </div>

               {/* <div className="timeline-middle_3">
                   <div className="timeline-circle_3"></div>
               </div>
               <div className=" timeline-component timeline-content">
                <h3>Javascript</h3>
                <p>Some Text.</p>
           </div> */}
            </div> 
        </section>
    </section>
  )
}

export default Learning