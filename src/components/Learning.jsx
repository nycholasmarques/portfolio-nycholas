import '../styles/components/Learning.scss'
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Para adicionar um novo marco, basta incluir um item aqui:
// os lados se alternam sozinhos.
const timeline = [
  {
    date: 'SET 2023',
    title: 'Faculdade de ADS',
    description: 'Início da faculdade de Análise e Desenvolvimento de Sistemas na Uninter.',
  },
  {
    date: 'SET 2024',
    title: 'Canal no YouTube',
    description: (
      <>
        Início do canal{' '}
        <a href="https://www.youtube.com/@DevNych" target="_blank" rel="noreferrer">DevNych</a>.
      </>
    ),
  },
  {
    date: 'JAN 2025',
    title: 'Estágio',
    description: 'Início do estágio em programação, atuando no backend.',
  },
]

function Learning() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#title-learning', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#title-learning',
        start: 'top 800px',
        end: 'bottom 700px',
        scrub: true,
      },
    })

    return () => {
      gsap.killTweensOf('#title-learning')
    }
  }, [])

  return (
    <section className="third-part">
      <section className="learning" id="section-learning">
        <h2 id="title-learning">Estudos e experiências</h2>

        <ol className="timeline">
          {timeline.map((item, index) => (
            <li
              key={item.date}
              className={`timeline-item ${index % 2 === 0 ? 'timeline-item--right' : 'timeline-item--left'}`}
              data-reveal
            >
              <time className="timeline-date">{item.date}</time>
              <div className="timeline-marker" aria-hidden="true">
                <span className="timeline-dot" />
              </div>
              <div className="timeline-content">
                <span className="timeline-step">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </section>
  )
}

export default Learning
