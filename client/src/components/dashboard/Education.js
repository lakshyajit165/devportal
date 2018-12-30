import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {

  onDeleteClick(id){
      this.props.deleteEducation(id);
  }  
  render() {
    
    const education = this.props.education.map(edu => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td>{edu.degree}</td>
            <td>
                <Moment format="YYYY/MM/DD">{edu.from}</Moment> - {edu.to === null ? (' Present') : (<Moment format="YYYY/MM/DD">{edu.to}</Moment>)}
            </td>
            <td><button className="btn btn-danger" onClick={this.onDeleteClick.bind(this, edu._id)}>Delete<i className="fas fa-trash-alt ml-1"></i></button></td>
        </tr>
    )) 
    return (
      <div className="table-responsive">
        <h3 className="mb-4 text-center"><i className="fas fa-graduation-cap mr-2"></i>Education Credentials</h3>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                   <th className="text-center">School</th> 
                   <th>Degree</th> 
                   <th>Years</th> 
                   <th /> 
                </tr>
                {education}
            </thead>
        </table>
      </div>  
    
    )
  }
}

Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation })(Education);
