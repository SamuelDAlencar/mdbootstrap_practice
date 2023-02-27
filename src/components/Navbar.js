import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="https://oppem.com.br/">
          <img
            src="https://cdn.ngosolucoes.com/images/logo/gerdau/opus_logo.png"
            width="80"
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page">
                <Link to="/empreiteiro">Empreiteiro</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page">
                <Link to="/fiscal">Fiscal</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Obra
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Gerenciar PQ</MDBDropdownItem>
                  <MDBDropdownItem link>Gerenciar Reajustes</MDBDropdownItem>
                  <MDBDropdownItem link>Frentes Reais</MDBDropdownItem>
                  <MDBDropdownItem link>Galeria</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Medição
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Gerenciar PQ</MDBDropdownItem>
                  <MDBDropdownItem link>Gerenciar Reajustes</MDBDropdownItem>
                  <MDBDropdownItem link>Frentes Reais</MDBDropdownItem>
                  <MDBDropdownItem link>Galeria</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Relatórios
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Gerenciar PQ</MDBDropdownItem>
                  <MDBDropdownItem link>Gerenciar Reajustes</MDBDropdownItem>
                  <MDBDropdownItem link>Frentes Reais</MDBDropdownItem>
                  <MDBDropdownItem link>Galeria</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  RDOe
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Gerenciar PQ</MDBDropdownItem>
                  <MDBDropdownItem link>Gerenciar Reajustes</MDBDropdownItem>
                  <MDBDropdownItem link>Frentes Reais</MDBDropdownItem>
                  <MDBDropdownItem link>Galeria</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Dashboards
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Gerenciar PQ</MDBDropdownItem>
                  <MDBDropdownItem link>Gerenciar Reajustes</MDBDropdownItem>
                  <MDBDropdownItem link>Frentes Reais</MDBDropdownItem>
                  <MDBDropdownItem link>Galeria</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
