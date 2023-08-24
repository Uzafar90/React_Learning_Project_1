import PropTypes from 'prop-types';

const Header = ({ text, bgColor, textColor }) => {
	const headerStyle = {
		backgroundColor: bgColor,
		color: textColor
	};
	return (
		<header style={headerStyle}>
			<div className="container">
				<h1>{text}</h1>
			</div>
		</header>
	);
};

Header.defaultProps = {
	text: 'rateMyReactApp.com',
	bgColor: '#fff',
	textColor: '#b467fc'
};

Header.propTypes = {
	text: PropTypes.string.isRequired,
	bgColor: PropTypes.string,
	textColor: PropTypes.string
};

export default Header;
