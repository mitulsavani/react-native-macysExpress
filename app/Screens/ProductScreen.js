import React from 'react';
import { 
  Text, 
  View, 
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

export default class ProductScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F3F3F3' }}>
      <ScrollView style={styles.container}>
        <View style={styles.smallRow}>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Theatre" })}>
            <Image
              style={styles.thumbnailImage}
              source={require('../../assets/icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Food" })}>
            <Image
              style={styles.thumbnailImage}
              source={require('../../assets/icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Beach" })}>
            <Image
              style={styles.thumbnailImage}
              source={require('../../assets/icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Museum" })}>
            <Image
              style={styles.thumbnailImage}
              source={require('../../assets/icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Arts" })}>
            <Image
              style={styles.thumbnailImage}
              source={require('../../assets/icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Bar" })}>
            <Image
              style={styles.thumbnailImage}
              source={require('../../assets/icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Clothing" })}>
            <Image
              style={styles.thumbnailImage}
              source={require('../../assets/icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Coffee" })}>
            <Image
              style={styles.thumbnailImage}
              source={require('../../assets/icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Events" })}>
            <Image
              style={styles.thumbnailImage}
              source={require('../../assets/icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Hotel" })}>
            <Image
              style={styles.thumbnailImage}
              source={require('../../assets/icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Spiritual" })}>
            <Image
              style={styles.thumbnailImage}
              source={require('../../assets/icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.thumbnailImageContainer}
            onPress={() => this.props.navigation.navigate('Option', { categories: CATEGORIES, category_key: "Sports" })}>
            <Image
              style={styles.thumbnailImage}
              source={require('../../assets/icon.png')}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  plannerOuterContainer: {
    height: 600,
    // justifyContent: 'center',
    backgroundColor: '#307983'
  },
  plannerInnerContainer: {
    marginTop: 220
  },
  placeText: {
    fontFamily: 'futura',
    fontSize: 40,
    textAlignVertical: "center",
    textAlign: "left",
    marginLeft: 30,
    color: 'white',
  },

  nameText: {
    fontFamily: 'segoe',
    color: 'white',
    fontSize: 40,
    textAlignVertical: "center",
    textAlign: "left",
    marginLeft: 30,
    marginTop: 30
  },
  greetingText: {
    fontFamily: 'segoe',
    fontSize: 25,
    textAlignVertical: "center",
    textAlign: "left",
    marginLeft: 30,
    marginTop: 30
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  smallRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  },

  thumbnailImageContainer: {
    padding: 13
  },

  thumbnailImage: {
    height: 145,
    width: 145,
  },

  planningButton: {
    marginTop: 50,
    marginLeft: 30
  }
})