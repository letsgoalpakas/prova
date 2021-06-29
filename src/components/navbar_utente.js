import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import Image from "../assets/images/logo-remove.png";

const NavUtente = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" color="light" light expand="md">
        <NavLink href="/">
          <img class="d-flex mr-3" width="80" src={Image} alt="" />
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/" width="80">
                Let's GO!
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/registrazione">Registrati</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/catalogo">Catalogo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/assistenza">Assistenza</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavUtente;
