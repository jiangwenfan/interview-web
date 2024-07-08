import React from 'react';
import { Layout, } from 'antd';
import PubSub from 'pubsub-js';
// import { type } from '@testing-library/user-event/dist/type';
const { Content, } = Layout;

export default class ContentInfo extends React.Component {
    // 默认选中的菜单项
    // menuItemSelect = "home"
    content = <div>Home</div>


    componentDidMount() {
        // 当内容组件挂载完毕时, 订阅菜单项点击事件
        this.token = PubSub.subscribe('menu-item-click', (msg, data) => {
            console.log("content组件", msg, data, typeof data);
            // this.menuItemSelect = data;
            switch (data) {
                case 'home':
                    this.setState(this.content = <div>Home</div>)
                    break;
                case 'about':
                    this.setState(this.content = <div>About</div>)
                    break
                case 'admin':
                    this.setState(this.content = <div>Admin</div>)
                    break
                default:
                    this.setState(this.content = <div>Home</div>)
                    break;
            }
        })

    }

    render() {
        return <Content
            style={{
                padding: '0 48px',
                width: '100%',
                height: '500px',
            }}
        >


            {
                this.content
            }
        </Content>

    }
}