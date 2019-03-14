import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchRobots();
  }
  
  render() {
    const filteredRobots = this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchTerm.toLowerCase());
    })

    if (this.props.loading) {
      return (
        <h1>Loading ...</h1>
      );
    }

    if (this.props.error) {
      return (
        <h1>{this.props.error.message}</h1>
      );
    }

    return (
      <div className="tc">
        <header style={{ height: '20vh' }}>
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.props.setSearchField} />
        </header>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.robots.searchField,
    robots: state.requests.robots,
    loading: state.requests.loading,
    error: state.requests.error,
  };
}

export default connect(mapStateToProps, actions)(App);
