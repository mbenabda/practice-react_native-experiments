import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from './button';

export default class Scene extends Component {
  render() {
    const navigationButtons = this.props.reachableRoutes.map(route => {
      return (
        <Button
          key={route.key}
          onPress={() => { this.props.goToRoute(route) }}
          title={"go to scene " + route.key}
        />
      )
    });
    navigationButtons.push(
      <Button
        key="back"
        onPress={this.props.goBack}
        title={"BACK "}
      />
    );

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Scene {this.props.route.key}
        </Text>

        <Text>
          route data: {this.renderRoute(this.props.route)}
        </Text>

        <View>
          {navigationButtons}
        </View>

        <View>
          {this.props.children}
        </View>
      </View>
    );
  }

  renderRoute(route) {
    const routeData = {
      ...route
    };

    delete routeData.key;

    return JSON.stringify(routeData);
  }
};

Scene.propTypes = {
  route: React.PropTypes.object.isRequired,
  reachableRoutes: React.PropTypes.array.isRequired,
  goToRoute: React.PropTypes.func.isRequired,
  goBack: React.PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
