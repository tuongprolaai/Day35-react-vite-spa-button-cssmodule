import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Button.module.scss";

function Button({
    bordered = false,
    rounded = false,
    primary = false,
    disabled = false,
    loading = false,
    children,
    href,
    size = "medium",
    className,
    onClick,
    ...passProps
}) {
    const classNames = clsx(styles.wrapper, className, styles[size], {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
        [styles.disabled]: disabled,
        [styles.loading]: loading,
    });

    const handleClick = (e) => {
        if (disabled || loading) return;
        onClick?.(e);
    };

    const Component = href ? "a" : "button";

    return (
        <Component
            {...passProps}
            href={href}
            className={classNames}
            onClick={handleClick}
            disabled={!href && disabled}
        >
            {loading && <span className={styles.spinner} />}
            <span className={styles.content}>{children}</span>
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    href: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
