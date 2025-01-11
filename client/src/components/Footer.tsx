const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6 text-center">
        <div className="mb-4">
          {/* Social Links */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 text-gray-500 hover:text-blue-600 transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 text-gray-500 hover:text-blue-600 transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 text-gray-500 hover:text-blue-600 transition-colors"
          >
            Instagram
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; 2025 CountryInfo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
