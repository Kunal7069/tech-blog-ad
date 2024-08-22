export default function Navbar() {
    return (
      <div>
        <nav
          className="
            bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500
            fixed w-full z-20 top-0 left-0
            border-b border-gray-300 shadow-lg
          "
        >
          <div
            className="
              flex flex-wrap items-center justify-between
              mx-auto p-4
            "
          >
            <a href="/" className="flex items-center">
              <span className="self-center text-2xl font-bold text-white">
                TECH BLOGGER
              </span>
            </a>
  
            <div
              className="
                items-center justify-between hidden w-full md:flex
                md:w-auto md:order-1
              "
              id="navbar-sticky"
            >
              <ul
                className="
                  flex flex-col p-4 md:p-0 mt-4 font-medium
                  border border-gray-100 rounded-lg bg-gray-50
                  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent
                "
              >
               
                <li>
                  <a
                    href="/"
                    className="
                      block py-2 pl-3 pr-4 text-white
                      rounded hover:bg-blue-800 md:hover:bg-transparent
                      md:hover:text-yellow-400 md:p-0
                    "
                  >
                    Posts
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    className="
                      block py-2 pl-3 pr-4 text-white
                      rounded hover:bg-blue-800 md:hover:bg-transparent
                      md:hover:text-yellow-400 md:p-0
                    "
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  