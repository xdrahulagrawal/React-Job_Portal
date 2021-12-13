import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { _handleDeleteProfile } from '../ResuableComponent/Methods';


const RejectCandidate = () => {
    const [rejectProfile, setRejectProfile] = useState([]);

    /** @description _getSelectCandidateProfile
     * Step1: Get the localstorage data convert to obj
     * Step2:Handle falsy condition
     * Step3:Update State
     */
    const _getSelectCandidateProfile = () => {
        const getRejectData = localStorage.getItem('rejectList')
        const rejectList = JSON.parse(getRejectData || '[]');
        if (!getRejectData) {
            return
        }
        setRejectProfile(rejectList)
    }

    /** @description _handleDeleteRejectProfile
    * Step1: Get the delete profile common method and pass key  
    */

    const _handleDeleteRejectProfile = () => {
        _handleDeleteProfile("rejectList")
    }

    useEffect(() => {
        _getSelectCandidateProfile()
    }, [])



    return (
        <>
            <div className='container'>
                <h2 >Rejected Candidate List</h2>
                <Link to={`/`}                      >
                    <button className='link-profile danger mx-4' onClick={_handleDeleteRejectProfile}>Delete All</button>
                </Link>
            </div>
            <div className='container'>
                {rejectProfile.map((items: any, index: any) => {
                    return (
                        <div key={index} className='container-select'>
                            <img src={items.data.Image} alt={items.name} />
                            <h3>{items.data.name}</h3>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RejectCandidate
