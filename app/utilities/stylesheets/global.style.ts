import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default StyleSheet.create({
    container: {
        backgroundColor: '#a3ffe2',
        marginTop: getStatusBarHeight(true),
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
});