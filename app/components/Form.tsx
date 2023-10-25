"use client"

import { ArrowDownOutlined, SettingOutlined } from "@ant-design/icons";
import CurrencyField from "./CurrencyField";
import { Button } from "antd";
import ModalToken from "./Modal";
import { useState } from "react";

const Form: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleOK = () => {
    setModalOpen(false)
  }

  const handleCancel = () => {
    setModalOpen(false)
  }
  
  const handleOpen = () => {
    setModalOpen(true)
  }

  return (
    <div className="w-100 border-solid border-2 p-2 rounded-2xl bg-white">
      <div className="flex justify-between items-baseline">
        <div className="flex mb-4">
          <h5 className="mr-4">Swap</h5>
          <h5>Buy</h5>
        </div>
        <SettingOutlined />
      </div>
      <div className="flex flex-col space-y-2 ...">
        <CurrencyField title="You pay" iconToken="A" tokenName="ETH" handleOpen={handleOpen}/>
        <ArrowDownOutlined className="justify-center" />
        <CurrencyField title="You receive" iconToken="B" tokenName="ETH" handleOpen={handleOpen}/>
      </div>
      <div>
        <Button className="w-full mt-4 bg-fuchsia-100 text-fuchsia-500 !h-14 text-base font-bold">Connect Wallet</Button>
      </div>
      <ModalToken open={modalOpen} handleOK={handleOK} handleCancel={handleCancel}/>
    </div>
  );
}

export default Form;