 import React from 'react';
 import { Link } from 'react-router-dom';
 
 const ProfileActions = () => {
   return (
    <div className="text-center col-lg-12">
                <div className="row">
                    <div className="col-lg-4 mb-2">
                            <Link to="/edit-profile" className="btn btn-light btn-block">
                                <i className="fas fa-user-circle text-info mr-1"></i>Edit Profile
                            </Link>    
                    </div>
                    <div className="col-lg-4 mb-2">
                            <Link to="/add-experience" className="btn btn-light btn-block ">
                                <i className="fab fa-black-tie text-info mr-1"></i>Add Experience
                            </Link>
                    </div>
                    <div className="col-lg-4 mb-2">
                            <Link to="/add-education" className="btn btn-light btn-block">
                                <i className="fas fa-graduation-cap text-info mr-1"></i>Add Education
                            </Link>
                    </div>
                </div>    
                
    </div> 
   )
 }

 export default ProfileActions;
 