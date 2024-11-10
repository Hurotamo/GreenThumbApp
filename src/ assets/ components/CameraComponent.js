import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CameraComponent = ({ onCapture }) => {
  const [imageUri, setImageUri] = useState(null);

  const handleCapture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
      onCapture(result.uri);  // Pass captured image URI to parent
    }
  };

  return (
    <View>
      <Button title="Take a Picture" onPress={handleCapture} />
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default CameraComponent;

