import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Image from './Image';

function Gallery() {
  const uris = [
    'https://sandbox.koke.me/wp-content/uploads/2019/07/E4D6D6CD-7C80-40BE-9A25-886D47B96791-1024x1024.jpg',
    'https://sandbox.koke.me/wp-content/uploads/2019/07/UcdzcI53QTenNzbk5Lx0PQ-e1563887552937-768x1024.jpg',
    'https://sandbox.koke.me/wp-content/uploads/2019/07/pKuQ70wSK6IDok41tcQ-1024x768.jpg',
  ];

  return (
    <View style={ styles.container }>
      <Text style={ styles.paragraph }>Before gallery</Text>
      <View style={ styles.gallery }>
      { uris.map( uri => (
        <Image
        key={ uri }
        source={ { uri } }
        style={ styles.image }
        resizeMode="contain"
        />
        ) ) }
      </View>
      <Text style={ styles.paragraph }>After gallery</Text>
    </View>
  );
}

export default function App() {
  // return <Gallery />;
  return (
    <ScrollView style={ styles.scrollView }>
      <Gallery />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    ...StyleSheet.absoluteFillObject,
    top: 44,
  },
  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  gallery: {
    backgroundColor: '#f00',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    minWidth: '50%',
  },
  paragraph: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 24,
  }
});
