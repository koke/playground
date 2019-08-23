import { Image } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function( props ) {
    const { src, width } = props
    
    const [ size, setSize ] = useState({});
    useEffect(() => {
        Image.getSize( src, ( width, height ) => setSize( { width, height } ) )
    }, [ setSize, src ]);
    
    const ratio = size.width / size.height;
    
    const style = {
        maxWidth: width,
        flex: 1,
        borderWidth: 1,
        borderColor: 'blue',
        marginBottom: 8,
        backgroundColor: 'yellow',
        // maxWidth: '100%',
    }
    
    return (
        <Image
            style={ style }
            source={ { uri: src } }
            resizeMode="contain"
        />
    );
}