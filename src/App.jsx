
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Header from './Component/Header/Header'
import Bookmarks from './Component/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }
  const handleMarkRead = (id, time) => {
    setReadingTime(readingTime + time)
    // remove Bookmark
    // console.log('remove bookmark', id)
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmark)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkRead={handleMarkRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}



export default App
