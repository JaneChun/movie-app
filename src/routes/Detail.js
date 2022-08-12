import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, API_URL, IMAGE_URL } from '../Config';
import CastList from '../components/CastList';

import styles from './Detail.module.css';
import { Typography } from 'antd';
const { Title } = Typography;

function Detail(props) {
    const [Movies, setMovies] = useState([]);
    const [Casts, setCasts] = useState([]);
    const [CastToggle, setCastToggle] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        fetch(`${API_URL}movie/${id}?api_key=${API_KEY}&language=ko`)
            .then((response) => response.json())
            .then((response) => {
                setMovies(response);

                fetch(`${API_URL}movie/${id}/credits?api_key=${API_KEY}`)
                    .then((response) => response.json())
                    .then((response) => {
                        setCasts(response.cast);
                        console.log(response.cast);
                    });
            });
    }, []);

    const handleClick = () => {
        setCastToggle(!CastToggle);
    };

    return (
        <div className={styles.wrap}>
            <img
                className={styles.mainImage}
                src={`${IMAGE_URL}w1280${Movies.backdrop_path}`}
            />

            <div className={styles.text}>
                <Title level={2}>
                    {Movies.title} ({Movies.original_title})
                </Title>

                <span className={styles.rel_date}>{Movies.release_date}</span>
                <span className={styles.runtime}>{Movies.runtime}분</span>
                {Movies.tagline && (
                    <p className={styles.tagline}>"{Movies.tagline}"</p>
                )}
                <p className={styles.overview}>{Movies.overview}</p>
                <p className={styles.vote}>
                    ★ {Number(Movies.vote_average).toFixed(1)}
                </p>

                <hr />

                <p>출연</p>
                <div className={styles.grid}>
                    {Casts &&
                        Casts.map((cast, index) => (
                            <React.Fragment key={index}>
                                {cast.profile_path && (
                                    <CastList
                                        name={cast.original_name}
                                        image={`${IMAGE_URL}w500${cast.profile_path}`}
                                    />
                                )}
                            </React.Fragment>
                        )).slice(0, 6)}
                </div>

                {CastToggle && (
                    <div className={styles.grid}>
                        {Casts &&
                            Casts.map((cast, index) => (
                                <React.Fragment key={index}>
                                    {cast.profile_path && (
                                        <CastList
                                            name={cast.original_name}
                                            image={`${IMAGE_URL}w500${cast.profile_path}`}
                                        />
                                    )}
                                </React.Fragment>
                            )).slice(7)}
                    </div>
                )}

                <div className={styles.buttonDiv}>
                    <button onClick={handleClick} className={styles.button}>
                        {CastToggle ? '접기' : '더 보기'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Detail;
