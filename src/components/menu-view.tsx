import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { getDictionary, menuChrome, tHeading } from "@/lib/dictionaries";
import { menus, type MenuPageData } from "@/lib/menus";
import { menuSlugs, path, type Locale, type MenuKey } from "@/lib/i18n";

/**
 * Gabarit des pages « exemple de menu ». La chrome (titres, sous-titres,
 * intitulés de sections) est localisée ; les noms de plats restent en FR.
 */
export function MenuView({
  locale,
  menuKey,
}: {
  locale: Locale;
  menuKey: MenuKey;
}) {
  const t = getDictionary(locale);
  const chrome = menuChrome[menuKey][locale];
  const data: MenuPageData = menus[menuSlugs[menuKey].fr as keyof typeof menus];
  const heroImage = `/service-${menuKey}.jpg`;

  return (
    <>
      <PageHero title={chrome.title} subtitle={chrome.subtitle} image={heroImage}>
        <ButtonLink href={path(locale, "services")} variant="outline">
          {t.menusUi.backToServices}
        </ButtonLink>
      </PageHero>

      <div className="bg-cream">
        {data.groups.map((group, gi) => (
          <section
            key={gi}
            className="border-b border-olive/10 px-5 py-16 lg:py-24"
          >
            <div className="mx-auto max-w-3xl">
              {group.name && (
                <h2 className="text-center text-4xl text-olive-dark">
                  {tHeading(locale, group.name)}
                </h2>
              )}
              <div className={group.name ? "mt-12 space-y-14" : "space-y-14"}>
                {group.courses.map((course, ci) => (
                  <div key={ci}>
                    {course.heading && (
                      <p className="text-center text-sm uppercase tracking-[0.28em] text-olive-dark">
                        {tHeading(locale, course.heading)}
                      </p>
                    )}
                    <ul className={course.heading ? "mt-7 space-y-7" : "space-y-7"}>
                      {course.items.map((item, ii) => (
                        <li key={ii} className="text-center">
                          <p className="text-2xl text-ink">{item.name}</p>
                          {item.description && (
                            <p className="mt-1 text-lg text-ink/70 italic">
                              {item.description}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="bg-olive-dark px-5 py-16 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl text-cream sm:text-4xl">
            {t.menusUi.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">{t.menusUi.ctaBody}</p>
          <div className="mt-8">
            <ButtonLink href={path(locale, "contact")} variant="cream" size="lg">
              {t.menusUi.ctaButton}
            </ButtonLink>
          </div>
        </section>
      </div>
    </>
  );
}
