import { StyleSheet } from "react-native";
import constants from '../../constants/constants'

const { height, width} = constants

const styles = StyleSheet.create({
    background:{
        flex:1,
        width:width,
        height:height,
        resizeMode:"contain",
        paddingTop: height * 0.05
    },
    IconBackground:{
        marginLeft:15,
        backgroundColor:"rgb(53, 40, 77)",
        width:40,
        height:40,
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center"
    },
    container:{
        width:width,
        paddingTop:height * 0.1,
        marginBottom:height * 0.05
    },
    heading:{
        color:"white",
        alignSelf:"center",
        marginTop:height * 0.04,
        fontSize:width*0.09,
        fontWeight:"bold"
    },
    para:{
        color:"white",
        alignSelf:"center",
        marginTop:height * 0.04,
        width:"90%",
        textAlign:"center",
        fontSize:16
    },
    signInBtn:{
        width:width * 0.8,
        backgroundColor:"rgba(0,0,0,0.4)",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
        height:55,
        borderRadius:10,
        marginTop:height * 0.2
    },
    signInBtnText:{
        color:"white",
        fontWeight:"bold",
        fontSize:22
    },
    signUpBtn:{
        width:width * 0.8,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
        height:55,
        borderRadius:10,
        marginTop:height * 0.03
    },
    signUpBtnText:{
        color:"#5c42ae",
        fontWeight:"800",
        fontSize:22

    },
    skipBtn:{
        alignSelf:"center",
        color:"white",
        marginTop:height * 0.04,
        fontSize:18
    }

})

export default styles