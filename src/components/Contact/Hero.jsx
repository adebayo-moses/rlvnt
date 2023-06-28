import style from "./Contact.module.scss"
import Nav from "../../shared/Navbar/Nav"

function Hero() {
    return (
        <section className={style.contact}>
            <Nav />
            <div className={style.contact__box}>
                <h6>Project Enquiry</h6>
                <h1>Hey! We’d love to learn about what you are working</h1>
                <form action="" method="get">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="" placeholder="Name" />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="message"></textarea>
                </form>
            </div>
        </section>
    )
}

export default Hero