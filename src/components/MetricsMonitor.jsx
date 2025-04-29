// Styles from components folder.
import styles from "../styles/components/metrics.module.scss";

// JSX
export default function MetricsMonitor({ children }) {
    return <div class={styles.base}>{children}</div>;
}
