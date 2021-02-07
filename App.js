import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {Header} from 'react-native-elements';
import dictionary from './localdb'
export default class App extends React.Component {
constructor(){
super();
this.state={
word: '',
definition: '',
text: '',
isSearchPressed: false,
isLoading: false,
lexicalCategory: '',
}
}

getWord = (text) => {
var text=text.toLowerCase();
try {
var word=dictionary[text]['word']
var definition=dictionary[text]['definition']
var lexicalCategory=dictionary[text]['lexicalCategory']
this.setState({
'word':word,
'definition':definition,
'lexicalCategory':lexicalCategory,
});
} 
catch (error) {
alert("Oh no! Sorry this word is not available for now");
this.setState({
'text':'',
'isSearchPressed':false,
'word':'',
});
}
};

render() {
return (
<View style={styles.container}>
<Header backgroundColor={"darkorange"}
centerComponent={{
text:"DICTIONARY APP",
style:{color:'black',fontSize:20,fontFamily:'Comic Sans MS'}
}}/>

<Image
style={styles.image} 
source={require('./de.jpg')}>
</Image>

<TextInput style={styles.inputBox}
onChangeText={text=>{
this.setState({text:text,
isSearchedPressed:false,
lexicalCategory: '',
examples: [],
definition: '',
})
}}
value={this.state.text}/>

<TouchableOpacity style={styles.searchButton}
onPress={()=>{
this.setState({isSearchedPressed:true,word:'loading...',})
this.getWord(this.state.text)
}}>
<Text style={styles.buttonText}>Search</Text>{' '}
</TouchableOpacity>

  {this.state.word !== 'Loading...' ? (
<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
<Text style={styles.text} > Word:{""}</Text>
<Text style={styles.displayTextword}>{this.state.word}</Text>
</View>
):null}

{this.state.word !== 'Loading...' ? (
<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
<Text style={styles.texT}>Type:{""}</Text>
<Text style={styles.displayTextNoun}>{this.state.lexicalCategory}</Text>
</View>
):null}

{this.state.word !== 'Loading...' ? (
<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
<Text style={styles.Text}>Definition:{""}</Text>
<Text style={styles.displayTextdefinition}>{this.state.definition}</Text>
</View>
):null}

</View>
);
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor:'crimson',
},
inputBox: {
marginTop: 50, 
width: '80%',
alignSelf: 'center', 
height: 40, 
textAlign: 'center', 
borderWidth: 4, 
outline: 'none',
},
searchButton: { 
width: '50%', 
height: 55, 
alignSelf: 'center', 
padding: 10,
margin: 10, 
},
buttonText: { 
textAlign: 'center', 
fontSize: 30,
fontWeight: 'bold', 
},
text: { 
textAlign: 'center', 
fontSize: 30,
fontWeight: 'bold', 
marginLeft:-1, 
color:"yellow",
},
texT: { 
textAlign: 'center', 
fontSize: 30,
fontWeight: 'bold', 
marginLeft:5, 
color:"yellow",
},
Text: { 
textAlign: 'center', 
fontSize: 30,
fontWeight: 'bold', 
marginLeft:5, 
color:"yellow",
},
displayTextNoun: { 
fontSize:18,
marginTop:12
},
displayTextdefinition: { 
fontSize:18,
},
displayTextword:{
fontSize:18,
marginTop:10
},
image:{
width: 130,
height: 130,
borderColor: 'black',
borderWidth: 10,
marginTop: 20,
marginLeft: 100,
}
});
