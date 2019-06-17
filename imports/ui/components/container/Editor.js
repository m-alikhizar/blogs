import React, { Component } from 'react';
import {array, func} from "prop-types";

class Editor extends Component {
    constructor(props) {
        super(props)

        if(Meteor.isClient){
            this.quill = require('react-quill')
        }

        this.state = { text: '' }
    }

    handleChange(content, delta, source, editor) {
        console.log(content)
    }

    onChangeSelection(range, source, editor) {

    }

    onFocus(range, source, editor) {

    }

    onBlur(previousRange, source, editor) {

    }

    onKeyPress(event) {

    }


    render() {
        if(this.quill) {
            return (
                <section className="featured-posts">
                    <div className="section-title">
                        <h2><span>Editor</span></h2>
                        <this.quill
                            defaultValue={'hola land'}
                            placeholder={'Write something...'}
                            value={this.state.text}
                            onChange={this.handleChange}
                            onChangeSelection={this.onChangeSelection}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onKeyPress={this.onKeyPress}
                        />
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
