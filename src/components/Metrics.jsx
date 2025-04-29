// Components
import MetricCard from "./MetricCard.jsx";

// Styles
import styles from "../styles/metrics.module.scss";

// JSX
export default function Metrics( { children } ) {
    return (
      <div class = { styles.base }>
        { children }
      </div>
    );
}