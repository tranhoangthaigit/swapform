"use client"

import React, { useEffect, useState } from 'react';
import { GearFill } from 'react-bootstrap-icons';
// import PageButton from './components/PageButton';
// import ConnectButton from './components/ConnectButton';
// import ConfigModal from './components/ConfigModal';
import CurrencyField from '../components/CurrencyField';
import BeatLoader from 'react-spinners/BeatLoader';
import { getPrice } from '../services/getPrices';

const Form: React.FC = () => {
  const [signerAddress, setSignerAddress] = useState<string>();
  // const [signer, setSigner] = useState(undefined)
  const [slippageAmount, setSlippageAmount] = useState<number>(2);
  const [deadlineMinutes, setDeadlineMinutes] = useState<number>(10);
  const [showModal, setShowModal] = useState<boolean>(false);

  const [inputAmount, setInputAmount] = useState<string>();
  const [outputAmount, setOutputAmount] = useState<string>("1");
  const [transaction, setTransaction] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [ratio, setRatio] = useState<number>();
  const [wethContract, setWethContract] = useState<any>();
  const [uniContract, setUniContract] = useState<any>();
  const [wethAmount, setWethAmount] = useState<number>();
  const [uniAmount, setUniAmount] = useState<number>();

  const getSwapPrice = (inputAmount: string) => {
    setLoading(true);
    setInputAmount(inputAmount);
  };

  return (
    <div className="App">
      {/* <div className="appNav">
        <div className="my-2 buttonContainer buttonContainerTop">
          <PageButton name={'Swap'} isBold={true} />
          <PageButton name={'Pool'} />
          <PageButton name={'Vote'} />
          <PageButton name={'Charts'} />
        </div>

        <div className="rightNav">
          <div className="connectButtonContainer">
            <ConnectButton
            />
          </div>
          <div className="my-2 buttonContainer">
            <PageButton name={'...'} isBold={true} />
          </div>
        </div>
      </div> */}

      <div className="appBody">
        <div className="swapContainer">
          <div className="swapHeader">
            <span className="swapText mr-2">Swap</span>
            <span className="swapText">Buy</span>
            <span
              className="settingButton"
              onClick={() => setShowModal(true)}
            >
              <GearFill />
            </span>
            {/* {showModal && (
              <ConfigModal
                onClose={() => setShowModal(false)}
                setDeadlineMinutes={setDeadlineMinutes}
                deadlineMinutes={deadlineMinutes}
                setSlippageAmount={setSlippageAmount}
                slippageAmount={slippageAmount}
              />
            )} */}
          </div>

          <div className="swapBody">
            <CurrencyField
              field="input"
             tokenName="WETH"
              getSwapPrice={getSwapPrice}
              balance={wethAmount}
              // signer={signer}
            />
            <CurrencyField
              // signer={signer}
              field="output"
              tokenName="UNI"
              value={outputAmount}
              balance={uniAmount}
              spinner={BeatLoader}
              loading={loading}
            />
          </div>

          <div className="ratioContainer">
            {ratio && <>1 UNI = {ratio} WETH</>}
          </div>

          <div className="swapButtonContainer">
              <div
                className="swapButton"
              >
                Connect Wallet
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;