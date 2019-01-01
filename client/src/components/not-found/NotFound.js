import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1 className="display-4 text-center">Page Not Found</h1>
      <hr />
      <p className="text-center">Sorry..This page does not exist :(</p>
      <br/>
      <div className="text-center">
         <Link to="/profiles" className="btn btn-light"><i className="fas fa-angle-left mr-2"></i>Go Back</Link>
      </div>
    </div>
  );
};
