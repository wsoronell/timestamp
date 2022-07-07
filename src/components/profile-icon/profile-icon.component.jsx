import { CartIconContainer, ShoppingIcon, ItemCount } from "./profile-icon.styles";
import {useState} from 'react';
import ProfileDropdown from '../profile-dropdown/profile-dropdown.component';

function ProfileIcon(){

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdownOpen = () => setIsDropdownOpen(!isDropdownOpen)

    return (
        <CartIconContainer>
            <ShoppingIcon onClick={toggleDropdownOpen}/>
            {isDropdownOpen && <ProfileDropdown />}
        </CartIconContainer>
    )
}

export default ProfileIcon;