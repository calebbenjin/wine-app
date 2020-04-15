import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>OOps!! is a dead end!!</h1>
        <Link to="/" className="btn btn-primary">back to home</Link>
      </div>
    </section>
  )
}

export default ErrorPage;