import { Outlet, Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/about">About</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Navigation;
