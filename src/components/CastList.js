import styles from '../routes/Detail.module.css';

function CastList(props) {
    return (
        <div>
            <div className={styles.profile}>
                <img className={styles.image} src={props.image} />
            </div>
            <p className={styles.name}>{props.name}</p>
        </div>
    );
}

export default CastList;
