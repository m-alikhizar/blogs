import React from 'react';
import { connect } from 'react-redux';
import { string, func, bool } from 'prop-types';
import { callRemoveBlog, callEditBlog } from '../../../api/redux/async-actions';

const Blog = (props) => {
    const { message, blogId, dispatchCallRemoveBlog, dispatchCallEditBlog, finished } = props;
    const handleRemove = () => {
        dispatchCallRemoveBlog(blogId);
    };
    const handleEdit = () => {
        dispatchCallEditBlog(blogId);
    };
    const finishedClass = () => {
        if (finished) {
            return 'blog-item blog-finished';
        }
        return 'blog-item';
    };
    return (
        <div className={finishedClass()}>
            <input type="checkbox" checked={finished} onChange={handleEdit} />
            {message}
            <button type="button" onClick={handleRemove}>
                <i className="fa fa-times" />
            </button>
        </div>
    );
};

// Blog.propTypes = {
//     message: string.isRequired,
//     blogId: string.isRequired,
//     dispatchCallRemoveBlog: func.isRequired,
//     dispatchCallEditBlog: func.isRequired,
//     finished: bool,
// };

Blog.defaultProps = {
    finished: false,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    dispatchCallRemoveBlog: _id => dispatch(callRemoveBlog(_id)),
    dispatchCallEditBlog: _id => dispatch(callEditBlog(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
