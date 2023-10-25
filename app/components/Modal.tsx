"use client"

import React, { createContext, useContext, useState } from 'react';
import { Input, Modal, Tooltip } from 'antd';
import { ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';
import logo1INCH from "@/public/icons/1INCH.svg"
import logoBUSD from "@/public/icons/BUSD.svg"
import logoUSDC from "@/public/icons/USDC.svg"
import logoATOM from "@/public/icons/ATOM.svg"
import logoLUNA from "@/public/icons/LUNA.svg"
import ModalCard from './ModalCard';

interface ModalProps {
  open: boolean;
  handleOK: () => void;
  handleCancel: () => void;
  handleClick: (logo: any, name: string) => void;
}

const ModalToken: React.FC<ModalProps> = ({ open, handleOK, handleCancel, handleClick }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  // Filtered tokens based on search value
  const filteredTokens = [
    { logo: logo1INCH, name: '1INCH', description: '1INCH' },
    { logo: logoBUSD, name: 'BUSD', description: 'BUSD' },
    { logo: logoUSDC, name: 'USDC', description: 'USDC' },
    { logo: logoATOM, name: 'ATOM', description: 'ATOM' },
    { logo: logoLUNA, name: 'LUNA', description: 'LUNA' }
  ].filter(token =>
    token.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    token.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Modal
      title="Select a token"
      centered
      open={open}
      onOk={handleOK}
      onCancel={handleCancel}
    >
      <Input
        className="w-full"
        placeholder="Search name or paste address"
        prefix={<SearchOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title="Extra information">
            <ArrowRightOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        }
        value={searchValue}
        onChange={handleSearchChange}
      />
      {filteredTokens.map(token => (
        <ModalCard
          handleClick={handleClick}
          key={token.name}
          logo={token.logo}
          name={token.name}
          description={token.description}
        />
      ))}
    </Modal>
  );
};

export default ModalToken;