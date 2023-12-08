import './style.css'
import logo from '../../img/logo.svg'
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<section className="footer">
				<div className="footer__container">
					<div className="footer__links">
						<NavLink to="/">Политика конфиденциальности</NavLink>
					</div>
					<div className="logo"><img src={logo} /></div>
					<div className="footer__phone">
						<p>+38 050-456-56-56</p>
					</div>
				</div>
			</section>
		</footer>
	);
}

export default Footer;