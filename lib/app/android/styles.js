import React, {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    menu: {
        backgroundColor: 'white',
    },
    navBarTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    navBarTitleText: {
        fontSize: 20,
        marginLeft: 60,
        fontWeight: '500'
    },
    navBarLeftButton: {
        paddingLeft: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    navBarLeftButtonText: {
        paddingLeft: 10
    },
    navBarLeftButtonBack: {
        marginLeft: 10
    },
    navBarLeftButtonGroup:{
        marginTop: 5,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        flexDirection: 'row',
    },
    navBarRightButton: {
        marginTop: 5,
        paddingRight: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
});
