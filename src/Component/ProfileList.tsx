import { useState, useEffect } from 'react';
import Loader from '../ResuableComponent/Loader';
import { GetRequest } from '../Utitiles/Network/index';
import { Link } from 'react-router-dom';


const ProfileList = () => {
    const [profile, setProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    /**
       * @description:_getUserProfile
       * Step1: Get the localstorage data
       * Step2: Loader is true before the network call
       * step3: Handle all falsy condition
       * step4: Send the network call api
       * step5- Create new array and concat 
       * step6- Filter array
       * step5-update the state
       */

    const _getUserProfile = async () => {
        let selectProfileData = JSON.parse(localStorage.getItem('selectList') || '[]')
        let rejectProfileData = JSON.parse(localStorage.getItem('rejectList') || '[]')
        setIsLoading(true);
        const url = 'http://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json'
        const apiResponse = await GetRequest(url);
        if (!apiResponse) {
            return
        }

        if (selectProfileData.length === 0 && rejectProfileData.length === 0) {
            setProfile(apiResponse);
            setIsLoading(false);
            return
        }

        const elementsToRemove = [...selectProfileData, ...rejectProfileData]
        const filteredArrayList = apiResponse.filter((el: any) => {
            return !elementsToRemove.find(element => element.data.id === el.id)
        });

        setProfile(filteredArrayList);
        setIsLoading(false);
    }

    useEffect(() => {
        _getUserProfile();
    }, []);

    return (
        <>
            <Loader isLoading={isLoading} />
            <h2 className='center'>Available Candidates</h2>
            <div className='container'>
                {profile.map((items: any) => {
                    return (
                        <div key={items.id} className='container-item'>
                            <img src={items.Image} alt={items.name} />
                            <h3>{items.name}</h3>
                            <Link to={`/${items.id}`}
                                state={{ items: items }} className='link'>View Profile</Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ProfileList
