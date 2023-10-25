import React, { useState } from 'react';
import { Input, Modal, Tooltip } from 'antd';
import { ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';
import { getPrice } from "@/api";

interface Modal {
  open : boolean;
  handleOK : () => void;
  handleCancel : () => void;
}



const  ModalToken: React.FC<Modal> = ({open , handleOK , handleCancel}) => {

  // const priceToken = await getPrice();

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
            prefix={<SearchOutlined className="site-form-item-icon"/>}
            suffix={
                <Tooltip title="Extra information">
                <ArrowRightOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
            }
          />

    </Modal>
  );
};

export default ModalToken;