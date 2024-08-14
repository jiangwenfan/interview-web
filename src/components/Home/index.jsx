import React from 'react';
import { Layout } from 'antd';
import HeaderInfo from './HeaderInfo';
import ContentInfo from './ContentInfo';
import FooterInfo from './FooterInfo';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from '../../pages/login';




export default class Home extends React.Component {

    render() {
        return <Layout>
            <Switch>
                {/* 当输入/login的时候展示Login组件，其他路由展示下面3个组件 */}
                <Route path="/login" component={Login} />
                <Route path="/" render={() => (
                    <>
                        <HeaderInfo />
                        <ContentInfo />
                        <FooterInfo />
                    </>
                )} />
            </Switch>
        </Layout>
    }
}