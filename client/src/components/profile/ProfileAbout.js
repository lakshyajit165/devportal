import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
  
  render() {

    const { profile } = this.props;

    // Get First Name
    const fisrtName = profile.user.name.trim().split(' ')[0];

    // Skill list
    const skills = profile.skills.map((skill, index) => (
        <div key={index} className="p-3">
            <i className="fa fa-check mr-2" />{skill}
        </div>
    ));

    return (
        <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-light mb-3">
              { isEmpty(profile.bio) ? null : (<h3 className="text-center text-info"><b>{fisrtName}'s Bio</b></h3>)}
                
                <p className="lead">
                    { isEmpty(profile.bio) ? null : (<span>{profile.bio}</span>)}
                </p>
                { isEmpty(profile.bio) ? null : (<hr />)}
                <h3 className="text-center text-info"><b>Skill Set</b></h3>
                <div className="row">
                  <div className="d-flex flex-wrap justify-content-center align-items-center">
                    {skills}
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
  }
}

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileAbout;
