import { useParams, Link } from 'react-router-dom';

function About() {
  const { id } = useParams();
  return (
    <h1>
      This is an About page
      {' '}
      {id}
      <Link to="/">Go to Homepage</Link>
    </h1>
  );
}

export default About;
