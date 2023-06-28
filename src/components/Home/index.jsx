import ScrollToTop from '../../shared/ScrollTop'
import Hero from "./Hero"
import Info from "./Info"
import Work from "./Works"
import Footer from "../../shared/Footer/Footer";

function Home() {
    return (
        <>
        <ScrollToTop />
         <Hero />
         <Work />
        <Info />
        <Footer />
        </>
    )
}

export default Home