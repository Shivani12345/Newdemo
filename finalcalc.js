import React, { Component } from 'react';
import { StyleSheet,View, Text,Image,TouchableOpacity,SafeAreaView} from 'react-native';
// import { Button } from 'native-base';

var arrayrandom =new Array();
let hint1='';
let hint2='';
let random1='';
let random2='';
let opersign='';
let finalres='';


    function generateRandom(min, max) {
      let num = Math.floor(Math.random() * (max - min + 1)) + min;
    
      return num;
    }
    
    



class FinalCalc extends Component {


  constructor(props) {
    super(props)
    this.state = { oper :['+','-','*'] ,
  result:'',visibleStatus: false,
  wrongans: false
}
  this.index=0;
  this.checkresult = this.checkresult.bind(this);
  this.initItems = this.initItems.bind(this);
  }
  

  handleClick = (opersign,random1,random2) => {
   switch(opersign){
     case '+' :
     return random1+random2;
     case '-' :
     return random1-random2;
     case '*' :
     return random1*random2;
default :
return -1;
  }
  }


  checkresult(textt){
  
 if(textt.toString() == finalres){
 
  this.setState({
    visibleStatus: true,
    wrongans: false
 });


  // Alert.alert(textt.toString(),
  //   'result is truee',
  //    [
  //      {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
  //      {text: 'ok'},
  //    ],
  //    { cancelable: false })
}

else{
  this.setState({
    visibleStatus: false,
    wrongans: true
 });
  // Alert.alert(this.finalres,
  //   'result is Falseee',
  //    [
  //      {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
  //      {text: 'ok'},
  //    ],
  //    { cancelable: false })
}
  }
   

initItems() {

random1 = Math.floor((Math.random() * 9) + 1);
random2 =  Math.floor((Math.random() * 9) + 1);
opersign = this.state.oper[Math.floor(Math.random() * this.state.oper.length)];
finalres=this.handleClick(opersign,random1,random2)
hint1 = generateRandom(0, 9)
hint2 = generateRandom(0, 9)
this.Validateresult();


arrayrandom[0] =finalres;
arrayrandom[1]=hint1;
arrayrandom[2]=hint2;


// console.warn("main array",arrayrandom)


let i = arrayrandom.length - 1;
for (; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  const temp = arrayrandom[i];
  arrayrandom[i] = arrayrandom[j];
  arrayrandom[j] = temp;
}

// console.warn("after array",arrayrandom)

this.setState({
result : this.finalres,
visibleStatus: false,
wrongans: false
})
  // this.setState({dummy: 1})
}


Validateresult(){
  // console.warn("finalrendom",opersign+"=="+hint1+'='+hint2+"=="+finalres)


  if(finalres > 9){
    hint1 = generateRandom(10, 40)
    hint2 = generateRandom(10, 40)
    this.initItems();
  }
  else if(finalres < 0 ){
    // console.warn("minus ans ",finalres)
    random1 = Math.floor((Math.random() * 9) + 1);
  random2 =  Math.floor((Math.random() * 9) + 1);
  opersign = this.state.oper[Math.floor(Math.random() * this.state.oper.length)];
  finalres=this.handleClick(opersign,random1,random2)
  
    hint1 = generateRandom(0, 9)
    hint2 = generateRandom(0, 9)
    this.initItems();
  }
   
  else{
  
    }

    



  if(hint1 === hint2 || finalres === hint1 || finalres === hint2){
  this.initItems();
    // console.warn("validate numb ",finalres)
}

}

  componentDidMount() {
    this.initItems()
        
}


  render() {
   
    // function generateRandom(min, max) {
    //   let num = Math.floor(Math.random() * (max - min + 1)) + min;
    
    //   return (finalres|| finalres) ? generateRandom(min, max) : num;
    // }
    


    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex:1}}>
      
      <View style={{alignItems:'center',height:100,marginTop:20}}>
      
      <View style={this.state.visibleStatus ? null : { display: "none" }}>
      
      <Text style={{color:'green',fontSize: 20,fontFamily: 'Cochin',fontWeight: 'bold'}}>
      Right Answer</Text>  
        <Image style={{marginBottom:10 ,marginTop:10,width: 100, height:100}}
	        source={{uri:'https://thumbs.gfycat.com/EnviousInfiniteFoxhound-small.gif'}}/>
	       </View>


        <View style={this.state.wrongans ? null : { display: "none" }}>
        <Text style={{color:'red',fontSize: 20,fontFamily: 'Cochin',fontWeight: 'bold'}}>Wrong Answer</Text>
        <Image style={{marginBottom:10 ,marginTop:10,width: 100, height:100}}
	        source={{uri:'https://media.giphy.com/media/8wAKyiWF50rwA/giphy.gif'}}/>
	       </View>
         </View>

        {/* ============= */}

        <View style={{justifyContent:'center',alignItems:'center',marginTop:70}}>
        <View style={{width: 60, height: 60, backgroundColor: 'powderblue',
        alignItems:"center",justifyContent:"center"}}>
        <Text style={{fontSize: 20}}>{random1}</Text>
        
        </View>
        <View style={{marginTop:10,width: 60, height: 60, backgroundColor: 'steelblue',
          alignItems:"center",justifyContent:"center"}}>
         <Text  style={{fontSize: 20}}>{opersign}</Text>
        
        </View>

         <View style={{marginTop:10,width: 60, height: 60, backgroundColor: 'powderblue',
          alignItems:"center",justifyContent:"center"}}>
         <Text  style={{fontSize: 20}}>{random2}</Text>
        
        </View>
       
       
          <View style={{flexDirection:'row',height:40, marginTop: 10 }  }>
       
          {arrayrandom.map((item, key)=>(
         <TouchableOpacity style={styles.buttonStyle} key={key} onPress={this.checkresult.bind(this,item)} >
        
       <Text style={styles.textStyle}>
         {item}</Text>
         </TouchableOpacity>)
         )}
</View>


          {/* <Button onPress={this.checkresult.bind(this,finalres)}>
          {finalres}
          </Button>
        
          <Button  onPress={this.checkresult.bind(this,hint1)}>{array[0].toString()}</Button>
         
 {/* <TouchableHighlight onPress={this.checkresult.bind(this,hint1)}>
          <Text>Go to Foo</Text>
        </TouchableHighlight> */}
         {/* <Button  onPress={this.checkresult.bind(this,hint2)}>{hint2}</Button>
       */}


        </View>

  {/* ============= */}



       <View style={{flex:1,justifyContent:'flex-end',marginTop:10,marginBottom:10}}>
        <View style={this.state.visibleStatus ? null : { display: "none" }}>
        <View style={{height: 40, marginTop: 10} }>
       <TouchableOpacity style={styles.buttonStyle} onPress={this.initItems.bind(this)}>
       <Text style={styles.textStyle}>
       Next Que Please
        </Text>
         </TouchableOpacity>
       </View>
       </View>
       </View>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({ 
textStyle:{
  alignSelf: 'center',
  color: '#007aff',
  fontSize:16,
  fontWeight:'600',
  paddingTop:10,
  paddingBottom:10
},
buttonStyle:{
  flex:1,
  alignSelf:'stretch',
  backgroundColor: '#fff',
  borderRadius: 5,
  borderWidth:1,
  borderColor: '#007aff',
  marginLeft:5,
  marginRight: 5,
 
}
});

export default FinalCalc;