import React from 'react';
import { Layout, } from 'antd';
import { Route, Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import AdminUser from './../../../pages/admin_user';
import AdminTag from './../../../pages/admin_tag';
import AdminCategory from './../../../pages/admin_category';
import AdminQuestion from './../../../pages/admin_qa';
import Home from './../../../pages/home';
import About from './../../../pages/about';

const { Content, } = Layout;

export default class ContentInfo extends React.Component {

    componentDidMount() {
        // 当内容组件挂载完毕时, 订阅菜单项点击事件
        // this.token = PubSub.subscribe('menu-item-click', (msg, data) => {
        //     console.log("content组件", msg, data, typeof data);
        //     // this.menuItemSelect = data;
        //     switch (data) {
        //         case 'home':
        //             this.setState(this.content = <div>Home</div>)
        //             break;
        //         case 'about':
        //             this.setState(this.content = <div>About</div>)
        //             break
        //         case 'admin':
        //             this.setState(this.content = <div>Admin</div>)
        //             break
        //         default:
        //             this.setState(this.content = <div>Home</div>)
        //             break;
        //     }
        // })

    }

    render() {
        return <Content
            style={{
                padding: '0 48px',
                width: '100%',
                height: '500px',
            }}
        >


            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/admin_user" component={AdminUser} />
                    <Route path="/admin_tag" component={AdminTag} />
                    <Route path="/admin_category" component={AdminCategory} />
                    <Route path="/admin_question" component={AdminQuestion} />

                    <Redirect to="/home" />
                </Switch>
            </div>
        </Content>

    }
}