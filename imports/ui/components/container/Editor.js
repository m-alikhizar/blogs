import React, { Component } from 'react';
import {array, func} from "prop-types";

class Editor extends Component {
    constructor(props) {
        super(props)

        if(Meteor.isClient){
            this.quill = require('react-quill')
        }

        this.state = { text: '' }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({ text: value })
    }

    render() {
        if(this.quill) {
            return (
                <section className="featured-posts">
                    <div className="section-title">
                        <h2><span>Editor</span></h2>
                        <this.quill value={this.state.text} onChange={this.handleChange} />
                    </div>
                </section>
            )
        } else {
            return <div>No editor supported.</div>
        }
    }
}

Editor.propTypes = {
};

export default Editor;
