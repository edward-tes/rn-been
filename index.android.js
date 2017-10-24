import React, { Component } from "react"
import {Provider} from "react-redux"
import {
  AppRegistry,
} from "react-native"

import App from "app"
import store from "store"

class RNBeen extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent("rn_been", () => RNBeen)
