import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    NativeSyntheticEvent,
    TextInputChangeEventData,
    View,
    TextInput
} from 'react-native';

import { useEffect, useState } from 'react';
import CustomInput from '../miscelaneous/CustomInput.tsx/CustomInput';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Blob from '../../assets/blob.svg';
import Logo from '../../assets/logo.png';
import Burger from '../../assets/burger.png';

import SecondaryButton from './../miscelaneous/secondaryButton/SecondaryButton';
const Login = () => {
    const [login, setLogin] = useState<{ email: string; password: string }>({
        email: '',
        password: ''
    });

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Image source={Logo} />
                <Image style={styles.burger} source={Burger} />
            </View>
            <View style={styles.loginContainer}>
                <View style={styles.container_input}>
                    <TextInput
                        value={login.email}
                        onChangeText={(e: string) =>
                            setLogin({
                                ...login,
                                email: e
                            })
                        }
                        placeholderTextColor="#ffffff"
                        style={styles.textInput}
                        placeholder={'Email'}
                    />
                    <MaterialCommunityIcons
                        name="email-multiple-outline"
                        size={24}
                        color="#F3B2B2"
                    />
                </View>

                <View style={styles.container_input}>
                    <TextInput
                        onChangeText={(e: string) =>
                            setLogin({
                                ...login,
                                password: e
                            })
                        }
                        placeholderTextColor="#ffffff"
                        style={styles.textInput}
                        placeholder={'Password'}
                        secureTextEntry={true}
                    />
                    <AntDesign name="unlock" size={24} color="#F3B2B2" />
                </View>
                <SecondaryButton title="Log in" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
        flex: 2
    },
    headerContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    loginContainer: {
        flex: 1,
        backgroundColor: '#F3B2B2',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_input: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#F9D8D8',
        flexDirection: 'row',
        backgroundColor: '#F9D8D8',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        shadowColor: '#ffffff',
        shadowOffset: {
            width: 0,
            height: -4
        },
        shadowOpacity: 100,
        shadowRadius: 4.65,

        elevation: 8
    },
    textInput: {
        width: '90%',
        height: '100%',
        marginLeft: 10,
        color: '#ffffff'
    },
    burger: {
        position: 'absolute',
        bottom: -60,
        right: -60,
        transform: [{ rotate: '-10deg' }]
    }
});
export default Login;
