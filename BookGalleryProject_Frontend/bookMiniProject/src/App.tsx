
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BookGalleryComponent from './components/BookGalleryComponent'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<BookGalleryComponent/>}></Route>
      </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
