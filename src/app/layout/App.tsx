import React from 'react';
import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashbord/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForms from '../../features/activities/form/ActivityForms';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <Route path='/' component={HomePage} />
        <Route path='/activities' exact component={ActivityDashboard} />
        <Route path='/activities/:id' component={ActivityDetails} />
        <Route path='/createActivity' component={ActivityForms} />
      </Container>
    </>
  );
}

export default observer(App);
