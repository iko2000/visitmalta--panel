export default function NotFound() {



    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-gray-600 text-xl mt-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back to Homepage
        </a>
      </div>
    );
  };