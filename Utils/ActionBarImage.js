import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class ActionBarImage extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{ uri: '../Images/logo.png' }}
          style={{
            width: 40,
            height: 40,
            marginLeft: 5,
          }}
        />
      </View>
    );
  }
}
