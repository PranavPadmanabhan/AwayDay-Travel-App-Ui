import React, { useEffect, useRef, useState } from 'react'
import { Pressable, StatusBar, Text, TextInput, View } from 'react-native'
import styles from './styles'
import Icon from "react-native-vector-icons/MaterialIcons"
import OTPInputView from '@twotalltotems/react-native-otp-input'


function OtpScreen({navigation}) {

    const [timeLeft, setTimeLeft] = useState(30);
    let textInput = useRef(null);
    const [pin, setPin] = useState('')
    const inputlength = 4;

    useEffect(() => {
        if(timeLeft===0){
           console.log("TIME LEFT IS 0");
           setTimeLeft(0)
        }
    
        // exit early when we reach 0
        if (!timeLeft) return;
    
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
    
          setTimeLeft(timeLeft - 1);
        }, 1000);
    
        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
      }, [timeLeft]);
    
      const onChangeText = (text) => {
            setPin(text)
      }


    return (
        <View style={styles.background}>
            <StatusBar translucent backgroundColor={"transparent"} />
            <View style={styles.IconBackground}>
                <Icon onPress={() => navigation.pop()} name='arrow-back' color={"grey"} size={28} />
            </View>
            <View style={styles.Textcontainer}>
                <Text style={styles.heading1}>Verification Code</Text>
                <Text style={styles.para1}>Please enter the 4-digit verification code sent to +910000000000</Text>
                <Text style={styles.para2}>Didn't recieve OTP? <Text style={styles.innerText}>Resend OTP</Text></Text>
            </View>
            <TextInput 
            ref={(text) => textInput = text}
            style={{width:0,height:0}}
            onChangeText={onChangeText}
            value={pin}
            keyboardType='number-pad'
            returnKeyType='done'
            />
            <View style={styles.InputContainer} >
                {
                    Array(inputlength).fill().map((item,index) => (
                        <Pressable  key={index} onPress={() => textInput.focus()}  style={[styles.input,{borderBottomColor:index === pin.length?"black":"grey",borderBottomWidth:1}]}>
                            <Text onPress={() => textInput.focus()} style={styles.inputText}>{(pin && pin.length>0)?pin[index]:""}</Text>
                        </Pressable>
                    ))
                }
            </View>
            <View style={styles.timer}>
                <Icon name='timer' color={"black"} size={22} style={{marginRight:5}}/>
                <Text>0:{timeLeft<10?`0${timeLeft}`:timeLeft}</Text>
            </View>
        </View>
    )
}

export default OtpScreen