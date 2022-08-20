import React, { useState } from "react";
import Button from "@mui/material/Button";
import { loginUser, useStore } from "../services/store";
import { Web3Provider } from "@ethersproject/providers";


declare const window: any

const Login: React.FC = () => {
  const store = useStore();
  
  const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);
  async function connectMetamaskWallet(): Promise<void> {
    //to get around type checking
    (window as any).ethereum
      .request({
          method: "eth_requestAccounts",
      })
      .then((accounts : string[]) => {
        setEthereumAccount(accounts[0]);
      })
      .catch((error: any) => {
          alert(`Something went wrong: ${error}`);
      });

      console.log("before loginUser");
      loginUser(new Web3Provider(window.ethereum), store.dispatch);
  }

  return store.state.loggedIn ? (
    <>
    <p className="mt-2">{store.state.wallet} {ethereumAccount}</p>
    </>
  ) : (
    <Button variant="contained" onClick={connectMetamaskWallet}>Connect your wallet</Button>
  );
};

export default Login;
