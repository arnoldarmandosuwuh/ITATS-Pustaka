import React, { Component } from 'react';
import { AppRegistry, View, Image, RefreshControl, ListView } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Container, Header, Drawer, Content, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';

export default class Home extends React.Component {

  render() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var tanggal = date + '-' + month + '-' + year;

    return (

      <Container style={{ backgroundColor: '#ffdab9' }}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Perpustakaan online</Title>
          </Body>
        </Header>
        <Content style={{ backgroundColor: '#ffdab9' }}>
          <List>
            <Card style={{ flex: 0 }}>
              <CardItem style={{ backgroundColor: '#ffdab9' }}>
                <Left>
                  <Thumbnail source={{ uri: 'https://cdn.sribu.com/assets/media/contest_detail/2014/12/re-desain-logo-untuk-perpustakaan-nasional-republik-indonesia-54867089b79de4e691000003/ab72759a6d.png' }} />
                  <Body>
                    <Text>Perpustakaan Online</Text>
                    <Text note>{tanggal}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem style={{ backgroundColor: '#ffdab9' }}>
                <Body>
                  <Image source={{ uri: 'https://assets-a1.kompasiana.com/items/album/2015/10/28/perpustakaan-563007a587afbd8505ca9e92.jpg' }} style={{ height: 200, width: 400, flex: 1, padding: 30 }} />
                  <Text>
                    Selamat datang di Perpustakaan online
                      Powered By SI ITATS
                </Text>
                </Body>
              </CardItem>
              <CardItem style={{ backgroundColor: '#ffdab9' }}>
                <Left>
                  <Button transparent textStyle={{ color: '#87838B' }}>
                    <Icon name="logo-github" />
                    <Text>2017</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          </List>
        </Content>
      </Container>
    );
  }

}
