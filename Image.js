import { Image, StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function( props ) {
    const { source, style, ...imageProps } = props
    const [ aspectRatio, setAspectRatio ] = useState(1);
    useEffect( () => {
        Image.getSize( source.uri, ( width, height ) => {
            setAspectRatio( width / height );
        } );
    }, [ source, setAspectRatio ] );
    
    return (
        <View style={ [ styles.container, style, { aspectRatio } ] }>
            <Image
                style={ styles.image }
                source={ source }
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
  