import Image from "../image/image"

export default function Gallery({type}) {

    const title = (type === "food")? "Food Gallery" : "Mountain Gallery"

    const get_data = () => {
        const food_data = [ {image_id: "II6eVGy", desc:"Buttery steak bites and eggs"}, 
                            {image_id: "EjPy8Tx", desc:"Ramen"},
                            {image_id: "mvYRSuy", desc:"Amazing French toast"}
                          ]
        
        const mountains_data = [ {image_id: "acCHR32", desc:"Beautiful Mountains of Alaska"}, 
                                 {image_id: "YjySihZ", desc:"Mountain"},
                                 {image_id: "6VaovAv", desc:"Rocky Mountain"}
                               ]

        return (type==="food")? food_data : mountains_data
    }


    return (
    <>
        <h1> {title} </h1>

        <div class="gallery">
            {   
                get_data().map( food => (
                    <Image
                        image_id={food.image_id}
                        alt={food.desc}
                    />
                ))
            }
            
        </div>
    </>
    )
}