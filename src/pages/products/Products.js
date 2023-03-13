import { Link, useLoaderData } from "react-router-dom";

export default function Products() {
    const products = useLoaderData()

    return (
        <div className="products">
            {products.map(product => (
                <Link to={product.id.toString()} key={product.id}>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </Link>
            ))}
        </div>
    )
}

// Data loader
export const productLoader = async () => {
    const res = await fetch('http://localhost:4000/products')

    if (!res.ok) {
        throw Error("Could not fetch the products")
    }
    return res.json()
}