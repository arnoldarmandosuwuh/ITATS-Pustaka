import React, { Component } from 'react';
import { AppRegistry, View, Image, ActivityIndicator, ListView, RefreshControl } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Container, Header, Drawer, Content, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';
import axios from 'axios';

export default class ListBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      refreshing: false,
      error: null,
    }
  }
  componentDidMount() {
    return fetch('http://itatspustaka.kampusphp.com/itats_pustaka.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          isLoading: false,
          refreshing: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function () {

        });
      })
      .catch((error) => {
        this.setState({ error, isLoading: false, refreshing: false });
      });
  }
  handleRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        this.componentDidMount();
      }
    );
  };

  handleDone(isbn) {
    const {navigate} = this.props.navigation;
    var axios = require('axios');
    var data = new FormData();
    var obj = {
        isbn: isbn
    };

    var myJson = JSON.stringify(obj)
    axios.post('http://itatspustaka.kampusphp.com/itats_pustaka_view.php', (myJson))
        .then(function (response) {
          navigate('Books');
        })
        .catch(function (error) {
            
        })
}

  render() {
    const {state} = this.props.navigation;
    this.componentDidMount();
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <Container style={{ backgroundColor: '#ffdab9' }}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Perpustakaan online</Title>
          </Body>
        </Header>
        <ListView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh}
            />
          }
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <ListItem icon style={{ backgroundColor: '#ffdab9' }}
            onPress={() => this.handleDone(rowData.isbn)}>
				<Body>
					<Text> {rowData.judul_buku}</Text>
				</Body>
				<Right>
					<Icon name="arrow-forward"/>
				</Right>
            </ListItem>

          } />
      </Container>
    );
  }
}
