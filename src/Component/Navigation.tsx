import Home from './Home';
import Error from './Error';
import { Routes, Route } from 'react-router-dom'
import ProfileDetails from './ProfileDetails';
import RejectCandidate from './RejectCandidate';
import SelectCandidate from './SelectCandidate';
import Navbar from './Navbar';

const Navigation = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<ProfileDetails />} />
                <Route path='/shortlisted' element={<SelectCandidate />} />
                <Route path='/rejected' element={<RejectCandidate />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}

export default Navigation;


