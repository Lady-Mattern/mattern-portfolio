function Image(props) {
    return (
        <img id={props.id} src={props.image} alt={props.alt} />
    )
}

export default Image;