import React, { Component } from 'react';
 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import PostForm from './PostForm';
 import PostFeed from './PostFeed';
 import Spinner from '../common/Spinner';
 import { getPosts } from '../../actions/postActions';
 

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

  class Posts extends Component {
   componentDidMount() {
     this.props.getPosts();
   }
 
    render() {
     const { posts, loading } = this.props.post;
     let postContent;
 
      if (posts === null || loading) {
       postContent = <Spinner />;
     } else {
       postContent = <PostFeed posts={posts} />;
     }
 
      return (
       <div className="feed">
       <Particles className="particles"
            params={particleOptions}
        /> 
         <div className="container">

           <div className="row">
             <div className="col-md-12">
               <h1 className="text-center">Post Feed</h1>
               <p className="lead text-center">Feel free to post something interesting!</p>
               <hr/>
               <PostForm />
               {postContent}
             </div>
           </div>
         </div>
       </div>
     );
   }
 }
 
  Posts.propTypes = {
   getPosts: PropTypes.func.isRequired,
   post: PropTypes.object.isRequired
 };
 
  const mapStateToProps = state => ({
   post: state.post
 });
 
  export default connect(mapStateToProps, { getPosts })(Posts);