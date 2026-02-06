import { getAllProducts } from "./products";

export interface SeoPageConfig {
  slug: string;
  title: string;
  h1: string;
  description: string;
  metaDescription: string;
  filterFn: (product: ReturnType<typeof getAllProducts>[0]) => boolean;
  content: {
    intro: string;
    benefits: string[];
    useCases: string[];
    tip: string;
  };
}

// Color-based SEO pages
export const colorPages: SeoPageConfig[] = [
  {
    slug: "cerne-regaly",
    title: "Černé regály | Skladem | Bazarovyregal.cz",
    h1: "Černé kovové regály",
    description: "Elegantní černé regály do garáže, dílny a moderního interiéru.",
    metaDescription:
      "Černé kovové regály skladem ✓ Slevy až 75% ✓ Doprava zdarma nad 2000 Kč ✓ Záruka 7 let. Ideální do garáže, dílny i moderního interiéru.",
    filterFn: (p) => p.color === "Černá",
    content: {
      intro:
        "Černé kovové regály jsou ideální volbou pro moderní garáže, dílny a industriální interiéry. Elegantní černý lak dodává prostoru profesionální vzhled a snadno se udržuje.",
      benefits: [
        "Moderní industriální design",
        "Snadná údržba - neviditelné drobné nečistoty",
        "Odolný práškový lak",
        "Perfektní do garáží a dílen",
      ],
      useCases: ["Garáž", "Dílna", "Moderní sklep", "Industriální interiér"],
      tip: "Černé regály skvěle ladí s kovovým nábytkem a betonovými podlahami. Pro lepší viditelnost obsahu doporučujeme dobré osvětlení.",
    },
  },
  {
    slug: "bile-regaly",
    title: "Bílé regály | Skladem | Bazarovyregal.cz",
    h1: "Bílé kovové regály",
    description: "Čisté bílé regály do kanceláře, spíže a světlých interiérů.",
    metaDescription:
      "Bílé kovové regály skladem ✓ Slevy až 75% ✓ Doprava zdarma nad 2000 Kč ✓ Záruka 7 let. Elegantní řešení pro kanceláře a světlé interiéry.",
    filterFn: (p) => p.color === "Bílá",
    content: {
      intro:
        "Bílé kovové regály přinášejí do prostoru světlo a vzdušnost. Jsou ideální volbou pro kanceláře, ordinace, spíže a všude tam, kde chcete čistý, profesionální vzhled.",
      benefits: [
        "Opticky zvětšují prostor",
        "Profesionální čistý vzhled",
        "Ideální do světlých interiérů",
        "Univerzální kombinovatelnost",
      ],
      useCases: ["Kancelář", "Ordinace", "Spíž", "Dětský pokoj"],
      tip: "Bílé regály doporučujeme do suchých prostor. Ve vlhkém prostředí zvažte pozinkované provedení.",
    },
  },
  {
    slug: "cervene-regaly",
    title: "Červené regály | Skladem | Bazarovyregal.cz",
    h1: "Červené kovové regály",
    description: "Výrazné červené regály - dominanta každé garáže a dílny.",
    metaDescription:
      "Červené kovové regály skladem ✓ Slevy až 75% ✓ Doprava zdarma nad 2000 Kč ✓ Záruka 7 let. Výrazný design pro garáže a dílny.",
    filterFn: (p) => p.color === "Červená",
    content: {
      intro:
        "Červené kovové regály jsou volbou pro ty, kteří chtějí vyniknout. Výrazná červená barva dodá vaší garáži nebo dílně profesionální závodní vzhled.",
      benefits: [
        "Výrazný sportovní design",
        "Snadná orientace v prostoru",
        "Odolný práškový lak",
        "Unikátní vzhled",
      ],
      useCases: ["Garáž", "Dílna", "Hobby místnost", "Sportovní vybavení"],
      tip: "Červené regály jsou oblíbené mezi automobilovými nadšenci. Skvěle ladí s nářadím a autodíly.",
    },
  },
  {
    slug: "modre-regaly",
    title: "Modré regály | Skladem | Bazarovyregal.cz",
    h1: "Modré kovové regály",
    description: "Praktické modré regály do skladu, dílny a průmyslového prostředí.",
    metaDescription:
      "Modré kovové regály skladem ✓ Slevy až 75% ✓ Doprava zdarma nad 2000 Kč ✓ Záruka 7 let. Profesionální řešení pro sklady a dílny.",
    filterFn: (p) => p.color === "Modrá",
    content: {
      intro:
        "Modré kovové regály jsou klasikou v profesionálních skladech a dílnách. Modrá barva je praktická, profesionální a snadno se udržuje.",
      benefits: [
        "Profesionální skladový vzhled",
        "Praktická a neutrální barva",
        "Odolný práškový lak",
        "Osvědčená klasika",
      ],
      useCases: ["Sklad", "Dílna", "Průmyslový provoz", "Servis"],
      tip: "Modré regály jsou standardem v průmyslu. Pokud potřebujete více regálů, snadno je sladíte.",
    },
  },
  {
    slug: "pozinkovane-regaly",
    title: "Pozinkované regály | Odolné | Bazarovyregal.cz",
    h1: "Pozinkované kovové regály",
    description: "Maximálně odolné pozinkované regály do vlhkého prostředí.",
    metaDescription:
      "Pozinkované regály skladem ✓ Slevy až 75% ✓ Doprava zdarma nad 2000 Kč ✓ Záruka 7 let. Maximální odolnost proti korozi pro sklepy a garáže.",
    filterFn: (p) => p.surface === "Pozinkovaný",
    content: {
      intro:
        "Pozinkované regály jsou nejodolnější volbou pro náročné podmínky. Vrstva zinku chrání ocel před korozí i ve vlhkých sklepech, nevytápěných garážích nebo venkovních přístřešcích.",
      benefits: [
        "Maximální odolnost proti korozi",
        "Vhodné do vlhkého prostředí",
        "Dlouhá životnost i bez údržby",
        "Ideální pro venkovní přístřešky",
      ],
      useCases: ["Vlhký sklep", "Nevytápěná garáž", "Venkovní přístřešek", "Průmyslový sklad"],
      tip: "Pozinkované regály jsou investicí na dlouhé roky. I když jsou dražší, v náročných podmínkách se vyplatí.",
    },
  },
];

