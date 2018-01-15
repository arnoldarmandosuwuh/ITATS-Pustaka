import React, { Component } from "react";
import HomeScreen from "../Home/index.js";
import BookScreen from "../Home/Book.js";
import AboutScreen from "./About.js";
import Sidebar from "./Sidebar.js";
import { DrawerNavigator } from "react-navigation";
const SidebarRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Book: { screen: BookScreen },
    About: { screen: AboutScreen },
  },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);

export default SidebarRouter;