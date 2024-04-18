import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 ">
            <div>
                <h2 className="text-2xl text-center bg-slate-300 mb-4 p-2 rounded-lg">Spent time on read :{readingTime} min</h2>
            </div>
            <div className='bg-slate-300 p-4 rounded-lg'>
                <h2 className='text-2xl text-center'>Bookmarks Blog: ({bookmarks.length})</h2>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;