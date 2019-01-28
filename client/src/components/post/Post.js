import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { Link } from 'react-router-dom';
 import PropTypes from 'prop-types';
 import PostItem from '../posts/PostItem';
 import CommentForm from './CommentForm';
 import CommentFeed from './CommentFeed';
 import Spinner from '../common/Spinner';
 import { getPost } from '../../actions/postActions';

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
 
  class Post extends Component {
   componentDidMount() {
     this.props.getPost(this.props.match.params.id);
   }
 
    render() {
     const { post, loading } = this.props.post;
     let postContent;
 
      if (post === null || loading || Object.keys(post).length === 0) {
       postContent = <Spinner />;
     } else {
       postContent = (
         <div>
           <PostItem post={post} showActions={false} />
           <CommentForm postId={post._id} />
           <CommentFeed postId={post._id} comments={post.comments} />
         </div>
       );
     }
 
      return (
       <div className="post">
       <Particles className="particles"
            params={particleOptions}
        /> 
         <div className="container">
           <div className="row">
             <div className="col-md-12">
               <Link to="/feed" className="btn btn-light mb-3">
               <i className="fas fa-angle-left mr-2"></i>Back To Feed
               </Link>
               {postContent}
             </div>
           </div>
         </div>
       </div>
     );
   }
 }
 
  Post.propTypes = {
   getPost: PropTypes.func.isRequired,
   post: PropTypes.object.isRequired
 };
 
  const mapStateToProps = state => ({
   post: state.post
 });
 
  export default connect(mapStateToProps, { getPost })(Post);