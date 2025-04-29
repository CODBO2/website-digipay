// Styles
import styles from "../styles/metriccard.module.scss"

// JSX
export default function MetricCard({
    metric = "00",
    legend = "legend",
}) {
    return (
      <div class={styles.card}>
        <p class={styles.metric}> {metric} </p>
        <p class={styles.legend}> {legend} </p>
      </div>
    );
}