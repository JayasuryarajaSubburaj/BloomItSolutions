import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import UserInfo from './components/UserInfo';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the CSS file
import Dashboard from './components/Dashboard';

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement('nav', { className: 'navbar navbar-expand-lg navbar-light bg-light' },
      React.createElement(Link, { className: 'navbar-brand', to: '/' }, 'React Project'),
      React.createElement('div', { className: 'collapse navbar-collapse' },
        React.createElement('ul', { className: 'navbar-nav mr-auto' },
          React.createElement('li', { className: 'nav-item' },
            React.createElement(Link, { className: 'nav-link', to: '/' }, 'Home')),
          React.createElement('li', { className: 'nav-item' },
            React.createElement(Link, { className: 'nav-link', to: '/about' }, 'About')),
          React.createElement('li', { className: 'nav-item' },
            React.createElement(Link, { className: 'nav-link', to: '/contact' }, 'Contact')),
          React.createElement('li', { className: 'nav-item' },
            React.createElement(Link, { className: 'nav-link', to: '/login' }, 'Login')),
        )
      )
    ),
    React.createElement(Routes, null,
      React.createElement(Route, { path: '/', element: React.createElement(Home, null) }),
      React.createElement(Route, { path: '/about', element: React.createElement(About, null) }),
      React.createElement(Route, { path: '/contact', element: React.createElement(Contact, null) }),
      React.createElement(Route, { path: '/login', element: React.createElement(Login, null) }),
      React.createElement(Route, { path: '/user/:email/:password', element: React.createElement(UserInfo, null) }),
    )
  );
}

export default App;



