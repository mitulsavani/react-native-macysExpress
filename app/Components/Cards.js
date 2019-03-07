import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Rating } from 'react-native-elements';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
  }
  nextPhoto() {
    var num = this.state.num;
    var length = this.props.image.length - 1;
    if (num >= length) {
      this.setState({ num: 0 });
    } else {
      num += 1;
      this.setState({ num: num });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.card} source={{ uri: this.props.image[0].imageurl }} />
        <View style={styles.cardInfo}>
          <Text
            style={{
              fontSize: 27,
              fontWeight: 'bold',
              fontFamily: 'productSans-Regular',
              color: '#000'
            }}
          >
            {this.props.summary.name}
          </Text>
          {this.props.price.regular.high > 0 ? (
            <View style={{ marginTop: 5 }}>
              <Text style={{ fontSize: 20, fontFamily: 'productSans-Regular' }}>
                {this.props.price.regular.high}
              </Text>
            </View>
          ) : null}
          {this.props.summary.customerrating ? (
            <View style={{ marginTop: 5 }}>
              <Rating imageSize={20} readonly startingValue={this.props.summary.customerrating} />
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  card: {
    width: deviceWidth * 0.9,
    height: deviceHeight * 0.5,
    borderRadius: 10
  },
  cardInfo: {
    marginTop: 20
  }
});

export default Cards;
