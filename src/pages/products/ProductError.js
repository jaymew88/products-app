import { Link, useRouteError } from "react-router-dom";

export default function ProductError() {
    const error = useRouteError()

    return (
        <div className="product-error">
            <h2>Error</h2>
            <p>{error.message}</p>
            <Link to="/">Back to home page</Link>
        </div>
    )

}