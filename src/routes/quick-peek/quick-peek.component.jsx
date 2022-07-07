import {Fragment, useEffect, useState} from 'react';

import { QuickPeekContainer } from './quick-peek.styles';
import SummarySection from '../../components/summary-section/summary-section.component';
import ScheduledShifts from '../../components/scheduled-shifts/scheduled-shifts.component';
import IncomeOverview from '../../components/income-overview/income-overview.component';

function QuickPeek() {
    // code business logic here

    return (
        <QuickPeekContainer>
            QuickPeek Page
            <SummarySection />
            <ScheduledShifts />
            <IncomeOverview />
        </QuickPeekContainer>
    )
}

export default QuickPeek