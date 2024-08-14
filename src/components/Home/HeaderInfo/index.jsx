import React from 'react';
import examLogo from '../../../assets/test.webp';
import PubSub from 'pubsub-js';

import { SolutionOutlined, InfoCircleOutlined, LockOutlined, ApartmentOutlined, QuestionOutlined, TagsOutlined, SmileOutlined, UserOutlined, SettingOutline, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Layout, Menu, Dropdown, Space, theme } from 'antd';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';


const { Header } = Layout;


// 默认选中的菜单的key
const defaultSelectedKeys = ['home'];




class HeaderInfo extends React.Component {
    // 后台管理菜单项
    admin_menu = (
        <Dropdown dropdownRender={menu => (<div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '10px', padding: '10px',
            backgroundColor: "#ffffff"
        }}>
            <Space style={{
                padding: 8,
            }}>
                <div onClick={() => this.handleIconClick("admin_question")}>
                    <QuestionOutlined style={{ fontSize: "40px" }} />
                    <div>问题</div>
                </div>
            </Space>

            <Space style={{
                padding: 8,
            }}>
                <div onClick={() => this.handleIconClick("admin_user")}>
                    <UserOutlined style={{ fontSize: '55px', color: "#20b0fa" }} />
                    <div>用户</div>
                </div>
            </Space>


            <Space style={{
                padding: 8,
            }}>
                <div onClick={() => this.handleIconClick("admin_tag")}>
                    <TagsOutlined style={{ fontSize: '40px', color: "#43e554" }} />
                    <div>标签</div>
                </div>

            </Space>


            <Space style={{
                padding: 8,
            }}>
                <div onClick={() => this.handleIconClick("admin_category")}>
                    <ApartmentOutlined style={{ fontSize: "40px" }} />
                    <div>分类</div>
                </div>
            </Space>

        </div>)}>
            <a onClick={e => e.preventDefault()}>
                <Space>
                    <SettingOutlined style={{ fontSize: '24px' }} />
                </Space>
            </a>
        </Dropdown>
    );


    // 头部导航栏菜单项
    menuItems = [
        {
            key: "home",
            icon: <SolutionOutlined />,
            label: "Home",
            onClick: () => this.handleIconClick("home")
        },
        {
            key: "about",
            icon: <InfoCircleOutlined />,
            label: "About",
            onClick: () => this.handleIconClick("about")

        },
        {
            key: "admin",
            style: { marginLeft: 'auto' },
            label: this.admin_menu,
        },
        {
            key: "userInfo",
            icon: <UserOutlined style={{ fontSize: '24px' }} />,
            children: [
                {
                    key: "userInformation",
                    label: "用户xxxx",
                },
                {
                    key: "logout",
                    label: "退出登录",
                    onClick: () => this.handleIconClick("logout")
                }
            ]
        }
    ]

    handleIconClick = (type) => {
        console.log(`点击了${type}`);
        switch (type) {
            case "admin_user":
                this.props.history.push('/admin_user');
                break;
            case "admin_question":
                this.props.history.push('/admin_question');
                break;
            case "admin_tag":
                this.props.history.push('/admin_tag');
                break;
            case "admin_category":
                this.props.history.push('/admin_category');
                break;
            case "about":
                this.props.history.push('/about');
                break;
            case "home":
                this.props.history.push('/home');
                break;
            case "logout":
                this.props.history.push('/login');
                break;
            default:
                break;
        }
    };

    // 点击菜单项的回调
    // handleClick = (e) => {
    //     let item_key = e.key;
    //     console.log('点击了菜单项:', item_key);

    //     // PubSub.publish('menu-item-click', item_key);
    // }

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
                items={this.menuItems}
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
            // onClick={this.handleClick}
            />
        </Header>

    }
}

export default withRouter(HeaderInfo);