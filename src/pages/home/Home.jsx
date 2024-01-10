/**
 * Author: Meng
 * Date: 2021-09-27
 * Desc:
 */

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, CompatButton, ListView} from '../../components/index';

const list = [
  '自定义标题栏',
  'WebPage',
  'Charbar(字母索引)',
  'MoveView',
  'Search',
  'TabLayout',
  'SafeFooter',
];
const rightBtns = [{name: '菜单', onPress: () => {}}];

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const timer = setTimeout(() => {
      this.props.navigation.navigate({
        name: 'RetailSalesData',
      });
    }, 1000);
  }

  onItemPress = (item, index) => {
    let path = '';

    switch (index) {
      case 0:
        path = '';
        break;
      case 1:
        path = 'WebPage';
        break;
      case 2:
        path = '';
        break;
    }
    if (path) {
      this.props.navigation.navigate({
        name: path,
        params: {item},
      });
    }
  };

  render() {
    return (
      <View style={styles.page}>
        <Header title="知之学吧 很长很长很长的标题" rightBtns={rightBtns} />
        <ListView style={styles.list} data={list} renderItem={this.itemView} />
        {/* <CategoryBuy /> */}
      </View>
    );
  }

  itemView = ({item, index}) => {
    return (
      <CompatButton
        style={styles.item}
        onPress={() => this.onItemPress(item, index)}>
        <Text style={styles.text}>{item}</Text>
      </CompatButton>
    );
  };
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // paddingHorizontal: 16,
  },
  alertBox: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: '#00000030',
  },
  numBg: {
    width: 160,
    height: 160,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  countText: {
    color: '#232323',
    fontSize: 120,
    lineHeight: 126,
    fontWeight: 'bold',
  },
  list: {
    height: '100%',
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  text: {
    color: '#232323',
    fontSize: 16,
  },
  date: {
    color: '#FF0099',
    textAlign: 'center',
  },
});

export default Home;
