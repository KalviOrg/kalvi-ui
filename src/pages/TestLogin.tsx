import React from "react";
import Button from "@mui/material/Button";
import { loginUser, StoreAction, useStore } from "../services/store";
import { Web3Provider } from "@ethersproject/providers";
import { CircularProgress } from "@mui/material";
import Sequence from "../services/sequence";
import { ethers } from "ethers";


declare const window: any

const Login: React.FC = () => {
  const store = useStore();

  async function connectMetamaskWallet(): Promise<void> {
    //to get around type checking
    (window as any).ethereum
      .request({
          method: "eth_requestAccounts",
      })
      .then((accounts : string[]) => {
        console.log(accounts[0]);
      })
      .catch((error: any) => {
          alert(`Something went wrong: ${error}`);
      });

      console.log("before loginUser");
      loginUser(new Web3Provider(window.ethereum), logout, store.dispatch);
  }

  async function connectSequence() {
    Sequence.connectWallet(true);
    try {
      const wallet = Sequence.init(handleLoginSequence, handleLogout);
      const session = wallet.getSession();
      if (session) {
        handleLoginSequence([session.accountAddress], wallet);

        return;
      }

    } catch (error) {
      console.error(error);
    }
  }

  const handleLoginSequence = async (accounts: string[], wallet) => {
    try {
      wallet.saveSession();
      const authProvider = await wallet.getProvider();
      const provider = new ethers.providers.Web3Provider(authProvider);
      loginUser(provider, () => logout(true), store.dispatch);
    } catch (error) {
      console.error(error);
      logout(true);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  const logout = (isSequence: boolean = false) => {
    if(isSequence) {
      try {
        Sequence.wallet?.disconnect();
      } catch (error) {
        console.error(error);
      }

      handleLogout();
    }

    try {
      handleLogout();
    } catch (error) {
      console.error(error);
    }

  };

  const handleLogout = () => {
    store.dispatch({ type: StoreAction.LOGOUT });
    window.location.replace("/");
  };

  return store.state.loggedIn ? (
    <>
        <CircularProgress />
    </>
  ) : (  <>
    <Button variant="contained" onClick={connectMetamaskWallet}>Connect using Metamask</Button>
    <Button variant="contained" onClick={connectSequence}>Connect using Sequence</Button>
    </>
  );
};

export default Login;
