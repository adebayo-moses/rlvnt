import ScrollToTop from './shared/ScrollTop'
import './App.css'
import CustomCursorManager from "./assets/CustomCursor/context/manager"
import CustomCursor from "./assets/CustomCursor"
import Home from "./components/Home/index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from './components/Work';
import Contact from './components/Contact'
import Detail from './components/WorkDetail'

function App() {

  return (
    <CustomCursorManager>
      <CustomCursor />
      <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/works' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='works'>
        <Route path=':id' element={<Detail />} />
        </Route>
      </Routes>
      </Router>
  </CustomCursorManager>
  )
}

export default App
