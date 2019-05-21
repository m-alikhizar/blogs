import React from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';
import { Helmet } from 'react-helmet';
import Blog from '../../components/blog-item/Blog';
import { callAddBlog } from '../../../api/redux/async-actions';

const Home = (props) => {
    const { blogs, dispatchCallAddBlog } = props;
    const handleAddBlog = (e) => {
        if (e.key === 'Enter') {
            const elem = e.target;
            e.preventDefault();
            dispatchCallAddBlog(elem.value);
            elem.value = '';
        }
    };
    return (
        <div className="blog-wrapper">
            <Helmet>
                <title>Homepage</title>
                <meta name="description" content="This is homepage. Just Helmet SSR demo" />
                <meta property="og:title" content="This is homepage. Just Helmet SSR demo for OG" />
            </Helmet>
            <div>
                <input
                    type="text"
                    className="add-blog-input"
                    placeholder="Add blog item ..."
                    onKeyPress={handleAddBlog}
                />
            </div>
            <div>
                {blogs.map((t, i) => (
                    <Blog
                        blogId={t.id}
                        message={t.content}
                        finished={t.published}
                        key={i}
                    />
                ))}
            </div>
        </div>
    );
};

Home.propTypes = {
    blogs: array.isRequired,
    dispatchCallAddBlog: func.isRequired,
};

const mapStateToProps = state => ({ blogs: state.blogs });
const mapDispatchToProps = dispatch => ({
    dispatchCallAddBlog: data => dispatch(callAddBlog(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);