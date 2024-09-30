import "./App.css"
import Header from './components/Header'
import Introduction from './pages/Introduction'
import MovingGallery from './pages/MovingGallery'
import MovingQuote from './pages/MovingQuote'
import Reviews from './pages/Reviews'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/MovingGallery" element={<MovingGallery />} />
        <Route path="/MovingQuote" element={<MovingQuote />} />
        <Route path="/Reviews" element={<Reviews />} />
      </Routes>
    </>
  )
}

export default App
