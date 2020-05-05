import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
export default class Sidebar extends Component {
  render() {
    return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md fixed-left">
        <Link to="/" className="navbar-brand">SweetHome</Link>
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to="/" className="nav-link">Головна</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/" className="nav-link">Послуги</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/" className="nav-link">Про нас</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/" className="nav-link">Контакти</Link>
                </li>
            </ul>
        </div>
    </nav>
    
    );
  }
}