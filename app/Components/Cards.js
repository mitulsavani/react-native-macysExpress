import React, { Component } from "react";
import { TouchableOpacity, ImageBackground, View, Text, StyleSheet, Dimensions } from "react-native";
import {Icon} from "react-native-elements";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0,};
  }
  nextPhoto() {
    var num = this.state.num;
    var length = this.props.images.length - 1;
    if (num >= length) {
      this.setState({ num: 0 });
    } else {
      num += 1;
      this.setState({ num: num });
    }
  }

  handleYup() {
    let temp;
    temp = this.refs['swiper'].getCurrentCard();
    this.saveThing(temp);
  }
  handleNope(card) {
    console.log(`Nope for ${card.text}`);
  }

  showIcons() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 40,
          paddingVertical: 20
        }}
      >
        <TouchableOpacity>
          <Icon
            reverse
            name="close"
            type="font-awesome"
            color="red"
            onPress={() => this.handleNope()}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            reverse
            name="ios-heart"
            type="ionicon"
            color="#38EEB4"
            onPress={() => this.handleYup()}
          />
        </TouchableOpacity>
      </View>
    );
  }


  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={() => this.nextPhoto()}>
        <ImageBackground
          style={styles.card}
          source={{ uri: this.props.image[0].imageurl }}
        >
        </ImageBackground>
      </TouchableOpacity>
        <View style={styles.cardInfo}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#000"
            }}
          >
            {this.props.summary.name}
          </Text>
      </View>
      {this.showIcons()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  card: {
    width: deviceWidth * 0.9,
    height: deviceHeight * 0.5,
    borderRadius: 10
  },
  cardInfo: {
    marginTop: 20,
  },
});

export default Cards;