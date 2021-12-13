import { useState, useMemo, useLayoutEffect } from "react"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const _toggleHamburger = () => {
        setNavbarOpen(!navbarOpen)
    }

    useLayoutEffect(() => {
        function updateSize() {
            setNavbarOpen(false);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const _navbarClass = useMemo(() => {
        return navbarOpen ? 'show' : 'hide'
    }, [navbarOpen])

    return (
        <>
            <nav className='nav-item show ' >
                <span className="burger" onClick={_toggleHamburger}>&#9776;</span>
                <ul className={`container-ul  ${_navbarClass}`}>
                    <li className='container-li '>
                        <NavLink to='/' className='navLink'>Home</NavLink>
                    </li>
                    <li className='container-li '>
                        <NavLink to='/shortlisted' className='navLink'>My Selected</NavLink>
                    </li>
                    <li className='container-li '>
                        <NavLink to='/rejected' className='navLink'>My Rejected</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
