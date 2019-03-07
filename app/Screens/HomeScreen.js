import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Header, Icon } from 'react-native-elements';
import SwipeCards from 'react-native-swipe-cards';
import Cards from '../Components/Cards';

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    this.props.fetchStations(this.props.navigation.state.params.categories, () => {});
  };
  saveThing(card) {
    console.log(Object.keys(card));
    this.props.saveStation(card);
  }

  handleYup() {
    let temp;
    temp = this.refs['swiper'].getCurrentCard();
    this.refs['swiper']._forceRightSwipe();
    this.saveThing(temp);
  }

  handleNope() {
    let temp;
    temp = this.refs['swiper'].getCurrentCard();
    this.refs['swiper']._forceLeftSwipe();
  }

  showIcons() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
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

  renderCards = data => {
    return (
      <SwipeCards
        ref={'swiper'}
        cards={data}
        renderCard={cardData => <Cards {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={() => this.handleYup()}
        handleNope={() => this.handleNope()}
      />
    );
  };
  render() {
    const data = this.props.categories;
    return (
      <View style={styles.container}>
        <Header
          barStyle="light-content"
          backgroundColor="#fff"
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SettingsStack')}>
              <Text style={{ color: 'black', fontSize: 20, marginLeft: 27 }}>Edit</Text>
            </TouchableOpacity>
          }
          centerComponent={{ text: 'Product', style: { fontSize: 28 }}}
        />

        {data.length > 0 ? this.renderCards(data) : console.log('hi')}
        {this.showIcons()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300
  },
  noMoreCardsText: {
    fontSize: 22
  }
});

function mapStateToProps({ categories }) {
  return { categories: categories };
}
export default connect(mapStateToProps,actions)(HomeScreen);
