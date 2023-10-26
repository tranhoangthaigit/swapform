"use client"

import { ArrowDownOutlined, SettingOutlined } from "@ant-design/icons";
import CurrencyField from "./CurrencyField";
import { Button } from "antd";
import ModalToken from "./Modal";
import { useEffect, useState } from "react";
import { getPrice } from "@/api";

const Form: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [swapFields, setSwapFields] = useState<boolean>(false);
  const [logoTokenPay , setLogoTokenPay] = useState<any>();
  const [nameTokenPay , setNameTokenPay] = useState<string>("");
  const [logoTokenReceive , setLogoTokenReceive] = useState<any>();
  const [nameTokenReceive , setNameTokenReceive] = useState<string>("");
  const [autoValue , setAutoValue] = useState<string>("");
  const [key , setKey] = useState<string>("");
  const [inputValue , setInputValue] = useState<string>("");
  const [priceToken, setPriceToken] = useState<number | undefined>();

  const handleOK = () => {
    setModalOpen(false)
  }

  const handleCancel = () => {
    setModalOpen(false)
  }

  const handleOpen = (key:string) => {
    setKey(key)
    setModalOpen(true)
  }

  const handleInput = (inputValue:string) => {
    setInputValue(inputValue)
  }

  const handlePrice = (price:number) => {
    setPriceToken(price)
  }

  const handleSwapFields = () => {
    setSwapFields(!swapFields);
  }

  useEffect(() => {
    const fetchPrice = async () => {
      const tokenPrice = await getPrice();
      const priceTokenReceived = tokenPrice?.find((price) => price.currency === nameTokenReceive)?.price
      if (priceTokenReceived !== undefined && priceToken !== undefined) {
        const calculatedPriceToken = priceToken / priceTokenReceived ;
        const priceReceive = calculatedPriceToken.toString();
        setAutoValue(priceReceive)
      }
    };
    fetchPrice();
  }, [logoTokenPay, nameTokenPay,inputValue,nameTokenReceive,logoTokenReceive,priceToken]);

  const handleClick = (logo: any, name: string) => {
    if(key === "You pay") {
      setLogoTokenPay(logo);
      setNameTokenPay(name);
    }
    else if(key === "You receive") {
      setLogoTokenReceive(logo);
      setNameTokenReceive(name);
    }
    handleOK();
  };

  return (
    <div className="w-100 border-solid border-2 p-2 rounded-2xl bg-white">
      <div className="flex justify-between items-baseline">
        <div className="flex mb-4">
          <h5 className="mr-4 ">Swap</h5>
          <h5>Buy</h5>
        </div>
        <SettingOutlined />
      </div>
      <div className="flex flex-col space-y-2 ...">
        {swapFields ? (
          <>
            <CurrencyField title="You receive" iconToken={logoTokenReceive ? logoTokenReceive : ""} tokenName={nameTokenReceive ? nameTokenReceive : "Select token"} handleOpen={handleOpen} handleInput={handleInput} handlePrice={handlePrice} autoInputValue={autoValue} />
            <ArrowDownOutlined className="justify-center" onClick={handleSwapFields} />
            <CurrencyField title="You pay" iconToken={logoTokenPay ? logoTokenPay : ""} tokenName={nameTokenPay ? nameTokenPay : "Select token"} handleOpen={handleOpen} handleInput={handleInput} handlePrice={handlePrice}/>
          </>
        ) : (
          <>
            <CurrencyField title="You pay" iconToken={logoTokenPay ? logoTokenPay : ""} tokenName={nameTokenPay ? nameTokenPay : "Select token"} handleOpen={handleOpen} handleInput={handleInput} handlePrice={handlePrice}/>
            <ArrowDownOutlined className="justify-center" onClick={handleSwapFields} />
            <CurrencyField title="You receive" iconToken={logoTokenReceive ? logoTokenReceive : ""} tokenName={nameTokenReceive ? nameTokenReceive : "Select token"} handleOpen={handleOpen} handleInput={handleInput} autoInputValue={autoValue} handlePrice={handlePrice}/>
          </>
        )}
      </div>
      <div>
        <Button className="w-full mt-4 bg-fuchsia-100 text-fuchsia-500 !h-14 text-base font-bold">Connect Wallet</Button>
      </div>
      <ModalToken open={modalOpen} handleCancel={handleCancel} handleClick={handleClick}/>
    </div>
  );
}

export default Form;