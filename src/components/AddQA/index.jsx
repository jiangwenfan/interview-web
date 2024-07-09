import React from "react";
import Add from "./Add";
import Show from "./Show";
import Label from "./label";
import { Input, Space, Button } from "antd";
import { CloseOutlined, FileDoneOutlined } from '@ant-design/icons';
const { TextArea } = Input;

export default class AddQA extends React.Component {
    render() {
        return <Space size="middle" direction="vertical">
            <h4>add question</h4>
            <TextArea placeholder="输入question" autoSize />
            <Label />
            <Space>
                <Add />
                <Show />
            </Space>
            <Space size="large">
                <Button type="primary" size="large" icon={<CloseOutlined />}>
                    cancel
                </Button>
                <Button type="primary" size="large" icon={<FileDoneOutlined />}>
                    save
                </Button>
            </Space>


        </Space>
    }
}