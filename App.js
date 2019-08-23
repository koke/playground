import React from 'react';
import { StyleSheet, View } from 'react-native';

import Image from './Image';

export default function App() {
  const uri = 'https://sandbox.koke.me/wp-content/uploads/2019/07/E4D6D6CD-7C80-40BE-9A25-886D47B96791-1024x1024.jpg';

  return (
    <View style={styles.container}>
      <Image
        src={ uri }
        style={ styles.image }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
  },
});
