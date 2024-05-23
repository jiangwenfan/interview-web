import React from 'react';
import { Breadcrumb, Layout, } from 'antd';
const { Content, } = Layout;
export default class ContentInfo extends React.Component {
    render() {
        return <Content
            style={{
                padding: '0 48px',
            }}
        >
            {/* <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}

            <div
                style={{
                    // background: colorBgContainer,
                    minHeight: 280,
                    padding: 24,
                    // borderRadius: borderRadiusLG,
                }}
            >
                Content11
            </div>
        </Content>

    }
}