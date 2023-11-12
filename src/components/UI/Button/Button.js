// Styles
import "./Button.css";

const Button = ({ children, type }) => {
    /*
    Possible btn types
    main-btn
    no-outline
    */
	return <button className={`btn ${type}`}>{children}</button>;
};

export default Button;
