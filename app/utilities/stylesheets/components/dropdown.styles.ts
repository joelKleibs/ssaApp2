import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
// export const ICONS = {
//     ARROW_DOWN: require(''),
//     ARROW_UP: require(''),
//     TICK: require(''),
//     CLOSE: require('')
// };

export default StyleSheet.create({
    container: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 20
    },
    dropdownContainer: {
        position: 'absolute',
        zIndex: 1000, 
        overflow: 'hidden'
    },
    selectedItemLabel:{
        fontWeight: 'bold'
    },
    text: {
        fontWeight: 'normal',
        fontSize: windowWidth / 100 * 45 / 11
    },
    label: {
        fontWeight: 'bold'  
    },
    green: {
        backgroundColor: '#00eb96',
        borderColor: '#00eb96'
    },
    white: {
        backgroundColor: '#ffffff',
        borderColor: '#ffffff'
    }
})