// Height-based SEO pages
export const heightPages: SeoPageConfig[] = [
  {
    slug: "regaly-150-cm",
    title: "Regály 150 cm | Nízké regály | Bazarovyregal.cz",
    h1: "Kovové regály 150 cm",
    description: "Nízké regály 150 cm - ideální pod okno nebo do nízkých prostor.",
    metaDescription:
      "Kovové regály 150 cm skladem ✓ Slevy až 75% ✓ Doprava zdarma nad 2000 Kč. Kompaktní regály ideální pod okno, do garáže i sklepa.",
    filterFn: (p) => p.height === 150,
    content: {
      intro:
        "Regály s výškou 150 cm jsou ideální volbou pro nižší prostory, umístění pod okno nebo tam, kde potřebujete snadný přístup ke všem policím bez použití žebříku.",
      benefits: [
        "Snadný přístup ke všem policím",
        "Ideální pod okno",
        "Stabilní bez kotvení",
        "Vhodné i pro nižší postavy",
      ],
      useCases: ["Pod okno", "Šatna", "Dětský pokoj", "Nízký sklep"],
      tip: "Regály 150 cm jsou skvělé pro denně používané věci. Vše máte na dosah ruky.",
    },
  },
  {
    slug: "regaly-180-cm",
    title: "Regály 180 cm | Střední regály | Bazarovyregal.cz",
    h1: "Kovové regály 180 cm",
    description: "Univerzální regály 180 cm - nejoblíbenější výška pro domácnost.",
    metaDescription:
      "Kovové regály 180 cm skladem ✓ Slevy až 75% ✓ Doprava zdarma nad 2000 Kč. Nejprodávanější výška pro sklepy, garáže i spíže.",
    filterFn: (p) => p.height === 180,
    content: {
      intro:
        "Regály 180 cm jsou nejoblíbenější volbou pro domácí použití. Nabízejí optimální poměr kapacity a přístupnosti - horní police je stále v dosahu pro většinu dospělých.",
      benefits: [
        "Nejprodávanější výška",
        "Optimální kapacita",
        "Horní police v dosahu",
        "Univerzální použití",
      ],
      useCases: ["Sklep", "Garáž", "Spíž", "Sklad"],
      tip: "180 cm je zlatý standard. Pokud váháte mezi výškami, je to nejbezpečnější volba.",
    },
  },
  {
    slug: "regaly-200-cm",
    title: "Regály 200 cm | Vysoké regály | Bazarovyregal.cz",
    h1: "Kovové regály 200 cm",
    description: "Vysoké regály 200 cm - maximální kapacita pro větší prostory.",
    metaDescription:
      "Kovové regály 200 cm skladem ✓ Slevy až 75% ✓ Doprava zdarma nad 2000 Kč. Vysoká kapacita pro sklady, garáže a prostorné sklepy.",
    filterFn: (p) => p.height === 200,
    content: {
      intro:
        "Regály 200 cm nabízejí vysokou skladovací kapacitu pro prostorné místnosti. Ideální pro sklady, garáže s vysokým stropem a všude, kde potřebujete maximálně využít vertikální prostor.",
      benefits: [
        "Vysoká skladovací kapacita",
        "Efektivní využití prostoru",
        "Více polic = více místa",
        "Profesionální vzhled",
      ],
      useCases: ["Sklad", "Vysoká garáž", "Prostorný sklep", "Archiv"],
      tip: "U regálů 200 cm doporučujeme kotvení ke stěně pro maximální stabilitu.",
    },
  },
  {
    slug: "regaly-220-cm",
    title: "Regály 220 cm | Extra vysoké | Bazarovyregal.cz",
    h1: "Kovové regály 220 cm",
    description: "Extra vysoké regály 220 cm - maximální využití prostoru.",
    metaDescription:
      "Kovové regály 220 cm skladem ✓ Slevy až 75% ✓ Doprava zdarma nad 2000 Kč. Extra vysoké regály pro maximální skladovací kapacitu.",
    filterFn: (p) => p.height === 220,
    content: {
      intro:
        "Regály 220 cm jsou nejvyšší v naší nabídce. Určené pro prostory s vysokými stropy, kde chcete maximálně využít každý centimetr. Ideální pro profesionální sklady a archivy.",
      benefits: [
        "Maximální skladovací kapacita",
        "Pro vysoké stropy",
        "Profesionální skladové řešení",
        "5 polic standardně",
      ],
      useCases: ["Profesionální sklad", "Archiv", "Průmyslový provoz", "Velká garáž"],
      tip: "U 220 cm regálů je kotvení ke stěně nutností. Pro horní police použijte štafle.",
    },
  },
];

