import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

const Usuario = () => {
    return (
        <div>
            <Space direction="vertical" size={16}>
                <Space wrap size={16}>
                    <Avatar shape="square" size={64} icon={<UserOutlined />} />
                </Space>
            </Space>
        </div>
    )
}

export default Usuario