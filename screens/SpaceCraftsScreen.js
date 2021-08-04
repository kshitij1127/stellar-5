import axios from "axios";
import * as React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image } from "react-native";

export default class SpaceCraftsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aircrafts: [],
    };
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => {
     return(
         <View style={{borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 10, elevation: 10,}}>
             <Image source={{uri: item.agency.image_url}} style={{
                 width: '100%',
                 height: 200,
                 marginTop: 15,
                 marginBottom: 15,
                 marginRight: 10,
             }}/>

             <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
             <Text style={{color: '#696969'}}>{item.agency.name}</Text>
             <Text>DESCRIPTION</Text>
             <Text style={{
                 color: '#A9A9A9',
                 marginLeft: 10,
                 marginRight: 10,
             }}>{item.agency.description}</Text>
         </View>
     )
  }

  getData = () => {
    axios
      .get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
      .then((response) => {
        this.setState({ aircrafts: response.data.results });
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
        <Text>SpaceCrafts</Text>
        </View>
        <SafeAreaView />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.aircrafts}
          renderItem={this.renderItem}
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
