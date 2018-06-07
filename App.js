import React from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  state = {
    upcoming_pass: "",
    time: "",
  }

  _onRefresh() {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }
  render() {
    return (
      <View >
        <View style={{flex: 0, flexDirection: 'row'}}>
        <View style={{width: 500, height: 40, backgroundColor: 'steelblue'}} />
      </View>
  
        <FlatList 
          data={[
            {key: 'pass_1 - Time'},
            {key: 'pass_2 - Time'},
            {key: 'pass_3 - Time'},
            //API calls add key value pairs
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    fontSize: 32,
    height: 40,
  },
})