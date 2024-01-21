/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const Button = ({ text, url }) => {
    return (
        <Link to={url}
            className="text-slate-100 border bg-slate-900 border-indigo-600 py-4 px-6 rounded inline-flex items-center hover:text-indigo-900 hover:border-slate-100"
            role="button"> {text}
        </Link>
    )
}

export default Button