import React from 'react';
import { Layout, Menu, } from 'antd';
import { InfoCircleOutlined, LockOutlined } from '@ant-design/icons';
import examLogo from '../../../assets/test.webp';
import PubSub from 'pubsub-js';
import menuItems from '../config.js'

const { Header } = Layout;


// 默认选中的菜单的key
const defaultSelectedKeys = ['home'];




export default class HeaderInfo extends React.Component {
    // 点击菜单项的回调
    handleClick = (e) => {
        let item_key = e.key;
        console.log('点击了菜单项:', item_key);

        // switch (item_key) {
        //     case 'userInfo':
        //         item_key = 'home';

        //         break;
        //     default:
        //         item_key = 'home';
        //         break;
        // }

        PubSub.publish('menu-item-click', item_key);
    }

    render() {
        return <Header
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div style={{
                padding: '24px',
                display: 'flex',
            }}>
                <img src={examLogo} alt="Exam Logo" width={40} />
            </div>

            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={defaultSelectedKeys}
                items={menuItems}
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
                onClick={this.handleClick}
            />
        </Header>

    }
}