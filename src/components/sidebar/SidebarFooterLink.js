import React, { Component } from 'react';

class SidebarFooterLink extends React.Component {
  render() {
    return (
      <a href="" className="sidebar-footer-link" onClick={this.onClick.bind(this)}>
        <i className={"icon " + this.props.iconClass}></i> {this.props.children}
      </a>
    );
  }
  onClick(event) {
    event.preventDefault();
    if (this.props.onClick) {
      this.props.onClick();
    }
  }
};

export default SidebarFooterLink;
