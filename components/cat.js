import React, {useState} from 'react'
import { View, Text, Image ,TextInput} from 'react-native'

function Cat() {
  const [text, setText] = useState("")
  const handleText = (text) => {
    setText(text)
  }
  return (
    <View>
      <View style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
        <Image source={ { uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{width: 200, height: 200}} />
      </View>
      <Text> I am a { text || "Cat"} person</Text>
      <TextInput onChangeText={nextText => handleText(nextText)} placeholder='Chose a name for the cat' style={ { marginHorizontal: 20, borderColor: 'grey', padding: 20, borderWidth: 1, borderColor: "peru",borderRadius: 5}} />
    </View>
  )
}

export default Cat
