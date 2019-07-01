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

        this.exports = {
            getContents: this.getContents.bind(this),
            getText: this.getText.bind(this)

        }
    }

    handleChange(content, delta, source, editor) {
        // console.log(content)
    }

    componentDidMount() {
        if (typeof this.reactQuillRef.getEditor === 'function') {
            this.editor = this.reactQuillRef.getEditor()
            this.props.onEditorLoaded(this.editor, this.exports)
        }
    }

    getContents() {
        return this.editor.getContents()
    }

    getText() {
        return this.editor.getText()
    }

    getHtmlContents() {
        const html = this.editor.getHTML()
        this.props.getHtmlContents(html)
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
                <this.quill
                    modules={this.modules}
                    formats={['bold', 'color', 'background', 'font', 'code', 'italic', 'link', 'size', 'script', 'underline', 'strike', 'blockquote', 'header', 'indent', 'list', 'align', 'direction', 'code-block', 'formula', 'image', 'video']}
                    theme="bubble"
                    placeholder={'Writing is awesome...'}
                    ref={(el) => { this.reactQuillRef = el }}
                    value={this.state.text}
                    onChange={this.handleChange.bind(this)}
                    onChangeSelection={this.onChangeSelection.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                    onKeyPress={this.onKeyPress.bind(this)}
                />
            )
        } else {
            return <div>No editor supported.</div>
        }
    }
}

Editor.propTypes = {
    // onEditorLoaded: oneOfType([arrayOf(element), object]).isRequired,
};

export default Editor;
