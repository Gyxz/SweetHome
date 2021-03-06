import React, {Component} from 'react';
import {Link} from 'react-router-dom';



export default class Sidebar extends Component {
  render() {
    return (
        
    <nav className="navbar navbar-dark bg-dark navbar-expand-md fixed-left box">
        <a href="/" className="navbar-brand">
            <svg class="bi bi-building" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M15.285.089A.5.5 0 0115.5.5v15a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V14h-1v1.5a.5.5 0 01-.5.5H1a.5.5 0 01-.5-.5v-6a.5.5 0 01.418-.493l5.582-.93V3.5a.5.5 0 01.324-.468l8-3a.5.5 0 01.46.057zM7.5 3.846V8.5a.5.5 0 01-.418.493l-5.582.93V15h8v-1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V15h2V1.222l-7 2.624z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M6.5 15.5v-7h1v7h-1z" clip-rule="evenodd"/>
                <path d="M2.5 11h1v1h-1v-1zm2 0h1v1h-1v-1zm-2 2h1v1h-1v-1zm2 0h1v1h-1v-1zm6-10h1v1h-1V3zm2 0h1v1h-1V3zm-4 2h1v1h-1V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm-2 2h1v1h-1V7zm2 0h1v1h-1V7zm-4 0h1v1h-1V7zm0 2h1v1h-1V9zm2 0h1v1h-1V9zm2 0h1v1h-1V9zm-4 2h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1z"/>
            </svg>
            SweetHome
        </a>
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    {/* <Link to="/" className="nav-link" >Головна</Link> */}
                    <a href="/" className="nav-link">Головна</a>
                </li>
                <li className="navbar-item">
                    <Link to="/service" className="nav-link">Послуги</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/craftsman" className="nav-link">Майстри</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact" className="nav-link">Контакти</Link>
                </li>
            </ul>
        </div>
        <div className="contact_block_side">
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