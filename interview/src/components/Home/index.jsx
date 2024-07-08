import React from 'react';
import { Layout } from 'antd';
import HeaderInfo from './HeaderInfo';
import ContentInfo from './ContentInfo';
import FooterInfo from './FooterInfo';




export default class Home extends React.Component {

    render() {
        return <Layout>
            <HeaderInfo />
            <ContentInfo />
            <FooterInfo />
        </Layout>
    }
}