import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Image from "../assets/images/logo-remove.png";

const NavCliente = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top">
        <img class="d-flex mr-3" width="80" src={Image} alt="" />

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/main">Let's GO!</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/preordine">Nuovo Ordine</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/pregestione">Gestione prenotazioni</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/notificacliente">Notifica Consegna</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Altro
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/storico">Storico</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/account">Account</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <Button onClick={() => logout()}>Logout</Button>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <br></br>
        <br></br>
      </Navbar>
      <br></br>
      <br></br>
    </div>
  );
};

export default NavCliente;
