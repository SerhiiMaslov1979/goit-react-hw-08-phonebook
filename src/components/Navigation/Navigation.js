import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';
import NavLinkStyle from '../NavLinkStyles/NavLinkStyles';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} style={NavLinkStyle} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} style={NavLinkStyle} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
