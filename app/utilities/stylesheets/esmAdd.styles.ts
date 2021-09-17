import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
    },
    title: {
        marginLeft: '10%',
        marginTop: '10%',
        marginBottom: '2%',
        fontSize: windowWidth / 100 * 45 / 8.5,
        fontWeight: 'bold'   
    },
    buttonContainer: {
        backgroundColor: '#4fffc0',
        borderRadius: 10
    },
    button: {
        width: '80%',
        marginLeft: '10%',
        marginTop: '10%',
    },
    buttonTitle: {
        color: '#003493',
        fontWeight: 'bold',
        fontSize: windowWidth / 100 * 45 / 8.5,
    }
});