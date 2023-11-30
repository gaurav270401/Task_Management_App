import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
  background: linear-gradient(rgba(36, 113, 163, 0.8), rgba(36, 113, 163, 0.8));
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const NavTitle = styled(NavLink)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #FFFFFF;
`;

const NavLinks = styled('div')`
  display: flex;
  align-items: center;
`;

const NavLinkItem = styled(NavLink)`
  font-size: 18px;
  margin-right: 20px;
  text-decoration: none;
  color: #FFFFFF;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const NavBar = () => {
  return (
    <Header position='static'>
      <NavContainer>
        <NavTitle to="/">Task Manager</NavTitle>
        <NavLinks>
          <NavLinkItem to="/crudtasks">Manage Tasks</NavLinkItem>
          <NavLinkItem to="/addtask">New Task</NavLinkItem>
          {/* <NavLinkItem to="/edittask">Edit Task</NavLinkItem> Uncomment for editing tasks */}
        </NavLinks>
      </NavContainer>
    </Header>
  );
};

export default NavBar;
