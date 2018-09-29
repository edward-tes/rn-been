import React from "react"
import {
  Router,
  Stack,
  Scene
} from "react-native-router-flux"
import Home from "home"

// const Router = createRouter(() => ({
//   home: () => Home,
// }))

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} title="Home"/>
        </Stack>
      </Router>
    )
  }
}
