import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { Font, LinearGradient } from 'expo';
import { Header, Icon } from 'react-native-elements';

import { CATEGORIES_DATA } from '../../utils/data';

export default class ProductScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    const category = props.navigation.state.params && props.navigation.state.params.category;
    this.state = {
      category: category,
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'productSans-Regular': require('../../assets/fonts/ProductSans-Regular.ttf'),
      'productSans-Bold': require('../../assets/fonts/ProductSans-Bold.ttf')
    });

    this.setState({ fontLoaded: true });
    console.log(this.state.fontLoaded);
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
        <Image style={styles.thumbnailImage} source={item.imgURL} />
      </TouchableOpacity>
    </View>
  );
  _keyExtractor = (item, index) => item.id.toString();

  render() {
    const { category } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}>
      <Header
          barStyle="light-content"
          backgroundColor="#FFB199"
          containerStyle={{ backgroundColor: '#FFB199', borderBottomWidth: 0, borderBottomColor: 'transparent', elevation: null}}
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Categories')}>
              <Icon name='arrow-left' type="feather" color="white" />
            </TouchableOpacity>
          }
        />
        <LinearGradient colors={['#FFB199', '#FF0844']} style={styles.backgroundGradient}>
          {this.state.fontLoaded ? (
            <Text style={styles.header}>{CATEGORIES_DATA[category].name}</Text>
          ) : null}
        </LinearGradient>
        <View style={styles.productListContainer}>
          <FlatList
            data={CATEGORIES_DATA[category].child}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            columnWrapperStyle={styles.smallRow}
            numColumns={2}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerStyle: {
    backgroundColor: '#FFB199',
    borderBottomWidth: 0, 
    borderBottomColor: 'transparent',
    elevation: null
  },
  plannerOuterContainer: {
    height: 600,
    backgroundColor: '#FF0844'
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
    padding: 5
  },
  thumbnailImage: {
    height: 160,
    width: 160,
    borderRadius: 10
  },
  planningButton: {
    marginTop: 50,
    marginLeft: 30
  },
  backgroundGradient: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 27,
    backgroundColor: 'red'
  },
  header: {
    fontSize: 35,
    fontWeight: '700',
    fontFamily: 'productSans-Bold',
    color: '#fff'
  },
  productListContainer: {
    flex: 5
  }
});