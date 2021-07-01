import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class StarMap extends React.Component{
    render(){
      <View style={styles.container}>
          <Text>Star Map Screen!</Text>
      </View>
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})