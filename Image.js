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
    },
    image: {
        flex: 1,
    },
});
  