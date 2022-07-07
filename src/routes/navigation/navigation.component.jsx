import {Fragment} from 'react';
import {Link, Outlet} from 'react-router-dom';

function Navigation() {
    // code business logic here

    return (
        <Fragment>
            <div id="navigation-container">
                <Link to="/">
                    QuickPeek
                </Link>
                <Link to="/job">
                    JobPanel
                </Link>
                <Link to="/analytics">
                    Analytics
                </Link>
                <Link to="/auth">
                    Authentication
                </Link>
                <Outlet />
            </div>
        </Fragment>
    )
}

export default Navigation