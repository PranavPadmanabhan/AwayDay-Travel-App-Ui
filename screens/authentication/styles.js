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
        fontWeight:"600"
    },
    heading2:{
        color:"#5c42ae",
        fontSize:28,
        fontWeight:"700",
        marginBottom:20,
    },
    para:{
        width:"70%",
        color:"black",
        fontSize:16
    },
    ImageContainer:{
        width:width * 0.25,
        height:width * 0.25,
        borderRadius:25,
        marginLeft:20,
        
    },
    Image:{
        width:"100%",
        height:"100%",
        resizeMode:"cover",
        borderRadius:25,
    },
    camera:{
        borderColor:"white",
        borderWidth:3,
        backgroundColor:"#5c42ae",
        width:height * 0.05,
        height:height *0.05,
        position:"absolute",
        bottom:0,
        right:-20,
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center"

    },
    Btn:{
        width:width * 0.8,
        backgroundColor:"#5c42ae",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
        height:55,
        borderRadius:10,
        marginTop:height * 0.03
    },
    BtnText:{
        color:"white",
        fontWeight:"800",
        fontSize:22

    },


})

export default styles