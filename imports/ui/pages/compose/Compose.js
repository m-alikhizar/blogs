import React from 'react';
import { connect } from 'react-redux';
import { element, oneOfType, arrayOf, object } from 'prop-types';
import {callAddBlog} from "../../../api/redux/async-actions";
import Editor from '../../components/container/Editor'

const Compose = (props) => {
    const { children, blogs} = props
    return (
        <React.Fragment>
            <div className="container">
                <section>
                    <Editor {...props}/>
                </section>
            </div>
        </React.Fragment>
    )
}

Compose.propTypes = {
    // children: oneOfType([arrayOf(element), object]).isRequired,
};

const mapStateToProps = state => {
    return ({ posts: state.blogs })
}

const mapDispatchToProps = dispatch => ({
    dispatchCallAddBlog: data => dispatch(callAddBlog(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Compose);
