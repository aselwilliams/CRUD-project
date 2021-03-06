import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Link } from 'react-router-dom'

function Navigation() {
  return (
    <Nav style={{backgroundColor:'lightblue'}}>
        <NavItem>
        <NavLink>
            <Link to='/' style={{color:'black', textDecoration:'none'}}>
            Home
            </Link>
            </NavLink>
        </NavItem>
        <NavItem>
        <NavLink>
            <Link to='/addNewUser' style={{color:'black', textDecoration:'none'}}>
            Add User
            </Link>
        </NavLink>
        </NavItem>
        </Nav>
   
  )
}

export default Navigation