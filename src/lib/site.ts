export const site = {
  name: "Zubro Services",
  legalName: "Zubro Services LLC",
  domain: "zubroservices.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zubroservices.com",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "(425) 542-2707",
  phoneTel: process.env.NEXT_PUBLIC_PHONE_TEL ?? "+14255422707",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "homes@zubroservices.com",
  serviceArea: {
    state: "Washington",
    stateAbbr: "WA",
    cities: [
      "Seattle",
      "Tacoma",
      "Spokane",
      "Bellevue",
      "Vancouver",
      "Everett",
      "Kent",
      "Renton",
      "Federal Way",
      "Yakima",
    ],
  },
  social: {
    google: "",
    facebook: "",
  },
} as const;

export type Site = typeof site;
