import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class ProfileItem extends Component {
  render() {
    
    const { profile } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
            <div className="col-lg-4 text-center pt-5">
                <img src= {profile.user.avatar} alt="" className="rounded-circle img50"/>
            </div>
            <div className="col-lg-4 text-center pt-8">
                <h3>{profile.user.name}</h3>
                <hr/>
                <p>{profile.status} {isEmpty(profile.company) ? null : (<span>at {profile.company}</span>)}</p>
                <p>{isEmpty(profile.location) ? null : (<span>{profile.location}</span>)}</p>
                <Link to={`/profile/${profile.handle}`} className="btn btn-info">View Profile<i className="fas fa-angle-right ml-2"></i></Link>
            </div>
            <div className="col-lg-4 d-none d-sm-block">
                <h4 className="text-center"><i className="fas fa-tools mr-2"></i>Skill Set</h4>
                <ul className="list-group text-center">
                    {profile.skills.slice(0,4).map((skill, index) => (
                        <li key={index} className="list-group-item">
                            <i className="fa fa-check pr-1" />
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileItem;