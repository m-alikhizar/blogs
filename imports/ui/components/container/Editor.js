import React, { Component } from 'react';
import {array, func} from "prop-types";
import katex from 'katex';
// import highlightjs from 'highlightjs'


class Editor extends Component {
    constructor(props) {
        super(props)

        if(Meteor.isClient){
            this.quill = require('react-quill')

            window.katex = katex;


            window.hljs.configure({
                languages: ['javascript', 'ruby', 'bash']
            });
        }

        this.state = { text: '' }

        this.modules = {
            syntax: true,
            toolbar: [
                [{ font: [] }, { size: [] }],
                [{ align: [] }, 'direction' ],
                [ 'bold', 'italic', 'underline', 'strike' ],
                [{ color: [] }, { background: [] }],
                [{ script: 'super' }, { script: 'sub' }],
                ['blockquote', 'code-block' ],
                [{ list: 'ordered' }, { list: 'bullet'}, { indent: '-1' }, { indent: '+1' }],
                [ 'link', 'image', 'video' ],
                [ 'clean' ]
            ],
        };
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
                <section className="new-post">
                    <div className="section-title">
                        <h2><span>Editor</span></h2>
                    </div>
                    <this.quill
                        modules={this.modules}
                        formats={['bold', 'color', 'font', 'code', 'italic', 'link', 'size', 'script', 'underline', 'strike', 'blockquote', 'header', 'indent', 'list', 'align', 'direction', 'code-block', 'formula', 'image', 'video']}
                        theme="bubble"
                        placeholder={'Writing is awesome...'}
                        value={this.state.text}
                        onChange={this.handleChange.bind(this)}
                        onChangeSelection={this.onChangeSelection.bind(this)}
                        onFocus={this.onFocus.bind(this)}
                        onBlur={this.onBlur.bind(this)}
                        onKeyPress={this.onKeyPress.bind(this)}
                    />
                </section>
            )
        } else {
            return <div>No editor supported.</div>
        }
    }
}

export default Editor;
