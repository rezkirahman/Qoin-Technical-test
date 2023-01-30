import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MoviePage from './pages/moviepage'
import GenrePage from './pages/genrepage'
import DetailPage from './pages/detailpage'
import NavsBar from './components/navbars';
import NotFound from './pages/notfoundpage';

function App() {

  return (
    <>
      <Router>
        <NavsBar />
        <Routes>
          <Route path='/' element={<MoviePage />} />
          <Route path='/genre' element={<GenrePage />} />
          <Route path='/detail/:id' element={<DetailPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
