import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text,Animated, View, TouchableWithoutFeedback } from 'react-native';

const CardBook = ({title,image,id,author}) => {

    const [animated]=useState(new Animated.Value(1));
    const navigation=useNavigation();

    const pressBtn=()=>{
        Animated.spring(animated,{
            toValue:.9,
            useNativeDriver:true,
        }).start();
    }
    const leaveBtn=()=>{
        Animated.spring(animated,{
            toValue:1,
            friction:1,
            tension:100,
            useNativeDriver:true,
        }).start()
        setTimeout(() => {
            
            navigation.navigate('DetailBook',{book:id})
        }, 100);

    }
    const styleAnimated={
        transform:[{scale:animated}]
    }
    
    return ( 
        <TouchableWithoutFeedback
            onPressIn={pressBtn}
            // delayPressIn={30}
            // delayPressOut={1000}
            onPressOut={leaveBtn}
            >
        <Animated.View style={[styles.containerCard,styleAnimated]}>
           {

               image?(  
                <Image source={{uri:image}} style={{height:80,width:53}}
                 resizeMode='contain'
                 resizeMethod='resize'
                />):
                <Image source={require('../assets/General/not_image_found.png')} style={{height:80,width:53}}
                resizeMethod='resize'
                resizeMode='cover'
                />
           }
         
            <View style={styles.containerText}> 
            <Text style={styles.titleCard}>{title}</Text>
            <Text style={styles.authorCard}>{author}</Text>
            </View>
        </Animated.View>
        </TouchableWithoutFeedback>
     );
}
const styles=StyleSheet.create({

    containerCard:{
        display:'flex',
        flexDirection:'row',
        height:120,
        elevation:2,
        borderRadius:20,
        shadowOffset:{
            width:12,
            height:12,
        },
        shadowOpacity:16.00,
        width:'85%',
        marginLeft:'auto',
        marginRight:'auto',
        backgroundColor: "#FFF",
        padding:20,
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:0,
        marginBottom:10,
    },
    titleCard:{
        fontSize:22,
        fontFamily:'Montserrat-SemiBold'
    },
    authorCard:{
        fontSize:15,
        fontFamily:'Merriweather-Light'
    },
    containerText:{
        // marginLeft:20,
        alignSelf:'flex-start',
        width:'60%',
        display:'flex',
        flexDirection:'column'
    }
})
export default CardBook;