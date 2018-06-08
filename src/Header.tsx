import { Link } from '@reach/router';
import React from 'react';

export const Header = () => (
  <div className="header">
    <Link to="/">
      <h1 className="title">Hacker News</h1>
    </Link>
    <div>
      <Link to="/new" className="top-link">
        <strong>New</strong>
      </Link>{' '}
      |{' '}
      <Link to="/show" className="top-link">
        <strong>Show</strong>
      </Link>{' '}
      |{' '}
      <Link to="/ask" className="top-link">
        <strong>Ask</strong>
      </Link>{' '}
      |{' '}
      <Link to="/jobs" className="top-link">
        <strong>Jobs</strong>
      </Link>
    </div>
  </div>
);
