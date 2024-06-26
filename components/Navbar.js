import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="py-4">
      <div className="container mx-auto flex justify-center space-x-4">
        <Link href="/" legacyBehavior>
          <a className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-2 border-blue-500">Home</a>
        </Link>
        <Link href="/skills" legacyBehavior>
          <a className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-2 border-blue-500">Skills</a>
        </Link>
        <Link href="/experience" legacyBehavior>
          <a className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-2 border-blue-500">Experience</a>
        </Link>
        <Link href="/education" legacyBehavior>
          <a className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-2 border-blue-500">Education</a>
        </Link>
        <Link href="/projects" legacyBehavior>
          <a className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-2 border-blue-500">Projects</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110 hover:border-b-2 border-blue-500">Contact</a>
        </Link>
      </div>
    </nav>
  );
}
