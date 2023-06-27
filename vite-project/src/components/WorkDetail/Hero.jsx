import Nav from "../../shared/Navbarr2/Nav";
import style from "./Detail.module.scss";
import Data from "../../data/project"
import { useParams } from "react-router-dom";

function Hero() {
  const {projects} = Data()
  const Id = useParams();
  return (
    <section className={style.hero}>
      <Nav />
      <div className={style.hero__box}>
        {projects.map(
          (project, index) =>
            project.id === parseInt(Id.id) && (
              <div key={index}>
                <h2>{project.name}</h2>
                <div className={style.hero__box__text}>
                  <div className={style.item__one}>
                    <div className={style.item}>
                      <p>Category</p>
                      <h6>{project.category}</h6>
                    </div>
                    <div className={style.item}>
                      <p>Duration</p>
                      <h6>{project.duration}</h6>
                    </div>
                    <div className={style.item}>
                      <p>Client</p>
                      <h6>{project.client}</h6>
                    </div>
                  </div>
                  <div className={style.item__two}>
                    <p>
                      {project.deets1}
                    </p>
                    <p>
                     {project.deets2}
                    </p>
                    <span>
                      <button>App Store</button>
                      <button>Playstore</button>
                    </span>
                  </div>
                </div>
              </div>
            )
        )}
        {/* {projects.map((item, index) => item.name === name && (
        
        ))} */}
        <p className={style.scroll}>[scroll down]</p>
      </div>
    </section>
  );
}

export default Hero;
