import React from 'react';
import Logo from '../assets/img/logo.png';

export default class Navigation extends React.Component {
  render() {
    const {active} = this.props;
    return (
      <div className="navigation">
        <div className="navigation-inner">
          <div className="left">
            <a className="nav-item-a logo" href="#">
              <img src={Logo} className="logo" />
            </a>
          </div>
          <div className="right">
            <ul className="nav-items">
              <li className="nav-item">
                <a className={`nav-item-a ${active === 'home' ? 'active' : ''}`} href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-item-a ${active === 'top-books' ? 'active' : ''}`} href="#">Top Books</a>
              </li>
              <li className="nav-item">
                <a className={`nav-item-a ${active === 'search' ? 'active' : ''}`} href="#">Search</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}