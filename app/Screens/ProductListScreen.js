import React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { Icon, Rating } from 'react-native-elements';

export default class ProductListScreen extends React.Component {
  render() {
    let data = this.props.navigation.state.params.data;
    return (
      
      <View style={ styles.container}>
          <Image
            style={{ width: "100%", height: 250 }}
          source={{uri: data.image[0].imageurl}}
      />
          <View style={styles.InfoView}>
            <Text style={styles.productName}>{data.summary.name}</Text>
          {data.summary.customerrating ? (
            <View style={{ marginTop: 5 }}>
              <Rating imageSize={20} readonly startingValue={data.summary.customerrating} />
            </View>
          ) : null}
            <Text style={styles.productPrice}>Price</Text>
            <Text style={styles.productReviews}>Reviews</Text>
            <Text style={styles.productBrand}>Brand</Text>
            <Button title="BUY NOW"></Button>
            <Button title="Book lyft"></Button>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageHeader: {
    flex:1,
  },
  InfoView: {
    padding: 27,
  },
  productName: {
    fontSize: 30,
    fontWeight: "700",
  },
  productPrice: {
    fontSize: 25
  },
  productReviews: {
    fontSize: 17, 
    color: "grey"
  },
  productBrand: {
    fontSize: 20,
    color: "#434343"
  }
});