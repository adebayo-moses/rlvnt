import style from "./Work.module.scss"
import Nav from "../../shared/Navbarr2/Nav"
import Phone from "../../assets/phone.png"
import { useState } from "react"
import {Link} from "react-router-dom"
import Data from "../../data/project"

function Hero() {
    const {projects} = Data()
    const [Id, setId] = useState(1)
    
    const date = new Date()
    const hours = date.getHours() + 1
    if (hours === 0) {
        if(Id <= projects.length) {
            setId(Id+1)
        }
        else {
            setId(1)
        }
    }
    return (
        <section className={style.work}>
            <Nav />
            <div className={style.work__box}>
                    <h2>RECENT PROJECTS</h2>
                    {projects.map((item, index) => item.id === Id &&  (
                         <div className={style.work__item} key={index}>
                        <img src={Phone} alt="" width={234} height={488} />
                        <h4>{item.name}- A Social App</h4>
                        <Link to={`/works/${item.id}`}>
                <button>View Project</button>
                </Link>
                        </div>
))}
                    <p className={style.scroll}>[scroll down]</p>
                </div>
        </section>
    )
}

export default Hero