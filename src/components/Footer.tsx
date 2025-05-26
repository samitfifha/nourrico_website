import PlayStore from '../assets/images/download.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Download Our App Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Download Our App</h3>
            <div className="flex flex-col gap-4">
              <img
                src={PlayStore}
                alt="App Store"
                className="w-40 h-auto transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors duration-300">
                sghaieryoussefmed@gmail.com
              </li>
              <li className="hover:text-white transition-colors duration-300">
                +216 90 280 190 /
                +216 53 572 801
              </li>
              <li className="hover:text-white transition-colors duration-300">
                Tunis, Tunisia
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Nourri Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}