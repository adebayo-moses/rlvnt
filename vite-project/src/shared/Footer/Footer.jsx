import style from "./Footer.module.scss"
import Image2 from "../../assets/service-2.png"

function Footer() {
    return (
        <section className={style.info}>
            <div className={style.info__contact}>
        <p>[contact us]</p>
        <div className={style.info__contact__content}>
            <div className={style.item}>
                <h6>We are available for new projects from July 2023. For enquiries, contact us:</h6>
                <button>hello@rlvnt.io</button>
            </div>
            <div className={style.item}>
                <dl>
                    <dd>New York City Office</dd>
                    <dd>135 Hudson Street, Suite 6f</dd>
                    <dd>United States</dd>
                </dl>
                <button>Check Map</button>
            </div>
            <div className={style.menu}>
                <h5>Home</h5>
                <h5>Service</h5>
                <h5>Work</h5>
                <h5>Contact</h5>
            </div>
        </div>
      </div>
      <img src={Image2} alt="" height={708} className={style.service__img} />
        </section>
    )
}

export default Footer