import React from 'react';
import { Layout, Menu, } from 'antd';
import { SolutionOutlined, InfoCircleOutlined, LockOutlined } from '@ant-design/icons';
import examLogo from '../../../assets/test.webp';

const { Header } = Layout;

// 菜单项
const menuItems = [
    {
        key: "home",
        icon: <SolutionOutlined />,
        label: "Home测试",
    },
    {
        key: "about",
        icon: <InfoCircleOutlined />,
        label: "About",

    }, {
        key: "admin",
        icon: <LockOutlined />,
        label: "后台管理",

    },
]

// 默认选中的菜单的key
const defaultSelectedKeys = ['home'];

// 点击菜单项的回调
const handleClick = (e) => {
    let item_key = e.key;
    console.log('点击了菜单项:', item_key);
}


export default class HeaderInfo extends React.Component {
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
                onClick={handleClick}
            />
        </Header>

    }
}