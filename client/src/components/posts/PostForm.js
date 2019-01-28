import React, { Component } from 'react';
 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
 import { addPost } from '../../actions/postActions';
 
  class PostForm extends Component {
   constructor(props) {
     super(props);
     this.state = {
       text: '',
       errors: {}
     };
 
      this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
   }
 
    componentWillReceiveProps(newProps) {
     if (newProps.errors) {
       this.setState({ errors: newProps.errors });
     }
   }
 
    onSubmit(e) {
     e.preventDefault();
 
      const { user } = this.props.auth;
 
      const newPost = {
       text: this.state.text,
       name: user.name,
       avatar: user.avatar
     };
 
      this.props.addPost(newPost);
     this.setState({ text: '' });
   }
 
    onChange(e) {
     this.setState({ [e.target.name]: e.target.value });
   }
 
    render() {
     const { errors } = this.state;
 
      return (
       <div className="post-form mb-3 animated zoomIn">
         <div className="card card-info">
           <div className="card-header bg-info text-white text-center"><h4><i className="fas fa-pencil-alt mr-2"></i><b>Say Something...</b></h4></div>
           <div className="card-body">
             <form onSubmit={this.onSubmit}>
               <div className="form-group">
                 <TextAreaFieldGroup
                   placeholder="Create a post"
                   name="text"
                   value={this.state.text}
                   onChange={this.onChange}
                   error={errors.text}
                 />
               </div>
               <div className="text-center">
                  <button type="submit" className="btn btn-dark">
                    Submit
                  </button>
               </div>   
             </form>
           </div>
         </div>
       </div>
     );
   }
 }
 
  PostForm.propTypes = {
   addPost: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
   errors: PropTypes.object.isRequired
 };
 
  const mapStateToProps = state => ({
   auth: state.auth,
   errors: state.errors
 });
 
  export default connect(mapStateToProps, { addPost })(PostForm);