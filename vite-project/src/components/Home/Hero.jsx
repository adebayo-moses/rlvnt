import style from "./Home.module.scss"
import Nav from "../../shared/Navbar/Nav"

function Hero() {
    return (
        <>
        <Nav />
        <section className={style.hero}>
            <div className={style.hero__text}>
                <h1>A leading full-stack app development company dedicated to bringing your digital dreams to life.</h1>
            </div>
            <div className={style.hero__about}>
                <h5>[about us]</h5>
                <div className={style.hero__about__text}>
                    <p>We understand that every business is unique, and we tailor our approach to each project to ensure that we create an app that meets your specific needs.</p>
                    <button>Start a Project</button>
                </div>
            </div>
        </section></>
    )
}

export default Hero