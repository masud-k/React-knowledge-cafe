import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="w-2/3">
            <h2 className="text-4xl m-5">Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog
                    key={blog}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blogs;