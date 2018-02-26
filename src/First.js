// @ flow

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, ScrollView, View } from 'react-native';
import I18n, { getLanguages } from 'react-native-i18n';

// Enable fallbacks if you want `en-US`
// and `en-GB` to fallback to `en`
I18n.fallbacks = true;

// Available languages
I18n.translations = {
  'en': require('./translations/en'),
  'fr': require('./translations/fr'),
  'fr-CA': require('./translations/fr-CA'),
  'es': require('./translations/es'),
};

export default class First extends Component {
  state = { languages: [] };

  componentWillMount() {
   ///I18n.locale='fr'
  }

  render() {
    return (
      <ScrollView style={styles.container} bounces={false}>
       

        <View style={styles.block}>
          
          <Text>{I18n.t('hello world')}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 24,
    ...Platform.select({
      ios: { paddingTop: 44 },
      default: { paddingTop: 24 },
    }),
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  block: {
    marginBottom: 16,
  },
  label: {
    fontWeight: '700',
    marginRight: 8,
  },
});
