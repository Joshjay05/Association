import PropTypes from "prop-types";

const Button = ({ type, href, children, onClick, onSubmit, className }) => {
	return (
		<a
			href={href}
			type={type}
			onClick={onClick}
			onSubmit={onSubmit}
			className={className}>
			{children}
		</a>
	);
};

Button.propTypes = {
	type: PropTypes.string,
	children: PropTypes.object,
	onClick: PropTypes.object,
	onSubmit: PropTypes.object,
	className: PropTypes.string,
	href: PropTypes.string,
};
export default Button;
