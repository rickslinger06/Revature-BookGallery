
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BookGalleryComponent from './components/BookGalleryComponent'
import BookListComponent from './components/BookListComponent'
import BookSubmissionComponent from './components/BookSubmissionComponent'
import NavBarComponent from './components/NavBarComponent'
import SidebarComponent from './components/SidebarComponent'

function App() {


  return (
    <>

    <BrowserRouter>
      <NavBarComponent></NavBarComponent>
    
      <Routes>
          <Route path="/" element={<BookGalleryComponent/>}></Route>
           <Route path="/create" element={<BookSubmissionComponent/>}></Route>
            <Route path="/booklist" element={<SidebarComponent/>}></Route>
                 <Route path="/books" element={<BookListComponent books={[]}/>}></Route>
  
      </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
