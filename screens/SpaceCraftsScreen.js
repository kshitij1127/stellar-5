import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class SpaceCraftsScreen extends React.Component{
    render(){
      <View style={styles.container}>
          <Text>Space Screen!</Text>
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