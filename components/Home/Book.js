import React, { Component } from 'react';
import { AppRegistry, View, Image, ActivityIndicator, ListView, RefreshControl } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Container, Header, Drawer, Content, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import axios from 'axios';

export default class Buku extends React.Component {
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

  render() {
    this.componentDidMount();
    const {state} = this.props.navigation;    
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
            <Card style={{ flex: 0 }}>
              <CardItem style={{ backgroundColor: '#ffdab9' }}>
                <Left>
                  <Thumbnail source={{ uri: 'https://cdn.sribu.com/assets/media/contest_detail/2014/12/re-desain-logo-untuk-perpustakaan-nasional-republik-indonesia-54867089b79de4e691000003/ab72759a6d.png' }} />
                  <Body>
                    <Text>{rowData.judul_buku}</Text>
                    <Text note>{rowData.tahun_terbit}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem style={{ backgroundColor: '#ffdab9' }}>
                <Body>
                <Grid>
                    <Col size={1}>
                      <Text>
                        ISBN{'\n'}
                        Penerbit{'\n'}
                        Pengarang{'\n'}
                        Tahun{'\n'}
                        Sinopsis{'\n'}
                      </Text>
                    </Col>
                    <Col size={2}>
                      <Text>
                        {': ' + rowData.isbn + '\n'}
                        {': ' + rowData.penerbit + '\n'}
                        {': ' + rowData.pengarang + '\n'}
                        {': ' + rowData.tahun_terbit + '\n'}
                        {': \n'}
                      </Text>
                    </Col>
                  </Grid>
                  <Text>
                    {rowData.sinopsis + '\n'}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          } />
      </Container>
    );
  }
}
