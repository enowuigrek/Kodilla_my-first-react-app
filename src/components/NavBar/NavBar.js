import styles from './NavBar.module.scss'
import Container from '../Container/Container';

const NavBar = () => {
  return (
    <nav>
        <Container>
            <div className={styles.navBar}>
                <div className= 'nav-tasks'>
                  <a href ='/'><span className='fa fa-tasks' /></a>
                </div>
                <div className= 'nav-items'>
                    <a href='/'>Home</a>
                    <a href='/favorite'>Favorite</a>
                    <a href='/about'>About</a>
                </div>
            </div>
        </Container>
    </nav>
  )
};

export default NavBar;