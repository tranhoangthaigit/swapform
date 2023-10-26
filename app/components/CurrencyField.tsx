"use client"

import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Input, MenuProps, Space } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getPrice } from "@/api";
import { onlyDecimal } from "../helpers/onlyNumber";

interface SwapFieldProps {
  autoInputValue? : string;
  title: string;
  iconToken: any;
  tokenName: string;
  handleOpen: (key: string) => void;
  handleInput: (value: string) => void;
  handlePrice: (price: number) => void;
}

const CurrencyField: React.FC<SwapFieldProps> = ({
  title,
  iconToken,
  tokenName,
  handleOpen,
  handleInput,
  handlePrice,
  autoInputValue
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [priceToken, setPriceToken] = useState<number>();

  const handlePopup = () => {
    handleOpen(title);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const decimalValue = onlyDecimal(value); // Lấy giá trị thập phân từ value
    handleInput(decimalValue);
    console.log('decimalValue',decimalValue)
    setInputValue(decimalValue); // Cập nhật inputValue bằng giá trị thập phân
  };

  const validateInput = (value: string): boolean => {
    const parsedValue = parseFloat(value);
    return !isNaN(parsedValue) && parsedValue > 0;
  };

  useEffect(() => {
    const fetchPrice = async () => {
      const tokenPrice = await getPrice();
      const priceTokenSelected = tokenPrice?.find((price) => price.currency === tokenName)?.price
      if (priceTokenSelected !== undefined) {
        const calculatedPriceToken = priceTokenSelected * parseFloat(inputValue);
        handlePrice(calculatedPriceToken);
        setPriceToken(calculatedPriceToken);
      }
    };
    fetchPrice();
  }, [inputValue,tokenName]);

  return (
    <div className="w-full bg-neutral-100 p-4 rounded-2xl">
      <div className="flex-col">
        <h5>{title}</h5>
        <div className="flex">
          <Input
            placeholder="0"
            bordered={false}
            className="text-2xl"
            value={title !== "You pay" ? autoInputValue : inputValue}
            onChange={handleInputChange}
          />
          <div className="bg-white rounded-2xl w-48">
            <a className="flex p-2" onClick={handlePopup}>
              <Space>
                {iconToken !== "" && <Image src={iconToken} alt={tokenName} />}
                {tokenName}
                <DownOutlined />
              </Space>
            </a>
          </div>
        </div>
      </div>
      {inputValue !== "" && !validateInput(inputValue) ? (
        <p className="text-red-500">
          Please enter a valid number greater than 0.
        </p>
      ) : (
        (iconToken !== "" && tokenName !== "" && inputValue !== "") && (priceToken !== undefined && !isNaN(priceToken)) && (
          <p>${priceToken}</p>
        )
      )}
    </div>
  );
};

export default CurrencyField;