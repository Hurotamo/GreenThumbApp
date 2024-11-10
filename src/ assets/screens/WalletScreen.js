import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

const WalletScreen = () => {
  const userWallet = useSelector((state) => state.user.wallet);

  return (
    <View>
      <Text>Your Wallet Address: {userWallet ? userWallet.address : 'Not connected'}</Text>
      <Button title="Disconnect Wallet" onPress={() => {}} />
    </View>
  );
};

export default WalletScreen;

