import { SolutionOutlined, InfoCircleOutlined, LockOutlined, ApartmentOutlined, QuestionOutlined, TagsOutlined, SmileOutlined, UserOutlined, SettingOutline, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Layout, Menu, Dropdown, Space, theme } from 'antd';

const handleIconClick = (type) => {
    console.log(`点击了${type}`);
};


// 菜单项
const menuItems = [
    {
        key: "home",
        icon: <SolutionOutlined />,
        label: "Home测试",
        contentComponent: <div>Home</div>
    },
    {
        key: "about",
        icon: <InfoCircleOutlined />,
        label: "About",
        contentComponent: <div>About</div>

    },
    {
        key: "admin",
        style: { marginLeft: 'auto' },
        label: (
            <Dropdown dropdownRender={menu => (<div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px', padding: '10px',
                backgroundColor: "#ffffff"
            }}>
                <Space
                    style={{
                        padding: 8,
                    }}
                >
                    <div onClick={handleIconClick("admin_question")}>
                        <QuestionOutlined style={{ fontSize: "40px", color: "red" }} />
                        <div>问题</div>
                    </div>
                </Space>


                <Space style={{
                    padding: 8,
                }}>
                    <div onClick={handleIconClick("admin_user")}>
                        <UserOutlined style={{ fontSize: '55px', color: "#20b0fa" }} />
                        <div>用户</div>
                    </div>
                </Space>


                <Space style={{
                    padding: 8,
                }}>
                    <div onClick={handleIconClick("admin_tag")}>
                        <TagsOutlined style={{ fontSize: '40px', color: "#43e554" }} />
                        <div>标签</div>
                    </div>

                </Space>


                <Space style={{
                    padding: 8,
                }}>
                    <div onClick={handleIconClick("admin_category")}>
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
        ),
    },
    {
        key: "userInfo",
        icon: <UserOutlined style={{ fontSize: '24px' }} />,
        children: [
            {
                key: "userInfo",
                label: "用户xxxx",
            },
            {
                key: "userSetting",
                label: "退出登录",
            }
        ]
    }
]
// 默认选中的菜单的key
// const defaultSelectedKeys = ['home'];

export default menuItems;