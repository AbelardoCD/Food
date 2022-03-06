import {
    NativeSyntheticEvent,
    StyleSheet,
    Text,
    TextInput,
    TextInputChangeEventData,
    View
} from 'react-native';
import { ReactElement, ReactNode } from 'react';
const CustomInput = <T, K extends keyof T>({
    icon,
    title,
    setData
}: {
    title: string;
    icon: ReactNode | ReactNode[];
    setData: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}) => {
    return (
        <View style={styles.container_input}>
            <TextInput
                nativeID={title}
                onChange={(e) => setData(e)}
                placeholderTextColor="#000000"
                style={styles.textInput}
                placeholder={title}
            />
            {icon}
        </View>
    );
};

const styles = StyleSheet.create({
    container_input: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#F9D8D8',
        flexDirection: 'row',
        backgroundColor: '#FCECEC',
        alignItems: 'center',
        padding: 10,
        marginTop: 10
    },
    textInput: {
        width: '90%',
        height: '100%',
        marginLeft: 10,
        color: '#000000'
    }
});
export default CustomInput;
