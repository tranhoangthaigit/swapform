import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Input, MenuProps, Space } from "antd";

interface SwapFieldProps {
    title : string;
    iconToken : any;
    tokenName : string; 
    handleOpen : () => void;
}

const CurrencyField: React.FC<SwapFieldProps>= ({title,iconToken,tokenName,handleOpen}) => {
    return (
        <div className="w-full bg-neutral-100 p-4 rounded-2xl">
            <div className="flex-col">
                <h5>{title}</h5>
                <div className="flex">
                    <Input placeholder="0" bordered={false} className="text-2xl"/>
                    <div className="bg-white rounded-2xl">
                    <a className="flex p-2" onClick={handleOpen}>
                        <Space>
                        {iconToken}
                        {tokenName}
                        <DownOutlined />
                        </Space>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyField;