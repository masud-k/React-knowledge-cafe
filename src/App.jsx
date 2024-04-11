
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Header from './Component/Header/Header'
import Bookmarks from './Component/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks]=useState([]);

  const handleAddToBookmark = blog=> {
    const newBookmark=[...bookmarks, blog];
    setBookmarks(newBookmark);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}



export default App
