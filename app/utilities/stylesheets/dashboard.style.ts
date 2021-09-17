
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default StyleSheet.create({
    background: {
        backgroundColor: '#eaeaea',
        padding: 10,
        flex: 1,
    },
    tilesContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        marginLeft: "5%",
        marginRight: "5%",
        alignItems: 'center',
        flex: 1
    },
    tileView: {
        height: "18%",
        width: "34%",
        marginLeft: "10%",
        marginBottom: "5%",
        marginTop: "5%",       
    },
    tile: {
        height: "90%",
        width: "100%",
        marginBottom: "7%",
        marginTop: "3%",
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 10

    },
    tileText: {
        color: "black",
        fontSize: windowWidth / 100 * 45 / 11,
        textAlign: 'center'
    },
    tileIcon: {
        fontSize: windowWidth / 100 * 48 / 3.5,
        
    }
  });