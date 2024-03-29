import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src='img/img-3.svg' alt="success" />
      <span className='form-input-login-success'>
          Now Login <Link to="/">here</Link>
      </span>
    </div>
  );
};

export default FormSuccess;
