import React, { Component } from 'react';
import { Platform, StyleSheet, Text, ScrollView, View,TouchableOpacity } from 'react-native';
import I18n, { getLanguages } from 'react-native-i18n';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {languagechange} from './Actions'
function mapDispatchToProps(dispatch){return bindActionCreators(Actions,dispatch)}

 class Second extends Component{
constructor(props){
    super(props)

   // console.log(this.props.languagechange)
}

    change=(x)=>{
        console.log(this.props.languagechange(x))
        
        
       // I18n.locale=x
    }
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity
               style={{width:120,alignItems:'center',height:50,backgroundColor:'green'}} onPress={()=>this.change('fr')}>
              <Text style={{fontSize:20,color:'black'}}>fr</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:120,alignItems:'center',height:50,backgroundColor:'green'}} onPress={()=>this.change('en')}>
              <Text style={{fontSize:20,color:'black'}}>en</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:120,alignItems:'center',height:50,backgroundColor:'green'}} onPress={()=>this.change('es')}>
              <Text style={{fontSize:20,color:'black'}}>es</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:120,alignItems:'center',height:50,backgroundColor:'green'}} onPress={()=>this.change('fr-CA')}>
              <Text style={{fontSize:20,color:'black'}}>fr-CA</Text>
              </TouchableOpacity>
              
            </View>
        )
    }
}

export default connect(null,{languagechange})(Second)

