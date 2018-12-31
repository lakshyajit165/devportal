import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import MyComponent from '../typed/MyComponent';

class Landing extends Component {

  
  componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
  }
    
    

  render() {
    return (
        <div className="landing">
            <div className="dark-overlay landing-inner text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-4 mb-4">Developers' Portal</h1>
                            <div id="typing" style={{fontSize: '30px'}}>
                                <MyComponent/>
                            </div>
                            <br/>
                            <p className="lead"> Create a developer profile/portfolio, share posts and get help from other developers</p>
                            <hr />
                            <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up<i className="fas fa-user-plus ml-2"></i></Link>
                            <Link to="/login" className="btn btn-lg btn-light">Login<i className="fas fa-sign-in-alt ml-2"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired 
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Landing);
