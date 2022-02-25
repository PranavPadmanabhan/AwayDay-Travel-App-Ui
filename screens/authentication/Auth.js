import React from 'react'
import { Image, ImageBackground, Pressable, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import Icon from "react-native-vector-icons/MaterialIcons"

function Auth() {
    return (
        <View  style={styles.background}>
            <StatusBar translucent backgroundColor={"transparent"}/>
            <View style={styles.IconBackground}>
            <Icon name='arrow-back' color={"grey"} size={28}/>
            </View>
            <View style={styles.Textcontainer}>
                <Text style={styles.heading1}>Welcome to</Text>
                <Text style={styles.heading2}>Awayday.</Text>
                <Text style={styles.para}>We just need a few quick details to continue</Text>
            </View>
            <View style={styles.ImageContainer}>
                <Image style={styles.Image} source={{uri:"https://i.pinimg.com/736x/8b/08/40/8b08405ed83b50eef60a11c2c34dfe26.jpg"}}/>
                <View style={styles.camera}>
                <Icon name='photo-camera' color={"white"} size={22}/>
                </View>
            </View>
            <TextInput style={styles.TextInput}/>
            <TextInput style={styles.TextInput}/>
            <View style={styles.row}>
                <View>

                </View>
                <Text style={styles.bottomText}>I accept all the<Text style={styles.innerText}>Terms & Conditions</Text></Text>
            </View>
            <TouchableOpacity style={styles.Btn}>
                <Text style={styles.BtnText}>Send OTP</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Auth