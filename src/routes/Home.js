import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_URL } from '../Config';
import MainImage from '../components/MainImage';
import GridCard from '../components/Gridcard';

import styles from './Home.module.css';
import { Typography } from 'antd';
const { Title } = Typography;

function Home() {
    const [Movies, setMovies] = useState([]);
    const [CurrentPage, setCurrentPage] = useState(0);
    const fetchMovies = (path) => {
        fetch(path)
            .then((response) => response.json())
            .then((response) => {
                setMovies([...Movies, ...response.results]);
                setCurrentPage(response.page);
            });
    };

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=1`;
        fetchMovies(endpoint);
    }, []);

    const handleClick = () => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=${
            CurrentPage + 1
        }`;
        fetchMovies(endpoint);
    };

    return (
        <div className={styles.wrap}>
            {Movies[0] && (
                <MainImage
                    image={`${IMAGE_URL}w1280${Movies[0].backdrop_path}`}
                    title={Movies[0].title}
                    overview={Movies[0].overview}
                />
            )}

            <div className={styles.body}>
                <Title level={2} className={styles.titleInBody}>
                    최신 등록 컨텐츠
                </Title>
                <hr />

                <div className={styles.grid}>
                    {Movies &&
                        Movies.map((movie, index) => (
                            <React.Fragment key={index}>
                                <GridCard
                                    id={movie.id}
                                    image={
                                        movie.poster_path &&
                                        `${IMAGE_URL}w500${movie.poster_path}`
                                    }
                                />
                            </React.Fragment>
                        ))}
                </div>

                <br />
                <div className={styles.buttonDiv}>
                    <button onClick={handleClick} className={styles.button}>
                        더 보기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
