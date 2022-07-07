import {Fragment, useEffect, useState} from 'react';
import {JobPanelContainer} from './jobs.styles';
import Dropdown from '../../components/dropdown/dropdown.component';
import DropdownItem from '../../components/dropdown-item/dropdown-item.component';
import ShiftActions from '../../components/shift-actions/shift-actions.component';
import JobActions from '../../components/job-actions/job-actions.component';

function JobPanel() {
    // code business logic here

    return (
        <JobPanelContainer>
            JobPanel Page
           <Dropdown>
                <DropdownItem />
            </Dropdown>
            <ShiftActions />
            <JobActions />
        </JobPanelContainer>
    )
}

export default JobPanel