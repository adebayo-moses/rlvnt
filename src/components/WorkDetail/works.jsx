import style from "./Detail.module.scss";
import one from "../../assets/one.png"
import two from "../../assets/two.png"
import three from "../../assets/three.png"
import four from "../../assets/four.png"
import five from "../../assets/five.png"
import six from "../../assets/six.png"
import play from "../../assets/svg/play.svg"
import Data from "../../data/project"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Work() {
    const {projects} = Data()
    const Id = useParams();
    const number = parseInt(Id.id)
    const [step, setStep] = useState()
    useEffect(() => {
        setStep(number + 1)
        if(step >= projects.length) {
            setStep(1)
        }
    }, [])
    return (
        <section className={style.work}>
            <div className={style.work__img}>
                <img src={one} width={600} height={600} alt="" />
                <img src={two} width={600} height={600} alt="" />
            </div>
            <img src={three} height={600} className={style.work__img__full} alt="" />
            <div className={style.work__img}>
                <img src={four} width={600} height={600} alt="" />
                <img src={five} width={600} height={600} alt="" />
            </div>
            <div className={style.work__full}>
            <img src={six} height={600} alt="" />
                <button>
                    <img src={play} width={12} height={11} alt="" />
                    <h4>Play Reel</h4>
                </button>
            </div>
            <div className={style.work__text}>
                <p>Next Project</p>
                {projects.map((item, index) => item.id === step && (
                    <Link to={`/works/${step}`} key={index}>
                    <h4 >{item.name}</h4>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Work