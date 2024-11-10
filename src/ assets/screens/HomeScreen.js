import React from 'react';
import { View, Text, Button } from 'react-native';
import RewardCard from '../components/RewardCard';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const userWallet = useSelector((state) => state.user.wallet);
  const rewards = useSelector((state) => state.activity.rewards);

  return (
    <View>
      <Text>Welcome {userWallet ? userWallet.address : 'Guest'}</Text>
      <Button title="View Wallet" onPress={() => {}} />
      {rewards.map((reward, index) => (
        <RewardCard key={index} title={reward.title} points={reward.points} />
      ))}
    </View>
  );
};

export default HomeScreen;

