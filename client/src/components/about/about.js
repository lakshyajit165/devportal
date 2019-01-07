import React from 'react';
import Img from '../../img/logo_file.png';

const about = () => {
  return (
    <div className="container text-center pt-4 pb-4 col-lg-8">
    <img src={Img} alt=""/>
    <br/><br/>
      <h1><b>About this App</b></h1>
      <hr/>
      <p className="lead text-justify pt-4 pb-4">This App was built in the process of learning the "MERN Stack". It allows people
          to Login or SignUp and create their profile. It also lets them to create Posts and Like/Unlike them.
          Basically this app is a mixture of many functionalities namely, CRUD operations (Users are allowed to create, view, update and delete their profile), Authentication (It uses local passport authentication in node.js), Sessions(Users logging in will stay logged in until an hour),
          API handling(Shows the latest 5 repos of users mentioning their github username in their profile info, by fetching data from github API) and Email functionality (Sends a welcome email to users Signing Up). 
      </p>
      <h1>Follow me on Social Media</h1>
      <hr/>
      <br/>
      <div className="social text-center">
        
         <a href="https://www.facebook.com/lakshyajit.laxmikant" target="_blank" rel="noopener noreferrer" className="m-2 grey-text"><i className="fab fa-facebook-f fa-2x"></i></a>
          <a href="https://github.com/lakshyajit165" target="_blank" rel="noopener noreferrer" className="m-2 grey-text"><i className="fab fa-github fa-2x"></i> </a>
          <a href="https://www.linkedin.com/in/lakshyajit/" target="_blank" rel="noopener noreferrer" className="m-2 grey-text"><i className="fab fa-linkedin-in fa-2x"></i> </a>
          <a href="https://www.quora.com/profile/Lakshyajit-Laxmikant" target="_blank" rel="noopener noreferrer" className="m-2 grey-text"><i className="fab fa-quora fa-2x"></i></a>
         
          <a href="https://medium.com/@lakshyajit165" target="_blank" rel="noopener noreferrer" className="m-2 grey-text"><i className="fab fa-medium fa-2x"></i> </a>
       
      </div>
    </div>
  )
}

export default about;