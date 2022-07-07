import {Fragment, useState, useEffect} from 'react';
import { ProfileDropdownContainer, ProfileItems, EmptyMessage } from './profile-dropdown.styles';
import {useNavigate} from 'react-router-dom'

function ProfileDropdown(){
    const navigate = useNavigate();
    const goToProfilePage = () => navigate("/profile");

    return (
        <ProfileDropdownContainer>
            <ProfileItems>
                PUT PROFILE ITEMS HERE
            </ProfileItems>
            <button onClick={goToProfilePage}>
                Go to Profile Page
            </button>
        </ProfileDropdownContainer>
    )
}

export default ProfileDropdown;