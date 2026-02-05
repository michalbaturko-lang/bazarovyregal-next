const AFFILIATE_BASE_URL = "https://www.vyprodej-regalu.cz/p";
const UTM_SOURCE = "bazarovyregal";
const UTM_MEDIUM = "affiliate";

export function getAffiliateUrl(
  seoUrl: string,
  quantity: number = 1,
  campaign: string = "detail"
): string {
  const params = new URLSearchParams({
    addtocart: "1",
    quantity: String(quantity),
    return: "cart",
    utm_source: UTM_SOURCE,
    utm_medium: UTM_MEDIUM,
    utm_campaign: campaign,
  });

  return `${AFFILIATE_BASE_URL}/${seoUrl}?${params.toString()}`;
}

export function getAffiliateCampaign(pageType: string): string {
  const campaigns: Record<string, string> = {
    homepage: "homepage",
    catalog: "katalog",
    detail: "detail",
    seo: "seo-stranka",
    quiz: "quiz",
    comparison: "srovnavac",
    chatbot: "chatbot",
    blog: "blog",
  };
  return campaigns[pageType] || "other";
}
