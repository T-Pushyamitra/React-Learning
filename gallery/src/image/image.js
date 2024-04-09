export default function Image({ image_id, alt}){

    const build_img = (image_id) => {
        return "https://i.imgur.com/" + image_id + ".jpeg"
    }

    return (
        <div class="gallery-item">
            <img src={build_img(image_id)} alt={alt}/>
            <h5> {alt.slice(0, 30)} </h5>
        </div>
        );
}