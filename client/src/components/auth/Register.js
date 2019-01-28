import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

import Img from '../../img/logo_file.png';

class Register extends Component {
  
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {

            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email:this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        this.props.registerUser(newUser, this.props.history);
        
    }

    render() {

    const { errors } = this.state;   
    
    

    return (
      <div className="register">
         <div className="register-overlay">
            <div className="container">
            <div className="row">
                <div className="col-lg-7 pt-5">
                    <h1 style={{ fontSize: '50px'}} className="text-white animated fadeInLeft"><b>Built for Budding Developers!</b></h1>
                    <br/><br/>
                    <p className="lead text-white animated fadeInUp">Create your own profile, Take a peek at other developer profiles, Create some Posts and Interact with others.</p>
                    <p className="lead text-white animated fadeInUp">If you want a profile pic of yours, make sure, you sign up for gravatar and put a pic of yours over there. (Gravatar is nothing but wordpress.com)</p>
                    <br/>
                    <p className="lead text-white animated fadeInUp"><b>Confused a bit? Follow these simple steps:</b></p>
                    <p className="lead text-white animated fadeInUp"><i className="fas fa-caret-right mr-2"></i>Go to https://en.gravatar.com/</p>
                    <p className="lead text-white animated fadeInUp"><i className="fas fa-caret-right mr-2"></i>Create your account with email or sign up with google.</p>
                    <p className="lead text-white animated fadeInUp"><i className="fas fa-caret-right mr-2"></i>Confirm your account through the confirmation mail.</p>
                    <p className="lead text-white animated fadeInUp"><i className="fas fa-caret-right mr-2"></i>Go to your profile section, and add your profile pic(Ignore if you already get a pic by signing up with google).</p>
                    <p className="lead text-white animated fadeInUp"><i className="fas fa-caret-right mr-2"></i>Whoa! You're done!. Go to DevPortal and have fun!</p>
                </div>
                <div className="col-lg-5 pl-5 pr-5 m-auto forms animated fadeInRight" style={{ backgroundColor: 'white'}}>
                <div className="text-center">
                <img src={Img} alt=""/>
                </div>   
                <hr/> 
                <h1 className="display-4 text-center">Sign Up</h1>
                <p className="lead text-center">Create your DevPortal account</p>
                <form onSubmit={this.onSubmit}>
                    <TextFieldGroup 
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        error={errors.name}
                    />

                    <TextFieldGroup 
                        placeholder="Email Address"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={errors.email}
                        info="This site uses Gravatar. So if you want a profile picture, use a gravatar email"
                    />

                    <TextFieldGroup 
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={errors.password}
                    />

                    <TextFieldGroup 
                        placeholder="Confirm Password"
                        name="password2"
                        type="password"
                        value={this.state.password2}
                        onChange={this.onChange}
                        error={errors.password2}
                    />

                    <div className="text-center">

                        <input type="submit" className="btn btn-info btn-block mt-4" />
                    
                    </div>  
                </form>
                </div>
            </div>
            </div>
          </div>  
        </div>
    )
  }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired, 
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) =>({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
