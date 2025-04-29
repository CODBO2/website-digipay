// Styles from components folder.
import styles from "../styles/components/metriccard.module.scss";

// JSX
export default function MetricCard({ metric = "00", legend = "legend" }) {
    return (
        <div className={styles.card}>
            <p className={styles.metric}> {metric} </p>
            <p className={styles.legend}> {legend} </p>
        </div>
    );
}
