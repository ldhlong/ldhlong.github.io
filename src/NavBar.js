import { NavLink } from 'react-router-dom';
const NavBar = (props) => {
    return (
        <nav>
        <ul class="nav-bar">
        <li>
        <NavLink to='/contact' exact activeClassName="active-link">{props.contactTitle}</NavLink>
        </li>
        <li>
        <NavLink to='/projects' exact activeClassName="active-link">{props.projectTitle}</NavLink>
        </li>
        <li>
        <NavLink to='/bio' exact activeClassName="active-link">{props.bioTitle}</NavLink>
        </li>
        <li>
        <NavLink to='/' exact activeClassName="active-link">{props.homeTitle}</NavLink>
        </li>
        </ul>
        </nav>
    );
};

export default NavBar;