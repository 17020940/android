import React, {Component} from 'react';
import {
  View,Text,Image,TouchableOpacity,Dimensions,FlatList,
  StyleSheet,ScrollView,TextInput
} from 'react-native';
import icBack from '../../../media/appIcon/back.png';
import icOk from '../../../media/appIcon/ok.png';
const {height,width} = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
export default function(props) {
  const navigation = useNavigation();

  return <AddProduct {...props} navigation={navigation} />;
}
class AddProduct extends Component{
  render(){
    const { navigation } = this.props;
    const {headerStyle,addImageStyle,nameStyle,descriptionStyle} =styles;
    return(
      <View style ={{flex:1}}>
        <View style = {headerStyle}>
          <TouchableOpacity  onPress={() => navigation.goBack()}>
            <Image source={icBack} style ={{height:20,width:40}}/>
          </TouchableOpacity>
          <Text style ={{fontSize:20}}>Them san pham </Text>
          <TouchableOpacity>
            <Image source={icOk} style ={{height:60,width:60}}/>
          </TouchableOpacity>
        </View>
        <View style ={addImageStyle}>
        </View>
        <View style= {nameStyle}>
          <TextInput style ={{fontSize:20,paddingLeft:10}} placeholder ='ten san pham'/>
        </View>
        <View style= {descriptionStyle}>
          <TextInput multiline= {true} style ={{fontSize:20,paddingLeft:10}} placeholder ='mo ta san pham'/>
        </View>
        <View style= {nameStyle}>
          <TouchableOpacity>
            <Text style ={{fontSize:20}}>danh muc</Text>
          </TouchableOpacity>
        </View>
        <View style= {nameStyle}>
          <TouchableOpacity>
            <Text style ={{fontSize:20}}>thuong hieu</Text>
          </TouchableOpacity>
        </View>
        <View style= {nameStyle}>
          <TouchableOpacity>
            <Text style ={{fontSize:20}}>xuat su</Text>
          </TouchableOpacity>
        </View>
        <View style= {nameStyle}>
          <TouchableOpacity>
            <Text style ={{fontSize:20}}>gia</Text>
          </TouchableOpacity>
        </View>
        <View style= {nameStyle}>
          <TouchableOpacity>
            <Text style ={{fontSize:20}}>kho</Text>
          </TouchableOpacity>
        </View>
        <View style= {nameStyle}>
          <TouchableOpacity>
            <Text style ={{fontSize:20}}>phan loai</Text>
          </TouchableOpacity>
        </View>
        <View style= {nameStyle}>
          <TouchableOpacity>
            <Text style ={{fontSize:20}}>can nang</Text>
          </TouchableOpacity>
        </View>
        <View style= {nameStyle}>
          <TouchableOpacity>
            <Text style ={{fontSize:20}}>tinh trang</Text>
          </TouchableOpacity>
        </View>
        <View style= {nameStyle}>
          <TouchableOpacity>
            <Text style ={{fontSize:20}}>phi van chuyen</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  headerStyle:{
    height:height*0.08,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#FFF',
    padding:10
  },
  addImageStyle:{
    height:height*0.16,
    backgroundColor:'#FFF',
    marginTop:2
  },
  nameStyle:{
    height:height*0.06,
    backgroundColor:'#FFF',
    marginTop:2
  },
  descriptionStyle:{
    height:height*0.1,
    backgroundColor:'#FFF',
    marginTop:2
  }
})
