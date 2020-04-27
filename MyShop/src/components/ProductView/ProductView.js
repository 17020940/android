import React, {Component} from 'react';
import {
  View,Text,Image,TouchableOpacity,Dimensions,FlatList,
  StyleSheet,ScrollView
} from 'react-native';
import icChat from '../../media/appIcon/chat1.png';
import icCart from '../../media/appIcon/cart.png';
import icBack from '../../media/appIcon/backW.png';
import icLogo from '../../media/appIcon/logo.jpg';
const {height,width} = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
export default function(props) {
  const navigation = useNavigation();

  return <ProductView {...props} navigation={navigation} />;
}
class ProductView extends Component{
  render(){
    const { navigation } = this.props;
    const {headerStyle,botStyle,iconStyle,chatStyle,cartStyle,buyStyle
    }= styles;
    return(
      <View style={{flex:1}}>
        <View style ={headerStyle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icBack} style={iconStyle} />
          </TouchableOpacity>
          <Text style ={{fontSize:30,fontWeight:'bold',color:'#FFF'}}> DONG LAO SHOP </Text>
          <Image source={icLogo} style={iconStyle}/>
        </View>
        <View style ={{flex:10,backgroundColor:'#FFF'}}>
          <ScrollView>
            <View style={{height:height*0.4,backgroundColor:'red'}}>
            </View>
            <Text>thong tin san pham </Text>
          </ScrollView>
        </View>

        <View style ={botStyle}>
          <View style ={{flex:1,flexDirection:'row',alignItems:'center',}}>
            <View style ={chatStyle}>
              <TouchableOpacity onPress={() => navigation.navigate('ChatView')} >
                <Image source={icChat} style ={iconStyle}/>
              </TouchableOpacity>
            </View>
            <View style ={cartStyle}>
              <TouchableOpacity>
                <Image source={icCart} style ={{  height:50,width:50,}}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style ={buyStyle}>
            <TouchableOpacity>
              <Text style={{fontSize:25,color:'#FFF'}}>Mua ngay </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  headerStyle:{
    flex:1,
    backgroundColor:'#607D8B',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  iconStyle:{
    height:40,
    width:40,
  },
  botStyle:{
    flex:1,
    backgroundColor:'#FFF',
    flexDirection:'row',
  },
  chatStyle:{
    flex:1,
    borderRightWidth:1,
    borderRightColor:'#696969',
    height:'80%',
    alignItems:'center',
    justifyContent:'center'
  },
  cartStyle:{
    flex:1,
    borderLeftWidth:1,
    borderLeftColor:'#696969',
    height:'80%',
    alignItems:'center',
    justifyContent:'center'
  },
  buyStyle:{
    flex:1,
    backgroundColor:'#607D8B',
    alignItems:'center',
    justifyContent:'space-around'
  }
})
