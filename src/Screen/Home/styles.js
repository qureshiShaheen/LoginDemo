//imports styles
import { StyleSheet } from 'react-native';

import R from '../../res/R';
import { moderateScale } from '../../utills/Scalling';

//styles for managing styles
export const styles = StyleSheet.create({
    contenair: {
        flex: 1,
    },
    subContainer: {
        marginHorizontal: '8%',
        marginTop: 5
    },
    headingText: {
        color: R.colors.DARK_BROWN,
        fontSize: R.FontSize.F_35,
        alignSelf: 'center',
        marginTop: '5%',
        fontWeight: '700'
    },
    buttonText: {
        color: R.colors.DARK_BROWN,
        textAlign: 'center',
    },
    listView: {
        paddingVertical: moderateScale(10),
        borderRadius: 15,
        padding: 2,
        borderColor: '#952D24',
        borderWidth: 2,
        marginVertical: '2%',
    },
    listViewText: {
        fontWeight: 'bold',
        color: R.colors.BLACK,
        marginHorizontal: '8%',
    },
    listViewTextBody: {
        fontWeight: 'bold',
        color: '#666666',
        marginHorizontal: '8%',
        marginTop: '3%'
    },
    viewList: {
        marginHorizontal: '8%',
        marginTop: '5%'
    },
    buttonView: {
        alignItems: 'center',
        backgroundColor: R.colors.DARK_BROWN,
        borderRadius: 10,
        height: moderateScale(50),
        width: moderateScale(130),
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: 10,
    },
    buttonText: { color: 'white' },
    loading: { alignSelf: 'center', color: R.colors.BLACK }
});