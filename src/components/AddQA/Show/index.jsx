import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = "# Hello, *world*!"

export default class Show extends React.Component {
    render() {
        return <div>
            <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
        </div>
    }
}