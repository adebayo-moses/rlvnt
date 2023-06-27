import { useEffect, useState } from "react"
import style from "./Nav.module.scss"
import {Link} from "react-router-dom"

function Nav() {
  const [color, setColor] = useState(false)
  const [active, setActive] = useState(false)
  const handleMenu = () => {
    setActive(!active)
  }
  useEffect( () => {
    if (document.body.className === "theme-dark") {
      setColor(true)
    }
    if (document.body.className === "theme-light") {
      setColor(false)
    }
  }, [color])
  const handleColor = () => {
    setColor(!color)
    if (color === true) {
      document.body.className = "theme-light"
    } else {
      document.body.className = "theme-dark"
    }
  }
    return (
        <nav className={`${style.nav} ${style.theme_light}`}>
          <Link to={"/"}>
          <h6 className={style.logo}>Rlvt Studio</h6>
          </Link>
          <div className={`${style.nav__cta__toggle} ${style.one}`}>
                <div className={style.item} onClick={handleColor}>
                    <span className={style.item__one}></span>
                    <span className={style.item__two}></span>
                </div>
                <h6>{color ? "Dark mode" : "Light Mode"}</h6>
            </div>
          <div className={`${style.nav__cta} ${active ? style.nav__cta__active : ''}`}>
          <div className={style.nav__text}>
            <Link to={"/works"} onClick={handleMenu}><h6>Works</h6></Link>
            <Link to={"/contact"} onClick={handleMenu}><h6>Contact us</h6></Link>
          </div>
          <div className={style.nav__cta__toggle__item}>
            <div className={style.nav__cta__toggle}>
                <div className={style.item} onClick={handleColor}>
                    <span className={style.item__one}></span>
                    <span className={style.item__two}></span>
                </div>
                <h6>{color ? "Dark mode" : "Light Mode"}</h6>
            </div>
            <button>Start a Project</button>
            </div>
          </div>
          <div className={style.toggle} onClick={handleMenu}>
            <div className={style.box}></div>
            <div className={style.box}></div>
            <div className={style.box}></div>
          </div>
        </nav>
    )
}

export default Nav