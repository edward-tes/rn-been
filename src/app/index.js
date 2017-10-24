import React from "react"
import {
  NavigationProvider,
  StackNavigation,
  createRouter,
} from "@expo/ex-navigation"
import Home from "home"

const Router = createRouter(() => ({
  home: () => Home,
}))

export default class App extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute("home")} />
      </NavigationProvider>
    )
  }
}
