import './App.css'
import Nav from './Components/Nav'
import Layout from './Layout/Layout'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Reservations from './Reservations'
import Footer from './Components/Footer'
import Completed from './Completed'
import NoMatch from './NoMatch'

function App() {


  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Layout />}/>
        <Route path='reservation' element={<Reservations />}/>
        <Route path='completed' element={<Completed />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
