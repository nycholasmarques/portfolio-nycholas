import { useState, useLayoutEffect } from 'react'
import '../styles/components/works.scss'
import 'animate.css';
import  { FaReact, FaSass } from 'react-icons/fa'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const projects = [
  {
    id: 1,
    title: 'Anime Database',
    category: 'Websites',
    image: 'src/img/project-img/animedbs.png',
    year: '2023',
    status: 'Concluído',
    description: 'Aplicação criada com ReactJs, uma blibioteca de animes onde tem algumas funcionalidades como busca, paginas de descrição dinâmicas e pretendo lançar futuramente, algumas melhorias como um sistema de filtragem por categorias, este sendo meu primeiro projeto com react.',
    site: 'https://animedatabase-murex.vercel.app/',
    github: 'https://github.com/nycholasmarques/animedatabase'
  }
]

const categories = ['Websites'] 

function Works() {

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
      gsap.to('#title-work', {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '#title-work',
          start: 'top 800px',
          end: 'bottom 700px',
          scrub: true,
        }
      })
    
      return () => {
        gsap.killTweensOf('#title-work')
      }
  }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

      gsap.to('.project-item', {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.project-item',
          start: 'top 900px',
          end: 'bottom 800px',
          scrub: true,
        }
      })
    
      return () => {
        gsap.killTweensOf('.project-item')
      }
  }, [])

  const [activeCategory, setActiveCategory] = useState('Websites') //categoria all quando tiver outros tipos como apps e etc

  const filterByCategory = category => {
    setActiveCategory(category)
    
  }

  const filteredProjects = projects.filter(project => {
    
    if (activeCategory === 'All' || project.category === activeCategory) {
      return true
    }

    return false
  })

  return (
    <section className='four-part'>
        <div className='works' id='section-works'>
            <h2 id='title-work'>Portfolio</h2>
            <div className="work-container">
              <div className="category">
              {categories.map(category => (
                <h3 key={category} onClick={() => filterByCategory(category)} className={category === activeCategory ? 'active' : ''}>
                  {category}
                </h3>
              ))}
              </div>
              <div className='projects-container'>
                {filteredProjects.map(project => (
                  <div key={project.id} className='project-item'>
                    <div className="project-info">
                      <figure className='animate-image'>
                        <img src={project.image} alt={project.title} />
                      </figure>

                      <div className="project-detail">
                        <div className="first-line">
                          <h3 className='project-detail_title'>{project.title}</h3>
                          {/* <ul className="project-detail_stts">
                              <li id="st-pr">{project.year}</li>
                          </ul> */}
                        </div>
                          <p className="project-detail_description">
                            {project.description}
                          </p>
                          <div className="project-detail_technologies">
                          <FaReact/>
                          <FaSass/>
                          </div>
                          <div className="project-detail_links">
                            <p><a href={project.github} target='_blank' rel='noreferrer'>CODE</a></p>
                            <p><a href={project.site} target='_blank' rel='noreferrer'>SITE</a></p>
                          </div>   
                        </div>
                        <hr />
                    </div>
                  </div>
                ))}
                
              </div>     
            </div>
        </div>
    </section>
  )
}

export default Works