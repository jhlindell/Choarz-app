import React from 'react';
import { Link } from '@reach/router';

export default function Signin() {
  return (
    <div>
      <p>Signin</p>
      <p>
        <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
