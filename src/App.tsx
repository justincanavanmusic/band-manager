
import Nav from "./components/Nav"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import EventCreate from "./components/EventCreate/EventCreate"
import HomePage from "./components/HomePage/HomePage"

function App() {
  return (
    <>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/create-event" element={<EventCreate />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
