import React from 'react';
import { connect } from 'react-redux';
import { element, oneOfType, arrayOf, object } from 'prop-types';
import {Meteor} from 'meteor/meteor';
import {callAddBlog} from "../../../api/redux/async-actions";
import Editor from '../../components/container/Editor'

class Compose extends React.Component {

    constructor(props) {
        super(props)
        this.editor = {}
    }

    onEditorLoaded(ed, api) {
        console.log('editor loaded.')
        this.editor.api = api;
    }

    onSave() {
        const delta = this.editor.api.getContents()
        const text = this.editor.api.getText()
        const stringified = JSON.stringify(delta)

        console.log(stringified)

        const payload = {
            title: 'abc',
            text: text,
            content: stringified,
            published: false
        }

        Meteor.call('blogs.methods.create', payload, (err,res) => {
            if(err) {
                console.log(err)
            } else {
                console.log('saved...')
            }

        })


    }

    render() {
        const { children, blogs } = this.props

        return (
            <React.Fragment>
                <section className="new-post">
                    <div className="section-title compose-controls">
                        <h2><span>Editor</span></h2>
                        <div>
                            <button onClick={this.onSave.bind(this)}>Save</button>
                        </div>
                    </div>
                    <Editor onEditorLoaded={this.onEditorLoaded.bind(this)}/>
                </section>
            </React.Fragment>
        )
    }
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
