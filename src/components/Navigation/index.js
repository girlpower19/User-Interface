import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import * as ROLES from '../../constants/roles';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";


  const Navigation = () => (
  <AuthUserContext.Consumer>
  {
    authUser=>authUser ? <NavigationAuth authUser={authUser}/> : <NavigationNonAuth />}
   </AuthUserContext.Consumer>


);

class NavigationAuth extends React.Component
{
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
 
render()
{
  return(
    <MDBNavbar color="light-blue" dark expand="md" className="blue-gradient">
    <MDBNavbarToggler onClick={this.toggleCollapse} />
    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
    
    <MDBNavbarBrand>
    <MDBNavLink to={ROUTES.LANDING}>Girl Power</MDBNavLink>
    </MDBNavbarBrand>
    <MDBNavbarNav right>
    <MDBNavItem>
           {/* <MDBNavLink to={ROUTES.ACCOUNT}>Profile</MDBNavLink>*/}
    </MDBNavItem>
    <MDBNavItem>
    {this.props.authUser.roles.includes(ROLES.ADMIN) &&(  <MDBNavLink to={ROUTES.ADMIN}>Admin</MDBNavLink>)}
    </MDBNavItem>
    
    
    <MDBNavItem>
    <MDBDropdown dropleft>
      <MDBDropdownToggle nav caret>
        <MDBIcon icon="user" />
      </MDBDropdownToggle>
      <MDBDropdownMenu className="dropdown-default">
        <MDBDropdownItem href={ROUTES.PASSWORD_CHANGE}> Change Password</MDBDropdownItem>
        <MDBDropdownItem href="#"><SignOutButton/></MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  </MDBNavItem>
  </MDBNavbarNav>
  </MDBCollapse>
  </MDBNavbar>

  )
}
}
class NavigationNonAuth extends Component
{
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render()
  {
    return(
      <MDBNavbar color="light-blue" dark expand="md" className="blue-gradient">
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
      <MDBNavbarNav left>
      <MDBNavbarBrand>
      <MDBNavLink to={ROUTES.LANDING}>Girl Power</MDBNavLink>
      </MDBNavbarBrand>
      </MDBNavbarNav>
      
      <MDBNavbarNav right>
      <MDBNavItem>
      <MDBDropdown>
        <MDBDropdownToggle nav caret>
          <MDBIcon icon="user" />
        </MDBDropdownToggle>
        <MDBDropdownMenu className="dropdown-default">
          <MDBDropdownItem href={ROUTES.SIGN_UP}>Register</MDBDropdownItem>
          <MDBDropdownItem href={ROUTES.SIGN_IN}>Login</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBNavItem>
    </MDBNavbarNav>
    </MDBCollapse>
    </MDBNavbar>
    
    )
  }
}

export default Navigation;