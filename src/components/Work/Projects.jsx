import style from "./Work.module.scss"
import {Link} from "react-router-dom"
import Data from "../../data/project"

function Projects() {
    const {projects} = Data()
    return (
        <section className={style.project}>
            {projects.map((project, index) => (
                <div className={style.project__item} key={index}>
                <h2>{project.name}</h2>
                <div className={style.project__item__text}>
                    <div className={style.info}>
                    <p>{project.desc}.</p>
                    <span>
                        <h6>Role:</h6>
                        <dl>
                            {project.roles.map(item => (
                                <dd key={item.item}>{item.item}</dd>
                            ))}
                        </dl>
                    </span>
                </div>
                <Link to={`/works/${project.id}`}>
                <button>View Project</button>
                </Link>
                </div>
                <div className={style.project__item__card}>
                    {project.pics.map((pic, index) => (
                        <div className={style.item} key={index}>
                        <img src={pic.item} alt="" width={154} height={334} />
                        </div>
                    ))}
                </div>
            </div>
            ))}
        </section>
    )
}

export default Projects