import React from 'react';
import NavBarContainer from './navBarContainer';
import Logo from './logo';
import MenuToggle from './menuToggle';
import MenuLinks from './menuLinks';

const NavBar = props => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
