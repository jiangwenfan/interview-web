import React from "react";
import Add from "../AddQA/Add";
import { Card, Button, Space } from "antd";
import "./index.css";
export default class ShowQA extends React.Component {
    render() {
        return <div className="ShowQAColor">

            <Card title="question aaa"
                bordered={false}
                style={{
                    width: 300,
                }}>
                <Space size="middle" direction="vertical">

                    {/* 输入答案 */}
                    <Add />
                    {/* 点击查看之后，设置为 下一个 */}
                    <Button type="primary" size="large">
                        查看</Button>
                </Space>


            </Card>
        </div>
    }
}