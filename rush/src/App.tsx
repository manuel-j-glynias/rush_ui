import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/layout/Navbar"
import LogInContainer from "./components/Login/index";
import Landing from "./components/layout/Landing"
import './App.css';
import CoreProjectsContainer from "./components/CoreProjects";
import PublicationsContainer from "./components/Publications";
import TrialsContainer from "./components/Trials";


const App = () => {
    const [logged_in, set_logged_in] = React.useState(false);
    const [user_name, set_user_name] = React.useState('');


    return (
            <Router >
                <Fragment>
                    <Navbar logged_in={logged_in} set_logged_in={set_logged_in} />
                    <Route exact path='/' render={() => <Landing  logged_in={logged_in}  />}/>
                    <section className='container'>
                        <Switch>
                            <Route exact path='/login' render={() => <LogInContainer logged_in={logged_in} set_logged_in={set_logged_in}
                                                                                     set_user_name={set_user_name}/>}/>
                            <Route exact path="/core_projects" render={() => <CoreProjectsContainer logged_in={logged_in} user_name={user_name} />}/>
                             <Route  path="/core_projects/:id" render={() => <CoreProjectsContainer logged_in={logged_in} user_name={user_name}  key={Date.now()} />}/>
                            <Route  exact path="/publications"  render={() => <PublicationsContainer logged_in={logged_in} user_name={user_name} />}/>
                            <Route  path="/publications/:type/:id"  render={() => <PublicationsContainer logged_in={logged_in} user_name={user_name} key={Date.now()}/>}/>
                            <Route  exact path="/clinical_trials"  render={() => <TrialsContainer logged_in={logged_in} user_name={user_name} />}/>

                            PublicationsContainer
                        </Switch>
                    </section>
                </Fragment>
            </Router>
    )

}

export default App;
