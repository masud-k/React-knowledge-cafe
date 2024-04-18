import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div>
            <h3 className='text-2xl bg-slate-50 m-3 p-2 rounded-lg'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
};

export default Bookmark;