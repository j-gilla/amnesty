import  React, { Component } from 'react';

import Navbar from './components/Navbar';
import { connect } from 'react-redux';
import './style/TaskToolbar.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false
    }
  }
  render() {
    return (
      <div className={'App-main ' + (this.state.fixed ? "fixed" : "")}>
        <Navbar />
        {this.props.nav}
        {this.props.main}
      </div>
    )
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
    window.addEventListener("resize", this.handleResize.bind(this));
  }
  handleScroll() {
    const tabletBreakpoint = 992;
    if (window.innerWidth < tabletBreakpoint) {
      if (this.state.fixed) {
        this.setState({fixed: false});
      }
      return;
    }
    const navbarHeight = 72;
    if (document.body.scrollTop >= navbarHeight) {
      if (!this.state.fixed) {
        this.setState({fixed: true});
      }
    } else {
      this.setState({fixed: false});
    }
  }
  handleResize() {
    this.handleScroll();
  }
};

const mapStateToProps = (state) => {
	return {
    isFetchingTask: state.presenter.is_fetching
	}
}

export default connect(mapStateToProps, null)(App);
