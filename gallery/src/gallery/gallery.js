import Image from "../image/image"

export default function Gallery({images}) {
    return (
    <>
        <div className="gallery">
            {
                (images.length)? images.map((image) => (
                    <Image key={image.image_id} image_id={image.image_id} alt={image.desc}/>
                )) : (<h3> No Images </h3>)
            }
        </div>
    </>
    )
}