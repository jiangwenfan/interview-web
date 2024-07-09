import { SolutionOutlined, InfoCircleOutlined, LockOutlined } from '@ant-design/icons';

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

    }, {
        key: "admin",
        icon: <LockOutlined />,
        label: "后台管理",
        contentComponent: <div>Admin</div>
    },
]
// 默认选中的菜单的key
// const defaultSelectedKeys = ['home'];

export default menuItems;