"use client"

import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import Image from 'next/image'
import { Input, Tooltip , Button } from 'antd';
import logo1INCH from "@/public/icons/1INCH.svg";
import logoETH from "@/public/icons/ETH.svg";

const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '4',
      danger: true,
      label: 'a danger item',
    },
  ];
  
const Header: React.FC = () => {    
    return (
        <div className="m-4 flex justify-between items-center">
            <div className="flex">
                <Image src={logo1INCH} alt="1inch"/>
                <h4 className="ml-8">Swap</h4>
                <h4 className="ml-8">Tokens</h4>
                <h4 className="ml-8">NFTs</h4>
                <h4 className="ml-8">Pools</h4>
                <h4 className="ml-8">...</h4>
            </div>
            <Input
            className="w-96"
            placeholder="Search tokens and NFT collections"
            prefix={<UserOutlined className="site-form-item-icon" />}
            suffix={
                <Tooltip title="Extra information">
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
            }
            />
            <div className="flex justify-between items-center">
                <Dropdown menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <Image src={logoETH} alt="eth"/>
                        <DownOutlined />
                    </Space>
                    </a>
                </Dropdown>

                <Button className="ml-4" type="primary" shape="round" size="large">
                    Connect
                </Button> 
            </div>
        </div>
    )
}   

export default Header;