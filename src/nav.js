import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';
import logoPreto from './img/logo_preto.png';
import links from './links';

export default class MyNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">
                        Curso Popular de Formação de Defensoras e Defensores Públicos
                    </NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="align-self-center">
                            <Button href={links.aulasOnline} color="secondary">Assistir aulas online</Button>
                        </NavItem>
                        <NavItem>
                            <img src={logoPreto} className="d-inline-block mr-1" />
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
