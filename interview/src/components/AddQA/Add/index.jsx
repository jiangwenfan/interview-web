import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

export default class Add extends React.Component {
    render() {
        return <div>
            <TextArea placeholder="输入answer" autoSize />
        </div>
    }
}