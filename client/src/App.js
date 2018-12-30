import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import AddExperience from './components/add-credentials/AddExperience';
import AddEducation from './components/add-credentials/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';

import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import NotFound from './components/not-found/NotFound';
 



// Check for token
if(localStorage.jwtToken){
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    
    //Decode token and get user info and expiration
    const decoded = jwt_decode(localStorage.jwtToken);

    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime){
        // Logout User
        store.dispatch(logoutUser());

        // Clear current Profile
        store.dispatch(clearCurrentProfile());
        //Redirect to login
        window.location.href = '/login';
    }
}


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Navbar />
            
            
            <Switch>
                <PrivateRoute
                  exact
                  path="/dashboard"
                  component={Dashboard}
                />
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
                
                <PrivateRoute exact path="/feed" component={Posts} />
                <PrivateRoute exact path="/post/:id" component={Post} />

                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profiles" component={Profiles} />
                <Route
                  exact
                  path="/profile/:handle"
                  component={Profile}
                />
                <Route component={NotFound} />
            </Switch>
            
            <Footer />
          </div>
        </Router>
      </Provider>  
    );
  }
}

export default App;
