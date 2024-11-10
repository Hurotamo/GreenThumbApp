import React from 'react';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUserWallet } from '../state/userSlice';
import { connectWallet } from '../services/solanaService';

const WalletConnectButton = () => {
  const dispatch = useDispatch();

  const handleConnect = async () => {
    const wallet = await connectWallet();
    if (wallet) {
      dispatch(setUserWallet(wallet));
    }
  };

  return <Button title="Connect Wallet" onPress={handleConnect} />;
};

export default WalletConnectButton;

