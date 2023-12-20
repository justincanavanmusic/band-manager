
import Nav from "./components/Nav"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GigCreate from "./components/EventCreate/GigCreate"
import HomePage from "./components/HomePage/HomePage"

function App() {
  return (
    <>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/create-event" element={<GigCreate />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
