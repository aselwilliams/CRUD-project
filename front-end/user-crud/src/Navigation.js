import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Link } from 'react-router-dom'

function Navigation() {
  return (
    <Nav>
        <NavItem>
        <NavLink>
            <Link to='/'>
            Home
            </Link>
            </NavLink>
        </NavItem>
        <NavItem>
        <NavLink>
            <Link to='/addNewUser'>
            Add User
            </Link>
        </NavLink>
        </NavItem>
        </Nav>
   
  )
}

export default Navigation