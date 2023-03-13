import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
    const { id } = useParams()
    const product = useLoaderData()

     return (
        <div className="product-details" >
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <div className="details">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
            </div>
        </div>
     )    
}

// Loader Function
export const productDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch('http://localhost:4000/products/' + id)

    if (!res.ok) {
        throw Error('Could not find that career')
    }
    return res.json()
}