// Use-case based SEO pages
export const useCasePages: SeoPageConfig[] = [
  {
    slug: "regaly-do-sklepa",
    title: "Regály do sklepa | Odolné | Bazarovyregal.cz",
    h1: "Regály do sklepa",
    description: "Odolné regály do sklepa na zavařeniny, víno a sezónní věci.",
    metaDescription:
      "Regály do sklepa skladem ✓ Pozinkované i lakované ✓ Slevy až 75% ✓ Doprava zdarma. Ideální pro zavařeniny, víno a sezónní uskladnění.",
    filterFn: (p) => p.height >= 150,
    content: {
      intro:
        "Regály do sklepa musí odolat vlhkosti a teplotním výkyvům. Nabízíme pozinkované i lakované varianty pro různé typy sklepů - od suchých po vlhké.",
      benefits: [
        "Odolnost proti vlhkosti (pozinkované)",
        "Vysoká nosnost pro zavařeniny",
        "Nastavitelné police",
        "Snadná montáž i ve stísněných prostorech",
      ],
      useCases: ["Zavařeniny", "Víno", "Sezónní věci", "Potraviny"],
      tip: "Pro vlhké sklepy volte pozinkované provedení. Pro suché sklepy stačí lakované a ušetříte.",
    },
  },
  {
    slug: "regaly-do-garaze",
    title: "Regály do garáže | Robustní | Bazarovyregal.cz",
    h1: "Regály do garáže",
    description: "Robustní regály do garáže na nářadí, pneumatiky a autodíly.",
    metaDescription:
      "Regály do garáže skladem ✓ Vysoká nosnost ✓ Slevy až 75% ✓ Doprava zdarma. Perfektní pro nářadí, pneumatiky a autodíly.",
    filterFn: (p) => p.capacity >= 700,
    content: {
      intro:
        "Garáž potřebuje robustní regály s vysokou nosností. Naše regály unesou těžké nářadí, sady pneumatik i autodíly. Vybírejte z lakovaných nebo pozinkovaných provedení.",
      benefits: [
        "Vysoká nosnost až 875 kg",
        "Odolné proti oleji a nečistotám",
        "Ideální rozměry pro pneumatiky",
        "Stabilní i při plném zatížení",
      ],
      useCases: ["Nářadí", "Pneumatiky", "Autodíly", "Oleje a kapaliny"],
      tip: "Pro pneumatiky volte hloubku min. 40 cm. Jedna polovina regálu pojme sadu 4 pneumatik.",
    },
  },
  {
    slug: "tezke-regaly",
    title: "Těžké regály | Vysoká nosnost | Bazarovyregal.cz",
    h1: "Těžké kovové regály",
    description: "Těžké regály s nosností až 875 kg pro náročné skladování.",
    metaDescription:
      "Těžké regály s nosností až 875 kg ✓ Slevy až 75% ✓ Doprava zdarma. Profesionální řešení pro sklady a průmysl.",
    filterFn: (p) => p.capacity >= 800,
    content: {
      intro:
        "Těžké regály jsou určeny pro profesionální skladování s vysokými nároky na nosnost. Celková kapacita až 875 kg a nosnost police až 175 kg zvládne i nejtěžší zátěž.",
      benefits: [
        "Celková nosnost až 875 kg",
        "Nosnost police až 175 kg",
        "Robustní ocelová konstrukce",
        "Profesionální kvalita",
      ],
      useCases: ["Průmyslový sklad", "Dílna", "Velkoobchod", "Výrobní provoz"],
      tip: "Těžké regály vždy kotvěte ke stěně. Těžké předměty ukládejte na spodní police.",
    },
  },
  {
    slug: "kancelarske-regaly",
    title: "Kancelářské regály | Elegantní | Bazarovyregal.cz",
    h1: "Kancelářské regály",
    description: "Elegantní regály do kanceláře pro dokumenty a archiv.",
    metaDescription:
      "Kancelářské regály skladem ✓ Bílé a černé provedení ✓ Slevy až 75% ✓ Doprava zdarma. Ideální pro dokumenty, šanony a kancelářské potřeby.",
    filterFn: (p) => p.color === "Bílá" || p.color === "Černá",
    content: {
      intro:
        "Kancelářské regály v bílém nebo černém provedení dodají vašemu pracovišti profesionální vzhled. Ideální pro archivaci dokumentů, šanonů a kancelářských potřeb.",
      benefits: [
        "Elegantní bílé nebo černé provedení",
        "Ideální výška pro šanony",
        "Čistý profesionální vzhled",
        "Snadná údržba",
      ],
      useCases: ["Kancelář", "Archiv", "Home office", "Ordinace"],
      tip: "Pro šanony A4 volte hloubku min. 30 cm. Bílé regály opticky zvětší prostor.",
    },
  },
];

// Get all SEO page configs
export function getAllSeoPages(): SeoPageConfig[] {
  return [...colorPages, ...heightPages, ...useCasePages];
}

// Get SEO page by slug
export function getSeoPageBySlug(slug: string): SeoPageConfig | undefined {
  return getAllSeoPages().find((page) => page.slug === slug);
}
