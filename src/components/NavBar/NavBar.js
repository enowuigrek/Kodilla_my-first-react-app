import styles from './NavBar.module.scss'
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <Container>
            <div className={styles.navBar}>
                <div className= 'nav-tasks'>
                  <Link to='/'><span className='fa fa-tasks' /></Link>
                </div>
                <div className= 'nav-items'>
                  <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/'>Home</NavLink>
                  <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/favorite'>Favorite</NavLink>
                  <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/about'>About</NavLink>
                </div>
            </div>
        </Container>
    </nav>
  )
};

export default NavBar;