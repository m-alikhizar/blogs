import React from 'react';
import { connect } from 'react-redux';
import { element, oneOfType, arrayOf, object } from 'prop-types';
import NavigationHeaderBar from '../../components/NavigationHeaderBar'
import MainFeaturedStory from '../../components/container/MainFeaturedStory'
import FeaturedPosts from "../../components/container/FeaturedPosts"
import {callAddBlog} from "../../../api/redux/async-actions";

const Secondary = (props) => {
    const { children } = props
    return (
        <React.Fragment>
            <div className="container">
                <section>
                    {children}
                </section>
            </div>
        </React.Fragment>
    )
}

Secondary.propTypes = {
    children: oneOfType([arrayOf(element), object]).isRequired,
};

const mapStateToProps = state => {
    return ({ })
}

export default connect(mapStateToProps)(Secondary);
