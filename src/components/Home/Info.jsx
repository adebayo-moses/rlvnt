import style from "./Home.module.scss";
import Image from "../../assets/service.png"

function Info() {
  return (
    <section className={style.info}>
      <div className={style.info__text}>
        <p>
          We understand that app development is an iterative process. We work
          with you to continuously test and improve your app throughout the
          development process.
        </p>
        <button>Start a Project</button>
      </div>
      <div className={style.info__service}>
        <div className={style.item}>
          <h4>Design</h4>
          <p>
            My mission at this point is connecting the dots and making various
            versions to find the proper design. My goal is always about creating
            an exprience that not only emphasises the characteristics of each
            project but also elegant and satisfied to use. To get that, I have
            to make sure to work closely with clients and users to get helpful
            feedbacks and insights for the evolution.
          </p>
        </div>
        <div className={style.item}>
          <h4>Development</h4>
          <p>
            My mission at this point is connecting the dots and making various
            versions to find the proper design. My goal is always about creating
            an exprience that not only emphasises the characteristics of each
            project but also elegant and satisfied to use. To get that, I have
            to make sure to work closely with clients and users to get helpful
            feedbacks and insights for the evolution.
          </p>
        </div>
      </div>
      <img src={Image} alt="" height={708} className={style.service__img} />
    </section>
  );
}

export default Info;
