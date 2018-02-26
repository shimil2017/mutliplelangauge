import React, { Component } from 'react';
import { Platform, StyleSheet, Text, ScrollView, View,TouchableOpacity } from 'react-native';
import I18n, { getLanguages } from 'react-native-i18n';
export default class Second extends Component{
constructor(props){
    super(props)
}

    change=(x)=>{
        console.log(x)
        I18n.locale=x
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'red'}}>
              <TouchableOpacity style={{flex:1}} onPress={this.change('fr')}>
              <Text style={{fontSize:20,color:'black'}}>fr</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1}} onPress={this.change('en')}>
              <Text style={{fontSize:20,color:'black'}}>en</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1}} onPress={this.change('es')}>
              <Text style={{fontSize:20,color:'black'}}>es</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1}} onPress={this.change('fr-CA')}>
              <Text style={{fontSize:20,color:'black'}}>fr-CA</Text>
              </TouchableOpacity>
              
            </View>
        )
    }
}