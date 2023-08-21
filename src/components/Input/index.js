
//imports componets
import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native'

//for responsive
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from '../../utills/Scalling';
import R from '../../res/R';


//custom component for input
const Input = ({
    placeholderTextColor,
    placeholder,
    onChangeText,
    value,
    keyboardType,
    secureTextEntry,
    error,
    maxLength,
    onSubmitEditing,
}) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholderTextColor={placeholderTextColor}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                maxLength={maxLength}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                onSubmitEditing={onSubmitEditing}
            />
            <Text style={styles.errorText}>
                {error ?? ""}
            </Text>
        </View>
    )
}

export default Input;

//styles
const styles = StyleSheet.create({
    input: {
        marginHorizontal: '8%',
        backgroundColor: R.colors.WHITE,
        borderRadius: 12,
        paddingLeft: moderateScale(12),
    },
    errorText: {
        color: R.colors.WHITE,
        margin: hp(0.5),
        marginHorizontal: '8%',
    }
})