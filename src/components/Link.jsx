// Styles from components folder.
import styles from "../styles/components/link.module.scss";

export default function Link({
    // Default values.
    ref = "#",
    label = "label",
    onClick = () => {},
    isCurrentPathname = false,
}) {
    return (
        <a
            href={ref}
            onClick={() => onClick(label)}
            className={`${styles.link} ${
                isCurrentPathname && styles.linkIsActive
            } `}
        >
            {label}
        </a>
    );
}
