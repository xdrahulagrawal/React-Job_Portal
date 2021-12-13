import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { _handleDeleteProfile } from '../ResuableComponent/Methods';

const SelectCandidate = () => {
    const [selectProfile, setSelectProfile] = useState([])



    /** @description _getSelectCandidateProfile
     * Step1: Get the localstorage data convert to obj
     * Step2:Handle falsy condition
     * Step3:Update State
     */
    const _getSelectCandidateProfile = () => {
        const getSelectData = localStorage.getItem('selectList')
        if (!getSelectData) {
            return
        }
        const selectList = JSON.parse(getSelectData || '[]');
        setSelectProfile(selectList)
    }

    /** @description _handleDeleteSelectProfile
   * Step1: Get the delete profile common method and pass key   
   */
    const _handleDeleteSelectProfile = () => {
        _handleDeleteProfile('selectList')
    }

    useEffect(() => {
        _getSelectCandidateProfile()
    }, [])
    return (
        <>
            <div className='container'>
                <h2 >Selected Candidate List</h2>
                <Link to={`/`}                      >
                    <button className='link-profile danger mx-4' onClick={_handleDeleteSelectProfile}>Delete All</button>
                </Link>
            </div>
            <div className='container'>
                {selectProfile.map((items: any, index: any) => {
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

export default SelectCandidate
