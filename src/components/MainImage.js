import styles from '../routes/Home.module.css';
import { Typography } from 'antd';
const { Title } = Typography;

function MainImage(props) {
    return (
        <div
            style={{
                background: `linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 39%,
                rgba(0, 0, 0, 0) 41%,
                rgba(0, 0, 0, 0.65) 100%
            ),url('${props.image}'), #1c1c1c`,
                height: '500px',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                width: '100%',
                position: 'relative',
            }}
        >
            <a href={`/`}>
                <img
                    src={
                        'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    }
                    className={styles.logo}
                />
            </a>

            <div className={styles.header}>
                <Title level={2} className={styles.titleInHeader}>
                    {props.title}
                </Title>
                <p className={styles.overview}>{props.overview}</p>
            </div>
        </div>
    );
}

export default MainImage;
