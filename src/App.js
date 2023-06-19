import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <h1>welcome to my sight</h1>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App