
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import PageNotFound from "./pages/404/PageNotFound";
import Footer from "./components/footes/Footer"
import Doctors from './pages/doctor/Doctors';
import Thanks from './pages/thanks/Thanks';
import Solution from "./pages/solutions/solution"

 

function App() {
    

  

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solution" element={<Solution />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/thanks" element={<Thanks />} />
                <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
