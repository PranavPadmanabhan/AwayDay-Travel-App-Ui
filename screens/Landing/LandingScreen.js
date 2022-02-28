import React from 'react'
import { ImageBackground, Pressable, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import Icon from "react-native-vector-icons/MaterialIcons"

function LandingScreen({navigation}) {
    return (
        <ImageBackground source={require("../../assets/Images/backgroung.jpg")} style={styles.background}>
            <StatusBar translucent backgroundColor={"transparent"}/>
            <View style={styles.IconBackground}>
            <Icon name='arrow-back' color={"white"} size={28}/>
            </View>
            <View style={styles.container}>
                <Text style={styles.heading}>Travel with us</Text>
                <Text style={styles.para}>Explore the most beautiful with the best deals on the ferry trips, travel activities, schedules and accomodations</Text>
            </View>
            <TouchableOpacity onPress={() =>navigation.navigate("authentication")} style={styles.signInBtn}>
                <Text style={styles.signInBtnText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>navigation.navigate("authentication")}  style={styles.signUpBtn}>
                <Text style={styles.signUpBtnText}>create Account</Text>
            </TouchableOpacity>
            <Pressable ><Text style={styles.skipBtn}>Skip</Text></Pressable>
        </ImageBackground>
    )
}

export default LandingScreen