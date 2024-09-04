import React from 'react'
import type { PropsWithChildren } from 'react' 

import {View, Text, StyleSheet } from 'react-native'
 type currencybtnProps = PropsWithChildren<{
      name : string;
      flag: string;
 }>

 const currencybtn = (props: currencybtnProps):JSX.Element => 
  {
    return(
      <View style={styles.buttoncontainer}>
         <Text style={styles.flag}>
          {props.flag}
         </Text>
         <Text style={styles.nameC}>{props.name}</Text>
      </View>
    ) 
}

const styles = StyleSheet.create({
    buttoncontainer:{
      alignItems: 'center'
    },
    flag:{
      fontSize: 28,
      color: "#FFFFFF",
      marginBottom: 4
    },
    nameC: {
       fontSize: 18,
       color: "#2d3436"       
    }
})
export default currencybtn