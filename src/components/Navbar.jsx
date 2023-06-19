import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <div>
                <Link
                    to="/"
                >
                    home
                </Link>
                <Link
                    to="/about"
                >
                    about
                </Link>
                <Link
                    to="/contact"
                >
                    contact
                </Link>
            </div>
        </header>
    )
}

export default Navbar