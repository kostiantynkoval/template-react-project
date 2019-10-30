import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import './App.css'

class App extends Component {
  componentDidMount() {
    // this.props.fetchAllCurrencies()
  }
  
  render() {
    return (
      <Fragment>
        <div>Hello React</div>
      </Fragment>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    fetchAllCurrencies: () => dispatch((() => {})())
  })
)(App);