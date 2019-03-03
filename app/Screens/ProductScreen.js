import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from 'react-native';
import { CATEGORIES_DATA } from '../../utils/data';

export default class ProductScreen extends React.Component {
  constructor(props) {
    super(props);
    const category = props.navigation.state.params && props.navigation.state.params.category;
    this.state = {
      category: category
    };
  }
  _renderItem = ({ item }) => (
    <View style={styles.smallRow}>
      <TouchableOpacity
        style={styles.thumbnailImageContainer}
        onPress={() =>
          this.props.navigation.navigate('HomeStack', {
            categories: item.id
          })
        }
      >
        <Image style={styles.thumbnailImage} source={require('../../assets/icon.png')} />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
  _keyExtractor = (item, index) => item.id.toString();

  render() {
    const { category } = this.state;
    console.log(CATEGORIES_DATA[category]);
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F3F3F3' }}>
        <FlatList
          data={CATEGORIES_DATA[category].child}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          columnWrapperStyle={styles.smallRow}
          numColumns={2}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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
    textAlignVertical: 'center',
    textAlign: 'left',
    marginLeft: 30,
    color: 'white'
  },

  nameText: {
    fontFamily: 'segoe',
    color: 'white',
    fontSize: 40,
    textAlignVertical: 'center',
    textAlign: 'left',
    marginLeft: 30,
    marginTop: 30
  },
  greetingText: {
    fontFamily: 'segoe',
    fontSize: 25,
    textAlignVertical: 'center',
    textAlign: 'left',
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
    width: 145
  },

  planningButton: {
    marginTop: 50,
    marginLeft: 30
  }
});
