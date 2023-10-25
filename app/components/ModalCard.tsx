"use client"

import Image from "next/image";

interface ModalCard {
  logo : any;
  name : string;
  description : string;
  handleClick: (logo: any, name: string) => void;
}

const ModalCard: React.FC<ModalCard> = ({logo,name,description,handleClick}) => {

  const handleCardClick = () => {
    handleClick(logo, name);
  };

  return (
    <div className="flex mt-2 hover:bg-slate-50" onClick={handleCardClick}>
    <Image src={logo} alt="1inch" className='mr-2'/>
    <div>
      <h5 className='font-bold'>{name}</h5>
      <h5>{description}</h5>
    </div>
  </div>
  )
}

export default ModalCard;