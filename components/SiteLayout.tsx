import Link from 'next/link';

const SiteLayout = ({ children }) => {
  return (
    <div className="flex flex-col flex-grow">
      <header className="flex flex-row justify-between items-center bg-gray-500 p-4 text-white">
        <div className="ml-4">LOGO HERE</div>
        <div className="flex flex-row space-x-4">
          <Link href="/profile">
            <div className="bg-blue-500 rounded text-lg font-bold text-white p-2 pl-6 pr-6 cursor-pointer">Sign In</div>
          </Link>
          <Link href="/admin">
            <div className="bg-blue-500 rounded text-lg font-bold text-white p-2 pl-6 pr-6 cursor-pointer">Admin</div>
          </Link>
        </div>
      </header>

      <div className="flex-grow">{children}</div>

      <footer className="bg-gray-800 p-4 h-44 text-white">Footer</footer>
    </div>
  );
};

export default SiteLayout;
