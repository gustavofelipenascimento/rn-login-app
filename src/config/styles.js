import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    innerContainer:{
        paddingHorizontal: 20,
        alignSelf:'stretch',
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20,
        color:'black'
     },
     input:{
        marginBottom:10,
     },
     error:{
        color:'red',
     }
})