// Styles from components folder.
import styles from "../styles/components/metriccard.module.scss";

interface PropType {
    width?: string;
    height?: string;

    metric?: string;
    legend?: string;

    icon?: ImageMetadata;
}

// JSX
export default function MetricCard({
    icon,
    width,
    height,
    metric,
    legend,
}: PropType) {
    return (
        <div
            style={{ width: width ? width : "", height: height ? height : "" }}
            className={styles.card}
        >
            {metric && <p className={styles.metric}>{metric}</p>}
            {legend && <p className={styles.legend}> {legend} </p>}
            {icon && (
                <img
                    alt="icon"
                    src={icon.src}
                    className={styles.icon}
                />
            )}
        </div>
    );
}
