import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import axios from 'axios';

const getData = (query) => {
    axios.get(`https://mock.apifox.com/m1/1151078-0-default/tags/?search=${query}`).then(
        response => {
            console.log(response.data, typeof response.data);
            return response.data;
        },
        error => {
            console.log(error);
        }
    )
}

const searchResult = (query) => {
    let res = getData(query);
    let category = 'Products';
    return res.map((item) => {
        return {
            value: category,
            label: (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <span>
                        {item}
                        <a
                            href={`https://s.taobao.com/search?q=${query}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {category}
                        </a>
                    </span>
                    <span>{1111} results</span>
                </div>
            ),
        }
    })
}

const handleSearch = (value) => {
    // setOptions(value ? searchResult(value) : []);
    console.log(value);
};
const onSelect = (value) => {
    console.log('onSelect: ', value);
};
export default class Label extends React.Component {
    render() {
        return <div>

            <AutoComplete
                popupMatchSelectWidth={252}
                style={{
                    width: 300,
                }}
                // options={options}
                onSelect={onSelect}
                onSearch={handleSearch}
                size="large"
            >
                <Input size="large" placeholder="输入label" enterButton />
            </AutoComplete>
        </div>
    }
}



