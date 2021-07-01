import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class DailyPic extends React.Component{
    render(){
      <View style={styles.container}>
          <Text>Daily pictures!</Text>
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