import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon, Rating, Header } from 'react-native-elements';
import { Linking } from 'expo';

export default class ProductListScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    let data = this.props.navigation.state.params.data;
    console.log(data)
    return (
      
      <View style={ styles.container}>
      <Header
          barStyle="light-content"
          backgroundColor="#FFB199"
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.navigate('List')}>
              <Icon name='arrow-left'git type="feather" color="white" />
            </TouchableOpacity>
          }
        />
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
          {data.price.regular.high > 0 ? (
            <View style={{ marginTop: 5 }}>
              <Text style={{ fontSize: 20, fontFamily: 'productSans-Regular' }}>
                {`Price: $${data.price.regular.high}`}
              </Text>
            </View>
          ) : null}
          {data.summary.totalreviews > 0 ? (
            <View style={{ marginTop: 5 }}>
              <Text style={{ fontSize: 20, fontFamily: 'productSans-Regular' }}>
                {`Total Reviews: ${data.summary.totalreviews}`}
              </Text>
            </View>
          ) : null}
          {data.summary.brand ? (
            <View style={{ marginTop: 5 }}>
              <Text style={{ fontSize: 20, fontFamily: 'productSans-Regular' }}>
                {`Brand: ${data.summary.brand}`}
              </Text>
            </View>
          ) : null}
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => Linking.openURL(data.summary.producturl)}>
                <Image
                  style={{height: 40, width: 150, marginVertical: 20}}
                  source={require('../../assets/macys.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('lyft://ridetype?id=lyft&destination[latitude]=37.673430&destination[longitude]=-122.470750')}>
                <Image
                  style={{height: 40, width: 150}}
                  source={require('../../assets/lyft.png')}
                />
              </TouchableOpacity>
            </View>
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
    fontFamily: 'productSans-Bold'
  },
  productBrand: {
    fontSize: 20,
    color: "#434343"
  }
});