import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleAddToBookmark, handleMarkRead }) => {
    const {id, title, cover, author_img, author_name, piblish_day, reading_time, hashtag } = blog
    return (
        <div className='m-5 p-4'>
            <img className='w-full mb-5' src={cover} alt={`cover pic of ${title}`} />
            <div className='flex justify-between my-5'>
                <div className='flex'>
                    <img src={author_img} alt="" />
                    <div className='ml-3'>
                        <h3 className="text-2xl">{author_name}</h3>
                        <p className='text-xl'>{piblish_day}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className='ml-3'><FaRegBookmark></FaRegBookmark>
                    </button>
                </div>
            </div>
            <h2 className="text-4xl mb-5">{title}</h2>
            <p><span><a href="">{hashtag}</a></span></p>
            <button
                onClick={() =>handleMarkRead(id, reading_time)}
                className='text-blue-700'
            >Mark as Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkRead: PropTypes.func
}
export default Blog;