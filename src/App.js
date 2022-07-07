import {Route, Routes} from 'react-router-dom';
import {useEffect} from 'react';

import Navigation from './routes/navigation/navigation.component';
import QuickPeek from './routes/quick-peek/quick-peek.component';
import Authentication from './routes/authentication/authentication.component';
import JobPanel from './routes/jobs/jobs.component';
import Analytics from './routes/analytics/analytics.component';
import MyProfile from './routes/my-profile/my-profile.component';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<QuickPeek />} />
        <Route path='auth' element={<Authentication/>} />
        <Route path='job/*' element={<JobPanel />} />
        <Route path='analytics' element={<Analytics />} />
        <Route path='profile' element={<MyProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
