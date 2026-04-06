export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  quote: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Marcus D.",
    title: "Property Manager",
    company: "Westridge Commons Apartments",
    location: "Roseville, CA",
    quote:
      "We had a persistent issue with trespassing and after-hours disturbances in our parking lot. Within the first two weeks of partnering with Placer Protection Group, the problems dropped dramatically. Their officers are professional, reliable, and our residents actually feel safer knowing there's a consistent patrol presence.",
    service: "Vehicle Patrol + Unarmed Security",
  },
  {
    id: "t2",
    name: "Sandra K.",
    title: "Center Manager",
    company: "Placer Valley Shopping Center",
    location: "Roseville, CA",
    quote:
      "Our tenant mix includes several high-traffic retailers, and we needed security that could handle everything from shoplifter incidents to parking lot issues without making customers feel uncomfortable. Placer Protection Group found exactly the right balance — professional presence without being overbearing. The reporting is thorough and the response time is fast.",
    service: "Retail Security + Vehicle Patrol",
  },
  {
    id: "t3",
    name: "Tom R.",
    title: "HOA Board President",
    company: "Sierra Ridge Homeowners Association",
    location: "Rocklin, CA",
    quote:
      "Our community tried two other security companies before switching to Placer Protection Group. The difference is accountability. We receive detailed patrol logs, our board gets monthly summaries, and when we call with a concern, someone actually picks up. That consistency matters to our homeowners.",
    service: "Vehicle Patrol + HOA Security",
  },
  {
    id: "t4",
    name: "Derek F.",
    title: "Project Superintendent",
    company: "Foothills Commercial Builders",
    location: "Auburn, CA",
    quote:
      "We had three equipment thefts in four months before we brought in Placer Protection Group for overnight construction site security. In over a year since then, we have had zero incidents. The cost of their service is a fraction of what we were losing. I recommend them to every GC I work with.",
    service: "Construction Site Security",
  },
];
