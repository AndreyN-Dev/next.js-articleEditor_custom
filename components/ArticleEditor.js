import React, { useEffect } from 'react'

const Editor = () => {
    useEffect(() => {
        const ArticleEditor = require('../static/article-editor');
        if(typeof window !== 'undefined'){
            ArticleEditor('#editor', {
                css: '/static/css/'
            });
        }
    })
    return (
        <textarea id="editor">            
        </textarea>
    )
}
export default Editor

