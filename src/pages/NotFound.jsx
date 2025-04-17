import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
