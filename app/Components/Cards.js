import React, { Component } from "react";
import { TouchableOpacity, ImageBackground, View, Text, StyleSheet, Dimensions } from "react-native";


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

  render() {
    return (
      <TouchableOpacity onPress={() => this.nextPhoto()}>
        <ImageBackground
          style={styles.card}
          source={{ uri: this.props.image[0].imageurl }}
        >
          <View style={styles.cardDescription}>
            <View style={styles.cardInfo}>
                <Text
                  style={{
                    fontSize: 35,
                    fontWeight: "bold",
                    color: "#fff"
                  }}
                >
                  {this.props.summary.name}
                </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: deviceWidth * 0.9,
    height: deviceHeight * 0.7,
    marginTop: 5,
    borderRadius: 10
  },
  cardDescription: {
    padding: 15,
    justifyContent: "flex-end",
    flex: 1
  },
  cardInfo: {
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 5
  },
});

export default Cards;