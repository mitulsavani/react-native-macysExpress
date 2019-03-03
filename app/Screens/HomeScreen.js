import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SwipeCards from 'react-native-swipe-cards';
import Cards from "../Components/Cards"
// class Card extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     console.log(this.props)
//     return (
//       <View style={[styles.card, { backgroundColor: this.props.backgroundColor }]}>
//         <Text>{this.props.summary.name}</Text>
//       </View>
//     );
//   }
// }

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

  handleYup(card) {
    console.log(`Yup for ${card.text}`);
  }
  handleNope(card) {
    console.log(`Nope for ${card.text}`);
  }
  handleMaybe(card) {
    console.log(`Maybe for ${card.text}`);
  }

  renderCards = data => {
    return (
      <SwipeCards
        cards={data}
        renderCard={cardData => <Cards {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    );
  };
  render() {
    const data = this.props.categories;
    return <View>{data.length > 0 ? this.renderCards(data) : console.log('hi')}</View>;
  }
}

const styles = StyleSheet.create({
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
export default connect(
  mapStateToProps,
  actions
)(HomeScreen);
