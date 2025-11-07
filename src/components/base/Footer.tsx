import Link from "next/link";
import ButtonRing from "../ui/button-ring";

export function Footer() {
  return (
    <footer
      key="1"
      className=" py-12 bg-card border border-t-border rounded-t-2xl"
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
              <li className="hover:underline">
                <Link
                  title="Section qui suis-je ?"
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#whoami"
                >
                  Qui suis-je
                </Link>
              </li>
              <li className="hover:underline">
                <Link
                  title="Section sur mes projets"
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#projects"
                >
                  Mes projets
                </Link>
              </li>
              <li className="hover:underline">
                <Link
                  title="Section contact"
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="#contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              Réseaux sociaux
            </h4>
            <ul className="space-y-2">
              <li className="hover:underline">
                <Link
                  title="Visitez mon LinkedIn"
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="https://www.linkedin.com/in/alixan/"
                >
                  Linkedin
                </Link>
              </li>
              <li className="hover:underline">
                <Link
                  title="Visitez mon Github"
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="https://github.com/Alixanb"
                >
                  Github
                </Link>
              </li>
              <li className="hover:underline">
                <Link
                  title="Visitez mon Behance"
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="https://www.behance.net/alixan_"
                >
                  Behance
                </Link>
              </li>
              <li className="hover:underline">
                <Link
                  title="Visitez mon GitLab"
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
            <ul className="space-y-2 list-disc ml-4">
              <li className="hover:underline">
                <Link
                  title="Mon projet de portfolio"
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="https://github.com/Alixanb/portfolio-temp"
                >
                  portfolio-temp
                </Link>
              </li>
              <li className="hover:underline">
                <Link
                  title="Mon projet pour l'agglomération de Haguenau"
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="https://github.com/Alixanb/agglo-haguenau"
                >
                  agglo-haguenau
                </Link>
              </li>
              <li className="hover:underline">
                <Link
                  title="Mon projet pour approfondir mes connaissances en Next.JS"
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="https://github.com/Alixanb/Get-Testmonials"
                >
                  get-testimonials
                </Link>
              </li>
              <li className="hover:underline">
                <Link
                  title="Mon premier projet Next.JS"
                  className="hover:text-gray-900 dark:hover:text-gray-50"
                  href="https://github.com/Alixanb/trombino-scope"
                >
                  trombino-scope
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-12 border-border" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end">
          <Link
            title="License du site WEB"
            href="https://github.com/Alixanb/portfolio-temp/blob/master/LICENSE"
            className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
          >
            © 2024 Alixan BALU. MIT License.
          </Link>
        </div>
        <div className="mt-4 flex items-center justify-center gap-3 text-xs text-gray-500 dark:text-gray-600">
          <span className="inline-flex items-center gap-1" title="Score de performance Lighthouse">
            <span className="text-white font-medium">Perf</span> 97
          </span>
          <span className="text-gray-400">•</span>
          <span className="inline-flex items-center gap-1" title="Score d'accessibilité Lighthouse">
            <span className="text-white font-medium">A11y</span> 95
          </span>
          <span className="text-gray-400">•</span>
          <span className="inline-flex items-center gap-1" title="Score SEO Lighthouse">
            <span className="text-white font-medium">SEO</span> 100
          </span>
          <span className="text-gray-400">•</span>
          <span className="inline-flex items-center gap-1" title="Score des bonnes pratiques Lighthouse">
            <span className="text-white font-medium">BP</span> 96
          </span>
        </div>
      </div>
    </footer>
  );
}
