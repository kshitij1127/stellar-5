import * as React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";

export default class StarMap extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: "",
      longitude: "",
    };
  }

  render() {
    const path = `https://virtualsky.lco.global/embed/index.html?longitude=${this.state.longitude}&latitude=${this.state.latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`
    return (
      <View style={styles.container}>
        <Text>Star Map Screen!</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          placeholder="enter your latitude"
          placeholderTextColor="#fff#000"
          onChangeText={(text) => {
            this.setState({ latitude: text });
            console.log(this.state.latitude)
          }}
        />

        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          placeholder="enter your longitude"
          placeholderTextColor="#fff#000"
          onChangeText={(text) => {
            this.setState({ longitude: text });
            console.log(this.state.longitude)
          }}
        />

        <WebView
          scalesPageToFit={true}
          source={{ uri: path }}
          style={{ marginTop: 20, marginBottom: 20, }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
