import style from "./Home.module.scss";
import Phone from "../../assets/phone.png"

function Work() {
    return (
        <section className={style.work}>
            <h2>Recent Works</h2>
            <div className={style.work__cards}>
                <div className={style.work__cards__top}>
                    <div className={style.item}>
                        <div className={style.item__content}>
                            <img src={Phone} alt="" width={179} height={375} />
                            <p>Meeto- A Social App</p>
                        </div>
                        <button>
                            <span></span>
                            view project
                        </button>
                    </div>
                    <div className={`${style.item} ${style.two}`}>
                        <div className={style.item__content}>
                            <img src={Phone} alt="" width={147} height={307} />
                            <p>Meeto- A Social App</p>
                        </div>
                        <button>
                            <span></span>
                            view project
                        </button>
                    </div>
                </div>
                <div className={style.work__cards__bottom}>
                    <div className={style.project}>
                    <div className={style.item}>
                        <div className={style.item__content}>
                            <img src={Phone} alt="" width={125} height={263} />
                            <p>Meeto- A Social App</p>
                        </div>
                        <button>
                            <span></span>
                            view project
                        </button>
                    </div>
                    <button>View All Project</button>
                    </div>
                    <div className={`${style.item} ${style.two}`}>
                        <div className={style.item__content}>
                            <img src={Phone} alt="" width={147} height={307} />
                            <p>Meeto- A Social App</p>
                        </div>
                        <button>
                            <span></span>
                            view project
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;