const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 p-24">
      <div className="flex flex-col space-y-2 items-center md:flex-row md:justify-between md:space-y-0">
        <p className="text-gray-200">© 2025 SpaceX-Test</p>

        <p className="text-gray-200">
          WebApp by
          <strong>
            <a
              href="https://www.instagram.com/barbozadiego_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white ml-1 hover:text-blue-500"
            >
              barbozadiego
            </a>
          </strong>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
