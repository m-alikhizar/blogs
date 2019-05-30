import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/img/logo.png'
import {callEditBlog, callRemoveBlog} from "../../../api/redux/async-actions";
import {connect} from "react-redux";
import image from '/assets/img/demopic/1.jpg'

const Post = (props) => {
    const { blog, title = 'todo', description, _id, dispatchCallRemoveBlog, dispatchCallEditBlog, finished } = props;

    const handleRemove = () => {
        dispatchCallRemoveBlog(_id);
    };
    const handleEdit = () => {
        dispatchCallEditBlog(_id);
    };

    const finishedClass = () => {
        if (finished) {
            return 'blog-item blog-finished';
        }
        return 'blog-item';
    };

    return (
        <div className="card">
            <div className="row">
                <div className="col-md-5 wrapthumbnail">
                    <a href="post.html">
                        <div className="thumbnail" style={{backgroundImage: `url(${image})`}} />
                    </a>
                </div>
                <div className="col-md-7">
                    <div className="card-block">
                        <h2 className="card-title"><a href="post.html">{title}</a></h2>
                        <h4 className="card-text">{description}</h4>
                        <div className="metafooter">
                            <div className="wrapfooter">
                        <span className="meta-footer-thumb">
                        <a href="author.html"><img className="author-thumb"
                                                   src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                                                   alt="Sal" /></a>
                        </span>
                                <span className="author-meta">
                        <span className="post-name"><a href="author.html">Steve</a></span><br/>
                        <span className="post-date">22 July 2017</span><span className="dot"></span><span
                                    className="post-read">6 min read</span>
                        </span>
                                <span className="post-read-more"><a href="post.html" title="Read Story"><svg
                                    className="svgIcon-use" width="25" height="25" viewBox="0 0 25 25"><path
                                    d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                                    fillRule="evenodd"></path></svg></a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={handleRemove}>x</div>
        </div>
    )
};

Post.defaultProps = {

};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    dispatchCallRemoveBlog: _id => dispatch(callRemoveBlog(_id)),
    dispatchCallEditBlog: _id => dispatch(callEditBlog(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
