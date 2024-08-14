import React, { Component } from "react";
import { Button, Flex, Table, Tooltip } from "antd";
import { PlusOutlined, RedoOutlined, SelectOutlined, DeleteOutlined } from '@ant-design/icons';

export default class AdminTag extends Component {
    state = {
        // list[int]
        selectedRowKeys: [],
        loading: false,
    };

    onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        this.setState({
            selectedRowKeys: newSelectedRowKeys
        });
    };

    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        // setTimeout(() => {
        //     setSelectedRowKeys([]);
        //     setLoading(false);
        // }, 1000);
        console.log('start...');
    };

    dataSource = Array.from({
        length: 46,
    }).map((_, i) => ({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    }));

    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];

    addTag = () => {
        console.log('add tag');
    }


    render() {
        const { selectedRowKeys, loading } = this.state;
        const hasSelected = this.state.selectedRowKeys.length > 0;

        return (
            <Flex gap="middle" vertical>
                <Flex align="center" gap="middle">
                    <div style={{ width: "34%" }}>
                        {/* 正常情况下的刷新数据按钮 */}

                        <div style={{ display: hasSelected ? "none" : "inline", }}>
                            <Tooltip title="刷新" placement="bottom">
                                <Button type="text" icon={<RedoOutlined style={{ fontSize: "20px", color: "blue" }} />}>
                                </Button>
                            </Tooltip>

                        </div>

                        {/* 批量选中时，展示批量操作的功能 */}
                        <div style={{ display: hasSelected ? "inline" : "none" }}>
                            {hasSelected ? `选中: ${selectedRowKeys.length}条` : null}

                            <div style={{ marginLeft: "15px", display: "inline" }}>
                                {/* onClick={this.start} loading={loading} */}
                                <Tooltip title="批量删除" placement="bottom">
                                    <Button type="text" icon={<DeleteOutlined style={{ fontSize: "20px" }} />}>
                                    </Button>
                                </Tooltip>


                            </div>
                            <div style={{ marginLeft: "15px", display: "inline" }}>
                                <Tooltip title="反向选择" placement="bottom">
                                    <Button type="text" icon={<SelectOutlined style={{ fontSize: "20px" }} />}>
                                    </Button>
                                </Tooltip>

                            </div>

                        </div>

                    </div>

                    <div style={{ width: "33%", textAlign: "center" }}>
                        <div onClick={() => { this.addTag() }}>
                            <Tooltip title="添加标签" placement="bottom">
                                <Button type="text" icon={<PlusOutlined style={{ fontSize: "20px" }} />}>
                                </Button>
                            </Tooltip>
                        </div>
                    </div>
                    <div style={{ width: "33%" }}>

                    </div>

                </Flex>
                <Table rowSelection={{
                    selectedRowKeys,
                    onChange: this.onSelectChange,
                }
                } columns={this.columns} dataSource={this.dataSource} />
            </Flex>
        )
    }
}