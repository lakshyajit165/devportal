import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profileActions';

class Experience extends Component {

  onDeleteClick(id){
      this.props.deleteExperience(id);
  }  
  render() {
    
    const experience = this.props.experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td>{exp.title}</td>
            <td>
                <Moment format="YYYY/MM/DD">{exp.from}</Moment> - {exp.to === null ? (' Present') : (<Moment format="YYYY/MM/DD">{exp.to}</Moment>)}
            </td>
            <td><button className="btn btn-danger" onClick={this.onDeleteClick.bind(this, exp._id)}>Delete<i className="fas fa-trash-alt ml-2"></i></button></td>
        </tr>
    )) 
    return (
      <div className="table-responsive">
        <h3 className="mb-4 text-center"><i className="fas fa-list mr-2"></i>Experience Credentials</h3>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                   <th className="text-center">Company</th> 
                   <th>Title</th> 
                   <th>Years</th> 
                   <th /> 
                </tr>
                {experience}
            </thead>
        </table>
      </div>  
    
    )
  }
}

Experience.propTypes = {
    deleteExperience: PropTypes.func.isRequired
}

export default connect(null, { deleteExperience })(Experience);
