import "../styles/components/Learning.scss";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsYoutube } from "react-icons/bs";

function Learning() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#title-learning", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#title-learning",
        //markers: true,
        start: "top 800px",
        end: "bottom 700px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf("#title-section");
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".timeline-component", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".timeline-component",
        start: "top 800px",
        end: "bottom 700px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".timeline-component");
    };
  }, []);

  return (
    <section className="third-part">
      <section className="learning" id="section-learning">
        <h2 id="title-learning">Estudos e experiências</h2>
        <div className="timeline">
          <div className="timeline-empty"></div>
          <div className="timeline-middle_1">
            <div className="timeline-circle_1"></div>
          </div>
          <div className="timeline-component timeline-content">
            <h3>SET-2023 - ADS</h3>
            <p>Inicio da faculdade de ads na Uninter</p>
          </div>
          <div className="timeline-component timeline-content">
            <h3>SET-2024 - Youtube</h3>
            <p>
              Inicio do canal{" "}
              <a href="https://www.youtube.com/@DevNych">DevNych</a>
            </p>
          </div>
          <div className="timeline-middle_2">
            <div className="timeline-circle_2"></div>
          </div>
          <div className="timeline-empty"></div>

          <div className="timeline-empty"></div>

          <div className="timeline-middle_3">
            <div className="timeline-circle_3"></div>
          </div>
          <div className=" timeline-component timeline-content">
            <h3>JAN-2025 - Estágio</h3>
            <p>Inicio do estágio em programação</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Learning;
