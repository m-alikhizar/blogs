import React from 'react';
import Post from './Post'
import {array, func} from "prop-types";

const FeaturedPosts = (props) => {
    const { posts } = props

    return (
        <section className="featured-posts">
            <div className="section-title">
                <h2><span>Featured</span></h2>
            </div>
            <div className="card-columns listfeaturedtag">
                {posts.map((post, i) => (
                    <Post
                        key={i}
                        _id={post._id}
                        description={post.content}
                        finished={post.published}
                    />
                ))}
            </div>
        </section>
    );
}

FeaturedPosts.propTypes = {
    posts: array.isRequired,
};

export default FeaturedPosts;
