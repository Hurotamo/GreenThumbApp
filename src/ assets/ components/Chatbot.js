import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { getChatbotResponse } from '../services/aiService';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = async () => {
    const botResponse = await getChatbotResponse(message);
    setResponse(botResponse);
    setMessage('');
  };

  return (
    <View>
      <TextInput
        placeholder="Ask a gardening question"
        value={message}
        onChangeText={setMessage}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <Button title="Send" onPress={handleSendMessage} />
      {response && <Text>{response}</Text>}
    </View>
  );
};

export default Chatbot;

