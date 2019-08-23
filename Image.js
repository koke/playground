import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

export default function( props ) {
    const { style, ...imageProps } = props
    
    return (
        <View style={ [ styles.container, style ] }>
            <Image
                style={ styles.image }
                { ...imageProps }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffc',
        borderColor: '#cc0',
        borderWidth: 1,
        padding: 4,
    },
    image: {
        flex: 1,
        borderColor: '#f00',
        backgroundColor: '#fcc',
        borderWidth: 1,
        padding: 4,
    },
});
  