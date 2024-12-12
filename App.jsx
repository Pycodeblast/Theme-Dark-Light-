
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/home'
import About from './Pages/about'
import Blog from './Pages/blog'
import Navbar from './components/navbar'
import { Themeprovider } from './theme-context'
function App() {
  return (
    <Themeprovider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      </BrowserRouter>
      </Themeprovider>
  );
}

export default App
