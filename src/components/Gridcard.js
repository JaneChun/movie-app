function GridCard(props) {
    return (
        <div style={{ position: 'relative' }}>
            <a href={`/movie/${props.id}`}>
                <img
                    style={{
                        width: '200px',
                        height: '300px',
                        borderRadius: '5px',
                    }}
                    src={props.image}
                />
            </a>
        </div>
    );
}

export default GridCard;
