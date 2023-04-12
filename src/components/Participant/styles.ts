import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: "#1f1e25",
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:10
    },
    name:{
        color: "#fff",
        flex:1,
        fontSize:16,
        marginLeft:16,
    },buttonText:{
        color: '#fff',
        fontSize: 24,
    },
    button:{
        backgroundColor: '#e23c44',
        height: 56,
        width: 56,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
