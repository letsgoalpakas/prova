import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  Button,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Image from "../assets/images/logo-remove.png";

const NavDipendente = (props) => {
  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top">
        <img class="d-flex mr-3" width="80" src={Image} alt="" />

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/maindip">Let's GO!</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/visualizzaIncarichi">
                Visualizza incarichi
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/notificadipendente">Notifica Consegna</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Altro
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/accountd">Account</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <Button onClick={() => logout()}>Logout</Button>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavDipendente;
