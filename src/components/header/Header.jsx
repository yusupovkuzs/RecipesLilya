import './style.css'
import logo from '../../img/logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<div className="header__box">
				<div className="header__links">
					<NavLink to="/" className="header__link">Что нового</NavLink>
					<NavLink to="test" className="header__link">+Добавить рецепты</NavLink>
					<NavLink to="/" className="header__link">Рецепты</NavLink>
				</div>
				<div className="logo"><img src={logo} /></div>
				<div className="header__phone">
					<p>+38 050-456-56-56</p>
				</div>
			</div>
		</header>
	);
}

export default Header;