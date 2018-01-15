import React, { Component } from 'react';
import { AppRegistry, View, Image, Alert } from 'react-native';
import { TabNavigator } from "react-navigation";
import {
    Container, Header, Drawer, Content, List, ListItem, ListView, Left, Body, Card, CardItem,
    Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab, Form, Item, Input, Label
} from 'native-base';
import ListBook from './ListBook';
export default class input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isbn: "",
            judul_buku: "",
            penerbit: "",
            pengarang: "",
            tahun_terbit: 0,
            sinopsis: "",
            refreshing: false,
        };
    }

    resetForm = () => {
        this.setState = {
            isbn: "",
            judul_buku: "",
            penerbit: "",
            pengarang: "",
            tahun_terbit: 0,
            sinopsis: "",
          };
    }

    handleDone() {
        const {navigate} = this.props.navigation;
        let isbn = (this.state.isbn);
        let judul_buku = (this.state.judul_buku);
        let penerbit = (this.state.penerbit);
        let pengarang = (this.state.pengarang);
        let tahun_terbit = parseInt(this.state.tahun_terbit);
        let sinopsis = (this.state.sinopsis);

        var axios = require('axios');
        var data = new FormData();
        var obj = {
            isbn: isbn,
            judul_buku: judul_buku,
            penerbit: penerbit,
            pengarang: pengarang,
            tahun_terbit: tahun_terbit,
            sinopsis: sinopsis
        };

        var myJson = JSON.stringify(obj)
        axios.post('http://itatspustaka.kampusphp.com/itats_pustaka.php', (myJson))
            .then(function (response) {
                Alert.alert('Sukses', 'Data sudah diinput',
                [
                    {text: 'OK', onPress: () => navigate('ListBook')},
                  ],
            );
            
            })
            .catch(function (error) {
               // Alert.alert('Error', error);
            })
    }


    render() {
        const {navigate} = this.props.navigation;
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
                <Content style={{ backgroundColor: '#ffdab9' }}>
                <Card style={{flex: 0}}>
                <CardItem style={{ backgroundColor: '#ffdab9' }}>
                <Content style={{ backgroundColor: '#ffdab9' }}>
                    <List>
                        <ListItem itemDivider style={{ backgroundColor: '#ffdab9' }} >
                            <Text>Form Input Buku</Text>
                        </ListItem>
                        <Form>
                            <Item floatingLabel>
                                <Label>ISBN</Label>
                                <Input onChangeText={(isbn) => this.setState({ isbn })}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>JUDUL</Label>
                                <Input onChangeText={(judul_buku) => this.setState({ judul_buku })} />
                            </Item>
                            <Item floatingLabel>
                                <Label>PENERBIT</Label>
                                <Input onChangeText={(penerbit) => this.setState({ penerbit })} />
                            </Item>
                            <Item floatingLabel>
                                <Label>PENGARANG</Label>
                                <Input onChangeText={(pengarang) => this.setState({ pengarang })} />
                            </Item>
                            <Item floatingLabel>
                                <Label>TAHUN</Label>
                                <Input onChangeText={(tahun_terbit) => this.setState({ tahun_terbit })} />
                            </Item>
                            <Item floatingLabel>
                                <Label>SINOPSIS</Label>
                                <Input onChangeText={(sinopsis) => this.setState({ sinopsis })} />
                            </Item>
                            <Button iconLeft primary onPress={() => this.handleDone({})}>
							 <Icon name='checkmark-circle'/>
                                <Text>Save</Text>
                            </Button>
                        </Form>
                    </List>
                </Content>
                </CardItem>
                </Card>
                </Content>
            </Container>
        );
    }
}
