const Navbar = () => {
    return (
        <header>
            <div>
                <Link to="/">
                    <h2>home</h2>
                </Link>
                <Link to="/about">
                    <h2>about</h2>
                </Link>
                <Link to="/contactme">
                    <h2>contact me</h2>
                </Link>
            </div>
        </header>
    )
}

export default Navbar