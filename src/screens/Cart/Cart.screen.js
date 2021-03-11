import React from 'react'
import {  View,Button } from 'react-native'

const Cart=()=>{
    return(
        <View>
            <Text>Cart Screen</Text>
            <Button title="comprar" onPress={()=>console.log('press')}/>
        </View>
    )
}

export default Cart;