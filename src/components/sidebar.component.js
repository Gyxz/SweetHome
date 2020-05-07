import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Sidebar extends Component {
  render() {
    return (
        
    <nav className="navbar navbar-dark bg-dark navbar-expand-md fixed-left box">
        <Link to="/" className="navbar-brand">SweetHome</Link>
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to="/" className="nav-link">Головна</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/service" className="nav-link">Послуги</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/craftsman" className="nav-link">Майстри</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/" className="nav-link">Контакти</Link>
                </li>
            </ul>
        </div>
        <div className="contact_block">
            <div className="phone_block">
                <p className=""> 
                    <svg class="bi bi-phone" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
                    </svg>
                    +380963526992
                </p>
            </div>
            <div className="email_block">
                <p className="">sweethome@gmail.com</p>
            </div>
        </div>
    </nav>
    
    );
  }
}