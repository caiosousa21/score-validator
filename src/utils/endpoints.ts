const ENDPOINTS: Record<string, { url: string }> = {
  list: {
    url: "/credit-score/list",
  },
  personScore: {
    url: "/credit-score/individual",
  },
  companyScore: {
    url: "/credit-score/company",
  },
};

export default ENDPOINTS;
