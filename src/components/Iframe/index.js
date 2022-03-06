export default (props) => (
    <div className="iframe-wrapper">
        <iframe src={props.src} title={props.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
)