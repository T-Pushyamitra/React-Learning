export default function Image({ image_id, alt}){

    return (
        <div className="gallery-item">
            <img src={image_id} alt={alt}/>
            <h5> {alt.slice(0, 30)} </h5>
        </div>
        );
}