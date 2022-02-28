import React, { useState } from 'react'
import { Image, ImageBackground, Pressable, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import Icon from "react-native-vector-icons/MaterialIcons"

function Auth({navigation}) {

    const [checked, setchecked] = useState(false);
    const [verified, setverified] = useState(false);
    const [name, setname] = useState(null)

    return (
        <View  style={styles.background}>
            <StatusBar translucent backgroundColor={"transparent"}/>
            <View style={styles.IconBackground}>
            <Icon onPress={() => navigation.pop()} name='arrow-back' color={"grey"} size={28}/>
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
            <View  style={styles.firstTextInput}>
            <TextInput onChangeText={(text) => setname(text)} onEndEditing={() => setverified(true)} style={styles.Input} placeholder='Enter Name' placeholderTextColor={"grey"}/>
            {
                verified && (name.length > 5 ? (<Icon name='verified' color={"green"} size={25}/>):null)
            }
            </View>
            <View style={styles.secondTextInput}>
            <TextInput style={styles.Input}  placeholder='Enter Mobile Number' placeholderTextColor={"grey"}/>
            </View>
            <View style={styles.row}>
                <Pressable style={styles.check} onPress={() => setchecked(!checked)}>
                {
                    checked ? (<Icon name='check-box' color={"#5c42ae"} size={25}/>):( <Icon name='check-box-outline-blank' color={"#5c42ae"} size={25}/> )
                }
                </Pressable>
                <Text style={styles.bottomText}>I accept all the <Text style={styles.innerText}>Terms & Conditions</Text></Text>
            </View>
            <TouchableOpacity onPress={() =>{
                if(checked){
                    navigation.navigate("OtpScreen")
                }
            }}  style={[styles.Btn,{backgroundColor:checked?"#5c42ae":"grey"}]}>
                <Text style={styles.BtnText}>Send OTP</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Auth