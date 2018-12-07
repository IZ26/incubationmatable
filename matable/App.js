/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Button, Text, Header, Container, Left } from 'native-base';
import {AppContainer} from "./src/Routes";
import { Root } from "native-base";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Root>
          <AppContainer/>
        </Root>
    )
  }
}


