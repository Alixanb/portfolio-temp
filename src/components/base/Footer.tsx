import Link from "next/link";
import ButtonRing from "../ui/button-ring";

export function Footer() {
  return (
    <footer
      key="1"
      className=" py-12 bg-card border border-t-border rounded-t-2xl bg-slate-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between space-y-8 sm:flex-row sm:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="space-y-1 flex flex-col gap-4 w-64">
            <ButtonRing href="mailto:contact@alixan.dev">
              Contactez moi !
            </ButtonRing>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Je suis un développeur créatif et dynamique, passioné par les
              technologies de pointes.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              Sections
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#whoami"
                >
                  Qui suis-je
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#projects"
                >
                  Mes projets
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#contact"
                >
                  Contact
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
              Mes réseaux sociaux
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="https://www.linkedin.com/in/alixan/"
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="https://github.com/Alixanb"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="https://www.behance.net/alixan_"
                >
                  Behance
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="https://gitlab.com/Alixan_"
                >
                  Gitlab
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              Repo git
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
        </div>
      </div>
      <hr className="my-12 border-border" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between mt-6">
        <div className="flex items-center space-x-4">
          Fais avec ♡ par Alixan BALU
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
