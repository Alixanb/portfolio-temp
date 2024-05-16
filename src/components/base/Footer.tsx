import Link from "next/link";

export function Footer() {
  return (
    <footer
      key="1"
      className=" py-12 bg-card border border-t-border rounded-t-2xl bg-slate-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between space-y-8 sm:flex-row sm:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="space-y-1 flex flex-col w-64">
            <h3 className="font-semibold pr-4 text-3xl">MŌDE</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We provide artists and performers for private, corporate and major
              events.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Our values
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  DJ
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Fusion
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Acoustic
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Band
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Roving
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Dance
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              Contact us
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Contact Form
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Join our Team
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Journal
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Previous work
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-12 border-border" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between mt-6">
        <div className="flex items-center space-x-4">
          <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="rgb(107 114 128)"
            >
              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
            </svg>
          </Link>
          <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="rgb(107 114 128)"
            >
              <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
            </svg>
          </Link>
          <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
              fill="rgb(107 114 128)"
            >
              <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
            </svg>
          </Link>
          <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="rgb(107 114 128)"
            >
              <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"></path>
            </svg>
          </Link>
        </div>
        <Link
          href=""
          className="text-sm text-gray-600 dark:text-gray-400 mt-4 sm:mt-0"
        >
          © 2024 Alixan BALU. MIT Liscence.
        </Link>
      </div>
    </footer>
  );
}
