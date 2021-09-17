import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        height: "20%",
        marginBottom: '5%',
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: 10,
        backgroundColor: "#00eb96",
        flex: 1
    },
    imgContainer: {
        height: '70%',
        width: '15%',
        marginLeft: '2%',
        marginTop: '2%',
        marginRight: '5%',
        borderRadius: 10,
        backgroundColor: '#a3ffe2'
    },
    row: {
        width: '100%',
        height: '70%',
        flexDirection: 'row',
    },
    title: {
        fontWeight: 'bold',
        marginTop: Dimensions.get('window').height / 100 * 1,
        fontSize: Dimensions.get('window').width / 100 * 4
    },
    type: {
        color: 'white',
        fontWeight: 'bold',
    },
    status: {
        marginLeft: '2%',
        marginBottom: '2%'
    }
});