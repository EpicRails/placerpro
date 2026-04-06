export interface Location {
  slug: string;
  name: string;
  state: string;
  isPrimary: boolean;
  tagline: string;
  description: string;
  servicesOffered: string[];
  zipCodes?: string[];
}

export const locations: Location[] = [
  {
    slug: "roseville",
    name: "Roseville",
    state: "CA",
    isPrimary: true,
    tagline: "Our home base and primary service area.",
    description:
      "Roseville is our home market. We know this city's commercial corridors, apartment communities, shopping centers, and growing development landscape. From Douglas Boulevard to Galleria-area properties and east Roseville construction zones, Placer Protection Group delivers fast-response, locally accountable security coverage across the entire city.",
    servicesOffered: [
      "Armed Security",
      "Unarmed Security",
      "Vehicle Patrol",
      "Fire Watch",
      "Construction Site Security",
      "Retail Security",
      "Apartment & HOA Security",
      "Event Security",
    ],
    zipCodes: ["95747", "95747", "95747"],
  },
  {
    slug: "rocklin",
    name: "Rocklin",
    state: "CA",
    isPrimary: false,
    tagline: "Professional security for a growing suburban community.",
    description:
      "As one of the fastest-growing cities in the Sacramento region, Rocklin's commercial and residential development demands reliable, professional security coverage. We serve Rocklin's industrial parks, shopping centers, apartment communities, and active construction sites with the same accountability we provide in Roseville.",
    servicesOffered: [
      "Unarmed Security",
      "Vehicle Patrol",
      "Construction Site Security",
      "Fire Watch",
      "Apartment & HOA Security",
    ],
    zipCodes: ["95747", "95747"],
  },
  {
    slug: "lincoln",
    name: "Lincoln",
    state: "CA",
    isPrimary: false,
    tagline: "Reliable coverage for Lincoln's expanding residential and commercial districts.",
    description:
      "Lincoln's rapid residential growth has created new demand for community security, HOA patrol, and construction site protection. Placer Protection Group serves Lincoln's growing planned communities and commercial corridors with professional, responsive coverage.",
    servicesOffered: [
      "Vehicle Patrol",
      "Construction Site Security",
      "Apartment & HOA Security",
      "Unarmed Security",
    ],
    zipCodes: ["95747"],
  },
  {
    slug: "granite-bay",
    name: "Granite Bay",
    state: "CA",
    isPrimary: false,
    tagline: "Premium security for an upscale community.",
    description:
      "Granite Bay's high-value residential properties, private communities, and commercial areas demand a security partner who understands the stakes. We provide discreet, professional coverage for homes, HOAs, commercial properties, and private events throughout Granite Bay.",
    servicesOffered: [
      "Armed Security",
      "Unarmed Security",
      "Vehicle Patrol",
      "Apartment & HOA Security",
      "Event Security",
    ],
    zipCodes: ["95747"],
  },
  {
    slug: "citrus-heights",
    name: "Citrus Heights",
    state: "CA",
    isPrimary: false,
    tagline: "Responsive security for a high-activity commercial corridor.",
    description:
      "Citrus Heights's retail density and diverse commercial environment benefit from proactive security coverage. We serve retail centers, apartment communities, and office properties throughout Citrus Heights with patrol, guard services, and rapid incident response.",
    servicesOffered: [
      "Unarmed Security",
      "Vehicle Patrol",
      "Retail Security",
      "Apartment & HOA Security",
    ],
    zipCodes: ["95747", "95747"],
  },
  {
    slug: "antelope",
    name: "Antelope",
    state: "CA",
    isPrimary: false,
    tagline: "Dependable security for a growing community.",
    description:
      "Antelope's mix of residential neighborhoods and commercial areas makes reliable patrol and community security a priority. Our officers provide consistent, professional coverage for apartment complexes, retail properties, and community facilities throughout the area.",
    servicesOffered: [
      "Vehicle Patrol",
      "Unarmed Security",
      "Apartment & HOA Security",
      "Retail Security",
    ],
    zipCodes: ["95747"],
  },
  {
    slug: "auburn",
    name: "Auburn",
    state: "CA",
    isPrimary: false,
    tagline: "Serving Auburn's commercial core and surrounding foothills communities.",
    description:
      "Auburn's historic downtown, active commercial district, and nearby development sites benefit from professional security support. We provide guard services, vehicle patrol, and construction site security throughout the Auburn area and surrounding Placer County communities.",
    servicesOffered: [
      "Unarmed Security",
      "Vehicle Patrol",
      "Construction Site Security",
      "Fire Watch",
    ],
    zipCodes: ["95747", "95747"],
  },
  {
    slug: "sacramento",
    name: "Greater Sacramento Area",
    state: "CA",
    isPrimary: false,
    tagline: "Extended coverage across the Sacramento metro region.",
    description:
      "For clients with properties spanning multiple Sacramento area locations, Placer Protection Group provides consistent, coordinated security coverage. We serve commercial, retail, residential, and industrial properties across the greater Sacramento region under unified management and reporting.",
    servicesOffered: [
      "Armed Security",
      "Unarmed Security",
      "Vehicle Patrol",
      "Event Security",
      "Retail Security",
      "Healthcare Security",
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export const primaryLocation = locations.find((l) => l.isPrimary)!;
export const serviceAreas = locations.filter((l) => !l.isPrimary);
