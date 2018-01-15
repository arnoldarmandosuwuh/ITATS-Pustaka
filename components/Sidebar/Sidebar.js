import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';
const screens = ["Home", "Book", "About"];

export default class MenuSamping extends React.Component {
  render() {
    return (
      <Content style={{ backgroundColor: '#FFFFFF' }}>
        <Card style={{ flex: 2 }}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://cdn.sribu.com/assets/media/contest_detail/2014/12/re-desain-logo-untuk-perpustakaan-nasional-republik-indonesia-54867089b79de4e691000003/ab72759a6d.png' }} style={{ marginLeft: 20, marginBottom: 10 }} />
              <Body>
                <Text style={{ margin: 10, marginBottom: 20 }}>Perpustakaan Online</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <List>
          <ListItem avatar
            button
            onPress={() => this.props.navigation.navigate(screens[0])}
          >
            <Left>
              <Thumbnail source={{ uri: 'https://png.icons8.com/color/540/home.png' }} />
            </Left>
            <Body>
              <Text>Home</Text>
              <Text note></Text>
            </Body>
          </ListItem>
        </List>
        <List>
          <ListItem avatar
            button
            onPress={() => this.props.navigation.navigate(screens[1])}
          >
            <Left>
              <Thumbnail source={{ uri: 'https://png.icons8.com/dusk/2x/read.png' }} />
            </Left>
            <Body>
              <Text>Books</Text>
              <Text note></Text>
            </Body>
          </ListItem>
        </List>
        <List>
          <ListItem avatar
            button
            onPress={() => this.props.navigation.navigate(screens[2])}
          >
            <Left>
              <Thumbnail source={{ uri: 'https://png.icons8.com/color/2x/businessman.png' }} />
            </Left>
            <Body>
              <Text>About Us</Text>
              <Text note></Text>
            </Body>
          </ListItem>
        </List>
      </Content>

    );
  }
}
