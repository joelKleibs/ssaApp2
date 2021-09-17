import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        height: '10%',
        width: Dimensions.get('window').width,
        marginBottom: '5%'
        // flexDirection: 'row',
        // flex: 1
    },
    imageContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        flex: 1,
        marginTop: "3%"

    },
    image: {
        flex: 1,
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    line: {
        borderBottomColor: '#5c9985',
        borderBottomWidth: 1,
        marginLeft: "10%",
        marginRight: "10%"
    },
    
});