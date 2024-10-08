// ScrollButton.js
import { Link } from 'react-scroll';

const ScrollButton = () => {
  return (
    <div className="fixed right-4 bottom-4 space-y-4">
      <Link to="heroPage" smooth={true} duration={500}>
        <button className="bg-blue-500 text-white p-2 rounded shadow-md hover:bg-blue-600">
          Go to Hero
        </button>
      </Link>
      <Link to="modelPage" smooth={true} duration={500}>
        <button className="bg-blue-500 text-white p-2 rounded shadow-md hover:bg-blue-600">
          Go to Model
        </button>
      </Link>
      <Link to="appsPage" smooth={true} duration={500}>
        <button className="bg-blue-500 text-white p-2 rounded shadow-md hover:bg-blue-600">
          Go to My Apps
        </button>
      </Link>
    </div>
  );
};

export default ScrollButton;
