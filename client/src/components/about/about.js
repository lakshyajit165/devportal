import React from 'react';
import Img from '../../img/logo_file.png';

import Particles from 'react-particles-js';
import '../../App.css';

const particleOptions = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#000000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
}

const about = () => {
  return (
    <div>
    <Particles className="particles"
            params={particleOptions}
          />  
    <div className="container text-center card pl-5 pr-5 pt-4 pb-4 col-lg-10 animated fadeInLeft" style={{ borderRadius: '5px'}}>
    <div className="card-body col-lg-12 mx-auto">    
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
        
         <a href="https://www.facebook.com/lakshyajit.laxmikant" target="_blank" rel="noopener noreferrer" className="m-2 text-dark"><i className="fab fa-facebook fa-2x"></i></a>
          <a href="https://github.com/lakshyajit165" target="_blank" rel="noopener noreferrer" className="m-2 text-dark"><i className="fab fa-github fa-2x"></i> </a>
          <a href="https://www.linkedin.com/in/lakshyajit/" target="_blank" rel="noopener noreferrer" className="m-2 text-dark"><i className="fab fa-linkedin fa-2x"></i> </a>
          <a href="https://www.quora.com/profile/Lakshyajit-Laxmikant" target="_blank" rel="noopener noreferrer" className="m-2 text-dark"><i className="fab fa-quora fa-2x"></i></a>
         
          <a href="https://medium.com/@lakshyajit165" target="_blank" rel="noopener noreferrer" className="m-2 text-dark"><i className="fab fa-medium fa-2x"></i> </a>
          
      </div>
    </div>
    </div>
    </div>
  )
}

export default about;