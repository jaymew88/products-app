import { Outlet } from "react-router-dom";

export default function ProductsLayout() {
    return (
        <div className="product-layout">
            <h2>Products</h2>
            <p>Check out our amazing products!</p>

            <Outlet />
        </div>
    )
}