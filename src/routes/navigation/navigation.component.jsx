import {Fragment, useState, useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import {LogoContainer, NavigationContainer, NavLinks, NavLink} from './navigation.styles';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import ProfileDropdown from '../../components/profile-dropdown/profile-dropdown.component';
import ProfileIcon from '../../components/profile-icon/profile-icon.component';

function Navigation() {
    // code business logic here

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/job">
                        JobPanel
                    </NavLink>
                    <NavLink to="/analytics">
                        Analytics
                    </NavLink>
                    <NavLink to="/auth">
                        Sign In
                    </NavLink>
                    <ProfileIcon>
                        put profile icon here
                    </ProfileIcon>
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation