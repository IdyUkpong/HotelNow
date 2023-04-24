interface Props {
  about?: string;
  signup?: string;
  login?: string;
  home?: string;
  ourHotels?: string;
  logout?: string;
  showAbout?: boolean;
  showSignup?: boolean;
  showLogin?: boolean;
  showHome?: boolean;
  showOurHotels?: boolean;
  showLogout?: boolean;
}

function HeaderHotel({
  about,
  signup,
  logout,
  login,
  home,
  ourHotels,
  showAbout = true,
  showSignup = true,
  showLogin = true,
  showHome = true,
  showOurHotels = true,
  showLogout = true,
}: Props) {
  return (
    <nav
      className="border-gray-200 mb-4 dark:border-gray-700"
      style={{ backgroundColor: "#495057" }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            HotelNow
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {showHome && (
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0  md:dark:bg-transparent"
                  aria-current="page"
                >
                  {home}
                </a>
              </li>
            )}
            {showAbout && (
              <li>
                <a
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {about}
                </a>
              </li>
            )}
            {showOurHotels && (
              <li>
                <a
                  href="/ourhotels"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {ourHotels}
                </a>
              </li>
            )}
            {showSignup && (
              <li>
                <a
                  href="/signup"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {signup}
                </a>
              </li>
            )}
            {showLogin && (
              <li>
                <a
                  href="/login"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {login}
                </a>
              </li>
            )}
            {showLogout && (
              <li>
                <a
                  href="/login"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {logout}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderHotel;
