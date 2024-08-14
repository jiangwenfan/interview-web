import React, { Component } from "react";
import { Card, Flex } from 'antd';
import { LinuxOutlined, ArrowRightOutlined } from '@ant-design/icons';
import './index.css';

export default class Login extends Component {
    state = {
        inputFocus: false
    }

    inputInfo = React.createRef();
    input = React.createRef();


    handleInputFouce = () => {
        console.log("div获取光标");

        //设置input获取光标
        this.input.current.focus();

        // 获取input输入值
        const { value } = this.input.current;
        if (value) {
            console.log("将光标给下一步尖头")
        } else {
            console.log("input获取光标");
            const { placeholder } = this.input.current;

            // 清空placeholder
            this.input.current.placeholder = "";

            // 给div设置提示信息
            this.inputInfo.current.textContent = placeholder;

            this.setState({
                inputFocus: true
            });
        }


    }

    handleInputBlur = (event) => {
        // 获取placeholder
        const { textContent } = this.inputInfo.current

        // 获取输入框的值
        const { value } = event.target;

        if (value) {
            console.log(`输入框不为空，失去光标${value}`);
            return;
        } else {
            console.log(`输入框为空，失去光标 ${value}`);
            // 只有当输入框为空的时候，才进行下面的操作
            // 关闭span
            this.inputInfo.current.textContent = "";

            event.target.placeholder = textContent;

            this.setState({
                inputFocus: false
            });
        }

    }

    render() {
        const { inputFocus } = this.state;
        return (
            <Flex justify="center" style={{ height: "100vh", paddingTop: "5%" }}>
                <Card style={{
                    width: 477,
                    height: 454,
                    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.3)',
                }}>
                    <div style={{ textAlign: "center", marginTop: "11px" }}>
                        <LinuxOutlined style={{ fontSize: "112px" }} />
                    </div>
                    <div style={{ fontSize: "22px", fontWeight: "bold", textAlign: "center", marginTop: "20px" }}>Sign in with Apple ID</div>
                    {/* 输入框 */}
                    <div style={{ border: "1px solid #ccc", width: "100%", height: "60px" }} onClick={this.handleInputFouce}>
                        {/* className="scale-text" */}
                        <span ref={this.inputInfo} style={{ display: "block", fontSize: "12px", height: "15px", margin: "0", padding: "0" }} ></span>
                        <div>
                            <input type="text" ref={this.input} onBlur={this.handleInputBlur} placeholder="输入邮箱" style={{ border: "none", outline: "none", height: "30px", fontSize: "20px" }}></input>
                            {inputFocus ? <ArrowRightOutlined style={{ fontSize: "24px" }} /> : null}
                        </div>

                    </div>

                </Card>
            </Flex>
        )
    }
}