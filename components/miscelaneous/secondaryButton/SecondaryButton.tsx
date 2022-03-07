import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SecondaryButton = ({
    title,
    eventOnClick
}: {
    title: string;
    eventOnClick: () => void;
}) => {
    return (
        <View onTouchStart={() => eventOnClick()} style={styles.btn}>
            <Text style={styles.text}> {title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#E23E3E',
        width: '100%',
        padding: 20,
        color: 'red',
        borderRadius: 5,
        marginTop: 20,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: -4
        },
        shadowOpacity: 100,
        shadowRadius: 4.65,

        elevation: 8
    },
    text: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 2
    }
});

export default SecondaryButton;
