
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const ProfileDetails = () => {
    const location = useLocation()
    const { items } = location.state;

    /**@description _handleSelectProfile and _handleRejectProfile
     * step1:Check localstorage key is exist or not and set array
     * step2:Get the localstorage key and convert into object
     * step3:Set object and push into the array
     * step4: Convert data into the string and set localstorage
     */

    const _handleSelectProfile = (data: any) => {
        if (localStorage.getItem('selectList') == null) {
            localStorage.setItem('selectList', '[]')
        }
        let selectProfileData = JSON.parse(localStorage.getItem('selectList') || '[]')
        for (let i = 0; i < selectProfileData.length; i++) {
            if (selectProfileData[i].data.id == data.id) {
                alert('Profile already selected')
                return
            }
        }
        const selectProfile = {
            data
        }
        selectProfileData.push(selectProfile)
        localStorage.setItem('selectList', JSON.stringify(selectProfileData));
    }

    const _handleRejectProfile = (data: any) => {
        if (localStorage.getItem('rejectList') == null) {
            localStorage.setItem('rejectList', '[]')
        }
        let rejectProfileData = JSON.parse(localStorage.getItem('rejectList') || '[]')
        for (let i = 0; i < rejectProfileData.length; i++) {
            if (rejectProfileData[i].data.id == data.id) {
                alert('Profile already rejected')
                return
            }
        }
        const rejectProfile = {
            data,
        }
        rejectProfileData.push(rejectProfile);
        localStorage.setItem('rejectList', JSON.stringify(rejectProfileData));
    }
    return (
        <>
            <div className='container  justifyContent'>
                <img src={items.Image} alt={items.name} className='borderRadius  container-image-item' />
                <div className='flex-item'>
                    <h2 className='user-name'>
                        <span>Name : {items.name}</span>
                    </h2>
                    <div className='profile-actions'>
                        <Link to={`/`}                      >
                            <button className='link-profile' onClick={(e) => _handleSelectProfile(items)}>Select</button>
                        </Link>
                        <Link to={`/`}                       >
                            <button className='link-profile danger mx-4' onClick={() => _handleRejectProfile(items)}>Reject</button>
                        </Link>
                        <Link to={`/`}                       >
                            <button className='link-profile warning'> Go Back</button>
                        </Link>
                    </div>

                    <div className='mt-4'>

                    </div>

                </div>
            </div >
        </>
    )
}

export default ProfileDetails;
