import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav>
            <ul className='container-ul'>
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
    )
}

export default Navbar
