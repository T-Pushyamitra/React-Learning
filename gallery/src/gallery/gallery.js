import Image from "../image/image"
import ImageData from "../data/data.json"
import { useState } from "react";
import { useEffect } from "react";

export default function Gallery({images}) {

    return (
    <>
        <div className="gallery">
            {
                images? images.map((image) => (
                    <Image key={image.image_id} image_id={image.image_id} alt={image.desc}/>
                )) : <h3> No Images </h3>
            }
        </div>
    </>
    )
}