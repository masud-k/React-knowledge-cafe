
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmark from './Component/Bookmark/Bookmark'
import Header from './Component/Header/Header'

function App() {

  const [bookmarks, setBookmarks]=useState([]);

  const handleAddToBookmark = blog=> {
    console.log('bookmark added soon')
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmark></Bookmark>
      </div>
    </>
  )
}



export default App
