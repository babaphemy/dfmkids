import { StyleSheet , Dimensions } from "react-native";
import {  sizeHeight, sizeWidth } from "../../../utils/size";


const width = Dimensions.get('window').width;
const phoneWidth = width < 500 ? true : false;

let styles = StyleSheet.create({
    exercise: {
        padding: phoneWidth ? 10 : 50,
        display: 'flex',
        marginBottom: 20,
        justifyContent: 'flex-start',
        marginHorizontal: 20
    },
    qtn: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    qtnText: { color: '#000' },
    set: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    innerSet: {
        flexDirection: 'row',
        paddingVertical: 30,
        justifyContent: 'flex-end',
        height: 100,
        alignItems: 'center',
    },
    innerSetMobile: {
        flexDirection: 'row',
        paddingVertical: 30,
        justifyContent: 'space-between',
        height: 100,
        alignItems: 'center',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    left: {},
    right: {},
    coin: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    img: {
        resizeMode: 'contain',
        width: sizeWidth(8),
        height: sizeHeight(6),
    },
    dimeImg: {
        resizeMode: 'contain',
        width: sizeWidth(50),
        height: sizeHeight(15),
    },
    input: {
        height: 40,
        marginHorizontal: 12,
        marginVertical: 3,
        borderWidth: 1,
        padding: 10,
        width: 200,
    },
    inputMobile: {
        height: 40,
        marginHorizontal: 12,
        marginVertical: 3,
        borderWidth: 1,
        padding: 10,
        width: 'auto',
    },
    frow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})

export default styles;