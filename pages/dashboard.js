import React from 'react'
import { initStore, startPage } from '../store'
import withRedux from 'next-redux-wrapper'
import Page from '../components/Page'

class dashboard extends React.Component {

  static getInitialProps ({ store }) {
      store.dispatch(startPage('dashboard', 'quotes?_start=0&_start=0&_num=1000'));
    }

  render () {
    debugger;
    return (
      <Page  title="DashBoard"/>
    )
  }
}

export default withRedux(initStore)(dashboard)
