import "./App.css"
import Header from './components/Header'
import Introduction from './pages/Introduction'
import Photos from './pages/Photos'
import Quote from './pages/Quote'
import Reviews from './pages/Reviews'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Photos" element={<Photos />} />
        <Route path="/Quote" element={<Quote />} />
        <Route path="/Reviews" element={<Reviews />} />
      </Routes>
    </>
  )
}

export default App
