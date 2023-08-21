
import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import R from '../../res/R';

//custom component for button
const Button = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.component}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

//export component
export default Button;

const styles = StyleSheet.create({
    component: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: wp('80%'),
        marginTop: hp(2),
        borderRadius: 20,
        borderWidth: 1,
        borderColor: R.colors.WHITE,
    },
    buttonText: {
        color: R.colors.WHITE,
        fontSize: wp('5%'),
        textAlign: 'center',
    },
});