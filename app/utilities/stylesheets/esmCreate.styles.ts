import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        width: '80%',
        height: '40%',
        marginLeft: '10%',
        borderRadius: 10,
        backgroundColor: '#00eb96'
    },
    imgContainer: {
        height: '90%',
        width: '20%',
        marginLeft: '2%',
        marginTop: '2%',
        marginRight: '5%',
        borderRadius: 10,
        backgroundColor: '#a3ffe2'
    },
    row: {
        width: '100%',
        height: '20%',
        marginBottom: '5%',
        flexDirection: 'row',
    },
    title: {
        fontSize: Dimensions.get('window').width / 100 * 5,
        fontWeight: 'bold',
        marginBottom: '5%'
    },
    category: {
        color: 'blue',
    },
    col: {
        marginTop: '2%'
    },
    button:{
        width: '80%',
        marginLeft: '10%',
        marginTop: '10%',
    },
    buttonContainer: {
        backgroundColor: '#ff8282',
        borderRadius: 10
    },
    buttonTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: windowWidth / 100 * 45 / 8.5,
    }
    
});