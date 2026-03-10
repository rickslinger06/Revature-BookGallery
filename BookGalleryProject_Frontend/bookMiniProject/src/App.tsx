
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BookGalleryComponent from './components/BookGalleryComponent'
import BookSubmissionComponent from './components/BookSubmissionComponent'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<BookGalleryComponent/>}></Route>
           <Route path="/create" element={<BookSubmissionComponent/>}></Route>
      </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
