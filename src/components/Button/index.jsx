import styles from "./Button.module.scss";
import PropTypes from "prop-types";

function Button({ title, children }) {
    return <button title={title}>{children}</button>;
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
};

export default Button;
