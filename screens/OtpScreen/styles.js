import { StyleSheet } from "react-native";
import constants from '../../constants/constants'

const { height, width} = constants;

const styles = StyleSheet.create({
    background:{
        flex:1,
        width:width,
        height:height,
        paddingTop: height * 0.05,
        backgroundColor:"white"
    },
    IconBackground:{
        marginLeft:15,
        backgroundColor:"rgba(207, 207, 207, 0.6)",
        width:40,
        height:40,
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center"
    },
    Textcontainer:{
        width:width,
        paddingLeft:20,
        marginTop:height * 0.04,
        marginBottom:height * 0.08
    },
    heading1:{
        color:"#5c42ae",
        fontSize:22,
        fontWeight:"700"
    },
    para1:{
        color:"#9a95ba",
        fontSize:16,
        fontWeight:"700",
        marginBottom:25,
        marginTop:10
    },
    para2:{
        width:"70%",
        color:"#9a95ba",
        fontSize:14
    },
    innerText:{
        color:"#9a95ba",
        fontWeight:"bold",
        fontSize:15
    },
    InputContainer:{
        width:width * 0.7,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        alignSelf:"center",
        height:60,
        marginBottom:20
    },
    timer:{
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"center",
        justifyContent:"center"
    },
    input:{
        width:50,
        height:50,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        marginHorizontal:width*0.06
    },
    inputText:{
        color:"black",
        fontSize:18
    }
});

export default styles