import React from 'react';
import { StyleSheet, TextInput, View, Header,TouchableOpacity } from 'react-native';

export default class WriteStory extends React.Component{
   
    render(){
        return(
            <View>
       <Header centerComponent={{ text: 'Story Hub', style: { color: '#fff' } }} />
       <TextInput placeholder='Title of The Story'></TextInput>
       <TextInput placeholder='Author of The Story'></TextInput>
       <TextInput placeholder='Write Story' multiline={true}></TextInput>
       <TouchableOpacity style={styles.button}>
           <Text>Submit</Text>
       </TouchableOpacity>
            </View>
        );
    }
        
    

}

const styles=StyleSheet.create({
    button:{
        backgroundColor:'green',
        width:200,
        height:50,
        borderWidth:5,
        borderColor:'black'
    }
}) 