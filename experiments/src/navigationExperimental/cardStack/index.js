import React, { Component } from 'react';
import { Text, View, NavigationExperimental } from 'react-native';
import Scene from '../scene';
const {
  CardStack,
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

const ROUTES = [
  {key: 'one', arbitrary: 'data of scene one'},
  {key: 'two', whatever: 'data of scene two'},
  {key: 'three', yolo: 'data of scene three'},
]

export default class CardStackExperiment extends Component {

  constructor(props) {
    super(props)
    this.state = {
        navigationState: {
          key: 'root',
          index: 0,
          routes: [
            {key: 'Home'},
          ]
        }
    };

    this._renderScene = this._renderScene.bind(this);
    this._onPushRoute = this._onPushRoute.bind(this);
    this._onPopRoute = this._onPopRoute.bind(this);
  }

  render() {
    return (
      <CardStack
        onNavigateBack={this._onPopRoute}
        renderScene={this._renderScene}
        navigationState={this.state.navigationState}
      />
    );
  }

  _renderScene(props) {
    return (
      <Scene
        route={props.scene.route}
        reachableRoutes={ROUTES}
        goToRoute={this._onPushRoute}
        goBack={this._onPopRoute}
      >
        <Text>
          navigationState:
        </Text>
        <Text>
          {JSON.stringify(this.state.navigationState)}
        </Text>
      </Scene>
    )
  }

  _onPushRoute(requestedRoute) {
    const route = {
      ...requestedRoute
    }

    // make keys unique so we can push the same scene multiple times in the stack.
    route.key = requestedRoute.key + "_" + Date.now();

    const navigationState = NavigationStateUtils.push(this.state.navigationState, route);
    this.setState({navigationState});
  }

  _onPopRoute() {
    const navigationState = NavigationStateUtils.pop(this.state.navigationState);
    if (this.state.navigationState !== navigationState) {
      this.setState({navigationState});
    }
  }
};
