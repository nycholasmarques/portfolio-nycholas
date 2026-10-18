import { useState, useLayoutEffect } from "react";
import "../styles/components/works.scss";
import "animate.css";
import { FaDocker, FaPython, FaReact, FaSass } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiJavascript } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Anime Database",
    category: "Websites",
    image:
      "https://raw.githubusercontent.com/nycholasmarques/portfolio-nycholas/main/src/img/project-img/animedbs.png",
    year: "2023",
    status: "Concluído",
    description:
      "Aplicação criada com ReactJs, uma biblioteca de animes onde tem algumas funcionalidades como busca, paginas de descrição dinâmicas. Este é meu primeiro projeto com React JS.",
      stacks: [
        {
          name: "ReactJs",
          icon: <FaReact id="react-icon"/>,
        },
        {
          name: "Sass",
          icon: <FaSass id="sass-icon"/>,
        }
      ],
    site: "https://animedatabase-murex.vercel.app/",
    github: "https://github.com/nycholasmarques/animedatabase",
  },
  {
    id: 2,
    title: "Roadkit",
    category: "Websites",
    image:
      "https://raw.githubusercontent.com/nycholasmarques/roadkit/main/docs/media/en/mapa-escuro.png",
    year: "out 2026",
    status: "Lançado",
    description:
      "Roadmaps de estudo interativos definidos em arquivos JSON: mapa, kanban, progresso salvo e uma tela \"Hoje\" para organizar o dia, tudo em um app self-hosted. Uma alternativa leve ao roadmap.sh que roda com um único arquivo Python, sem dependências, ou via Docker.",
      stacks: [
        {
          name: "JavaScript",
          icon: <SiJavascript id="js-icon"/>,
        },
        {
          name: "Python",
          icon: <FaPython id="python-icon"/>,
        },
        {
          name: "Docker",
          icon: <FaDocker id="docker-icon"/>,
        }
      ],
    site: "https://nycholasmarques.github.io/roadkit/",
    github: "https://github.com/nycholasmarques/roadkit",
  },
];

const categories = ["Websites"];

function Works() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#title-work", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#title-work",
        start: "top 800px",
        end: "bottom 700px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf("#title-work");
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".project-item", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".project-item",
        start: "top 900px",
        end: "bottom 800px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".project-item");
    };
  }, []);

  const [activeCategory, setActiveCategory] = useState("Websites"); //categoria all quando tiver outros tipos como apps e etc

  const filterByCategory = (category) => {
    setActiveCategory(category);
  };

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All" || project.category === activeCategory) {
      return true;
    }

    return false;
  });

  const noWorkPublished = () => {
    window.alert("Projeto não publicado ainda.");
  }

  return (
    <section className="four-part">
      <div className="works" id="section-works">
        <h2 id="title-work">Portfolio</h2>
        <div className="work-container">
          <div className="category">
            {categories.map((category) => (
              <h3
                key={category}
                onClick={() => filterByCategory(category)}
                className={category === activeCategory ? "active" : ""}
              >
                {category}
              </h3>
            ))}
          </div>
          <div className="projects-container">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-item">
                <div className="project-info">
                  <figure className="animate-image">
                    <img src={project.image} alt={project.title} width={"500px"}/>
                  </figure>
                  <div className="project-detail">
                    <div className="first-line">
                      <span className={`project-badge ${project.status === "Lançado" ? "project-badge--live" : ""}`}>
                        {project.status} em {project.year}
                      </span>
                      <h3 className="project-detail_title">{project.title}</h3>
                    </div>
                    <p className="project-detail_description">
                      {project.description}
                    </p>
                    <div className="project-detail_technologies">
                      {project.stacks.map((stack) => (
                        <span key={stack.name}>{stack.icon}</span>
                      ))}
                    </div>
                    <div className="project-detail_links">
                      <p>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          CODE
                        </a>
                      </p>
                      {project.site == "" ? (
                        <p>
                          <button
                            href={project.site}
                            onClick={noWorkPublished}
                            style={{
                              backgroundColor: "#6f646c",
                              borderColor: "#6f646c",
                            }}
                          >
                            SITE
                          </button>
                        </p>
                      ) : (
                        <p>
                          <a
                            href={project.site}
                            target="_blank"
                            rel="noreferrer"
                          >
                            SITE
                          </a>
                        </p>
                      )}
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
  );
}

export default Works;
