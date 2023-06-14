import { NavLink } from 'react-router-dom';
import NavLinkStyle from 'components/NavLinkStyles/NavLinkStyles';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} style={NavLinkStyle} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} style={NavLinkStyle} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
