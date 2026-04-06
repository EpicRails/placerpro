export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  overview: string;
  icon: string;
  category: "personnel" | "patrol" | "specialty";
  benefits: string[];
  features: ServiceFeature[];
  industries: string[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "armed-security",
    title: "Armed Security Officers",
    shortTitle: "Armed Security",
    tagline: "Elevated protection for high-risk environments.",
    summary:
      "Licensed, trained armed officers providing a commanding visible presence at high-value or high-risk properties across Roseville and the Sacramento region.",
    overview:
      "When the stakes are high, a professional armed security presence delivers both deterrence and peace of mind. Placer Protection Group deploys licensed armed officers who are rigorously trained in de-escalation, emergency response, access control, and incident documentation. Our officers maintain a composed, professional demeanor — they are not a show of force, but a commitment to safety backed by real capability.",
    icon: "Shield",
    category: "personnel",
    benefits: [
      "Strong visible deterrence against theft, vandalism, and trespassing",
      "Licensed and background-checked officers meeting all California requirements",
      "Comprehensive training in de-escalation and use-of-force policy",
      "Rapid incident response with thorough documentation",
      "Effective for high-value assets, sensitive environments, and overnight coverage",
      "Coordination with local law enforcement when required",
    ],
    features: [
      {
        title: "Professional Licensing & Compliance",
        description:
          "Every armed officer holds a valid California BSIS Guard Card and Firearm Permit. We maintain full compliance with state licensing requirements and conduct ongoing background screening.",
      },
      {
        title: "De-Escalation First",
        description:
          "Our officers are trained to resolve situations with communication and presence before any escalation. Armed capability is a last resort — visible professionalism is our primary tool.",
      },
      {
        title: "Detailed Incident Reporting",
        description:
          "Every shift includes written activity logs and incident reports. Clients receive documentation that supports insurance claims, legal proceedings, and accountability reviews.",
      },
      {
        title: "Flexible Deployment",
        description:
          "We tailor post orders to your property's specific needs — fixed posts, roving patrol, access control, or executive protection support. No rigid packages.",
      },
      {
        title: "Emergency Response Coordination",
        description:
          "Our officers are trained to serve as the first point of contact in an emergency, managing the scene, communicating with 911, and maintaining order until responders arrive.",
      },
    ],
    industries: [
      "Financial institutions and banks",
      "Jewelry, cannabis, and high-value retail",
      "Logistics and distribution facilities",
      "Data centers and critical infrastructure",
      "Healthcare and pharmaceutical facilities",
      "Construction sites with valuable equipment",
      "Corporate campuses and executive locations",
    ],
    faqs: [
      {
        question: "What licensing do your armed officers carry?",
        answer:
          "All armed officers hold a current California BSIS Security Guard Registration and a BSIS Firearm Permit. Officers must complete mandatory training hours before deployment and undergo regular renewal to remain active.",
      },
      {
        question: "How do you handle incidents that require law enforcement?",
        answer:
          "Our officers are trained to immediately notify local law enforcement for any criminal activity. They secure the scene, document witness accounts, and cooperate fully with responding agencies while protecting your staff and property.",
      },
      {
        question: "Can you provide armed coverage on short notice?",
        answer:
          "We maintain a staffed dispatch operation and can often accommodate urgent requests within 24–48 hours. For critical needs, contact us directly at our main line to discuss priority scheduling.",
      },
      {
        question: "Is armed security appropriate for my property type?",
        answer:
          "Armed officers are best suited for high-value assets, elevated threat environments, or locations with a documented history of serious incidents. We will conduct a site assessment and honestly advise on whether armed or unarmed coverage best fits your risk profile.",
      },
    ],
    relatedSlugs: ["unarmed-security", "vehicle-patrol", "construction-site-security"],
    metaDescription:
      "Licensed armed security officers in Roseville, CA. Placer Protection Group provides trained, professional armed guards for high-risk properties across the Sacramento region.",
  },
  {
    slug: "unarmed-security",
    title: "Unarmed Security Officers",
    shortTitle: "Unarmed Security",
    tagline: "Professional presence. Reliable oversight. Everyday protection.",
    summary:
      "Customer-facing, highly professional unarmed officers providing access control, lobby management, patrol, and incident reporting for offices, retail, apartments, and more.",
    overview:
      "Unarmed security officers are the backbone of day-to-day property protection. Placer Protection Group provides trained, uniformed officers who deliver consistent access control, visitor management, and site surveillance across a wide range of property types. Our officers project calm authority, interact professionally with tenants and visitors, and maintain detailed activity logs throughout every shift.",
    icon: "UserCheck",
    category: "personnel",
    benefits: [
      "Visible uniformed presence that deters opportunistic crime",
      "Professional access control and visitor management",
      "Customer-facing officers trained in hospitality and conflict resolution",
      "Thorough shift logs and incident documentation",
      "Scalable — single guard to multi-officer teams",
      "Cost-effective alternative to armed coverage for lower-risk environments",
    ],
    features: [
      {
        title: "Access Control & Lobby Management",
        description:
          "Officers control entry points, verify credentials, log visitors, and prevent unauthorized access. Ideal for apartment lobbies, office buildings, and gated communities.",
      },
      {
        title: "Roving Interior & Exterior Patrol",
        description:
          "Scheduled walking patrols throughout the property identify vulnerabilities, deter loitering, and provide rapid response to calls or observed issues.",
      },
      {
        title: "Observation & Reporting",
        description:
          "Officers document all notable activity through standardized shift reports. These logs provide property managers with full visibility into daily security conditions.",
      },
      {
        title: "Conflict De-Escalation",
        description:
          "Officers are trained to handle disputes calmly and assertively — managing trespassers, disturbances, and after-hours issues without escalating the situation unnecessarily.",
      },
      {
        title: "Post Orders Tailored to Your Property",
        description:
          "Every assignment begins with a custom set of post orders that reflect your property's priorities, policies, and escalation procedures. We adapt as your needs evolve.",
      },
    ],
    industries: [
      "Apartment communities and residential complexes",
      "Office parks and corporate campuses",
      "Retail shopping centers and strip malls",
      "Schools, churches, and community organizations",
      "Healthcare clinics and medical offices",
      "HOAs and gated communities",
      "Public-facing government facilities",
    ],
    faqs: [
      {
        question: "What training do unarmed officers receive?",
        answer:
          "All unarmed officers hold a valid California BSIS Security Guard Registration and complete a minimum of 40 hours of training covering observation, reporting, access control, emergency procedures, and professional conduct.",
      },
      {
        question: "Can officers handle tenant complaints or trespassers?",
        answer:
          "Yes. Officers are trained to manage common property issues — including warning and documenting trespassers, de-escalating resident disputes, and coordinating law enforcement notification when appropriate.",
      },
      {
        question: "What does a typical shift report include?",
        answer:
          "Shift reports include patrol times, access log entries, notable observations, any incidents or disturbances, contacts made, and a summary of property conditions. Reports are delivered to your designated manager.",
      },
      {
        question: "Can I upgrade to armed coverage if my needs change?",
        answer:
          "Absolutely. We can transition a post from unarmed to armed coverage as your security requirements evolve. We will work with you to assess the appropriate level at any time.",
      },
    ],
    relatedSlugs: ["armed-security", "vehicle-patrol", "apartment-hoa-security"],
    metaDescription:
      "Professional unarmed security officers in Roseville, CA. Placer Protection Group provides access control, lobby security, patrol, and incident reporting for properties across the Sacramento area.",
  },
  {
    slug: "vehicle-patrol",
    title: "Vehicle Patrol Services",
    shortTitle: "Vehicle Patrol",
    tagline: "Visible, mobile protection across your entire property.",
    summary:
      "Marked patrol units providing scheduled and random drive-through security for parking lots, apartment communities, shopping centers, HOAs, and large commercial properties.",
    overview:
      "Vehicle patrol is one of the most cost-effective deterrents available for large or multi-building properties. Placer Protection Group operates clearly marked patrol vehicles that conduct scheduled and randomized drive-throughs across your property. Officers document conditions, identify hazards or suspicious activity, respond to reports, and file detailed patrol logs after every run. Our presence sends a clear signal: this property is monitored.",
    icon: "Car",
    category: "patrol",
    benefits: [
      "Marked vehicles provide strong visual deterrence across large areas",
      "Scheduled and randomized patrol routes prevent predictability",
      "More cost-effective than stationary guards for large properties",
      "Rapid on-site response to reports or observed incidents",
      "Detailed patrol reports after every run",
      "Covers parking lots, perimeters, outbuildings, and access roads",
    ],
    features: [
      {
        title: "Marked Patrol Units",
        description:
          "Our clearly identified patrol vehicles are a visible signal to would-be trespassers, vandals, and thieves. Visibility is deterrence — and our units make an unmistakable impression.",
      },
      {
        title: "Scheduled & Random Route Patterns",
        description:
          "Patrol schedules are designed to avoid predictability. We vary timing and routes to eliminate gaps that bad actors can exploit, while ensuring consistent coverage of priority areas.",
      },
      {
        title: "Patrol Log Documentation",
        description:
          "After every patrol run, officers submit a detailed report noting property conditions, any observations of concern, contacts made, and time-stamped route documentation.",
      },
      {
        title: "Incident Response",
        description:
          "If a patrol officer observes a trespasser, break-in, fire hazard, or other emergency, they respond immediately — contacting law enforcement or emergency services as needed and securing the scene.",
      },
      {
        title: "Parking Lot Enforcement Support",
        description:
          "Officers can enforce parking policies, document unauthorized vehicles, and maintain order in parking areas — supporting property managers and reducing liability.",
      },
    ],
    industries: [
      "Apartment communities and multi-family housing",
      "Shopping centers and strip malls",
      "HOAs and planned unit developments",
      "Industrial parks and warehouse districts",
      "Large commercial office campuses",
      "Construction sites during off-hours",
      "Schools and institutional campuses",
    ],
    faqs: [
      {
        question: "How often will patrol officers visit my property?",
        answer:
          "Patrol frequency is customized to your needs and budget. We typically recommend a minimum of 3–5 drive-throughs per night for after-hours coverage, with additional daytime runs available.",
      },
      {
        question: "What happens if an officer finds something suspicious?",
        answer:
          "Officers are trained to assess the situation, document it thoroughly, and contact law enforcement if the situation warrants it. Clients are notified by phone or report, depending on severity.",
      },
      {
        question: "Can patrol be combined with a stationary guard post?",
        answer:
          "Yes. Many of our clients use vehicle patrol as a supplement to a fixed guard post. The combination provides strong deterrence at the entrance point and broader coverage of the surrounding property.",
      },
      {
        question: "Are the patrol vehicles clearly marked as security?",
        answer:
          "Yes. All patrol vehicles are clearly marked as security units. Visible identification is a core element of deterrence and is standard for all Placer Protection Group patrols.",
      },
    ],
    relatedSlugs: ["unarmed-security", "construction-site-security", "apartment-hoa-security"],
    metaDescription:
      "Vehicle patrol security services in Roseville, CA. Placer Protection Group provides marked patrol units for apartments, shopping centers, HOAs, and large commercial properties across the Sacramento region.",
  },
  {
    slug: "fire-watch",
    title: "Fire Watch Services",
    shortTitle: "Fire Watch",
    tagline: "Code-compliant fire watch when your system can't cover it.",
    summary:
      "Trained fire watch officers providing continuous monitoring when sprinkler or alarm systems are offline, during hot work operations, or as required by local fire code.",
    overview:
      "When a fire suppression or alarm system is temporarily offline — due to maintenance, malfunction, or hot work operations — California fire code typically requires a continuous fire watch to be posted. Placer Protection Group provides trained, responsive fire watch officers who conduct documented patrols, monitor for smoke and fire hazards, and coordinate emergency response if needed. We deploy quickly and maintain compliance throughout the coverage window.",
    icon: "Flame",
    category: "specialty",
    benefits: [
      "Supports compliance with California fire code during system outages",
      "Rapid deployment for planned or emergency coverage needs",
      "Officers trained in fire watch patrol procedures and log standards",
      "Documentation supports insurance and code compliance records",
      "Available 24/7, including weekends and holidays",
      "Coordination with fire department during emergencies",
    ],
    features: [
      {
        title: "System Outage Coverage",
        description:
          "When your sprinkler, suppression, or alarm system goes offline for any reason, we deploy officers to conduct continuous fire watch patrols until the system is restored and inspected.",
      },
      {
        title: "Hot Work Monitoring",
        description:
          "Welding, cutting, grinding, and other hot work operations create elevated fire risk. Our officers monitor these activities and the surrounding area during and after the work period.",
      },
      {
        title: "Documented Patrol Logs",
        description:
          "Fire watch officers maintain standardized patrol logs with time-stamped rounds, observations, and any hazard notes. Logs are retained for your records and made available upon request.",
      },
      {
        title: "Emergency Notification Protocol",
        description:
          "Officers are trained to immediately activate fire alarms, contact 911, and initiate building evacuation procedures if any smoke or fire hazard is detected.",
      },
      {
        title: "Rapid Deployment",
        description:
          "We understand that fire watch is often needed on short notice. Our dispatch team coordinates fast deployment — often same-day — to minimize the window of unprotected exposure.",
      },
    ],
    industries: [
      "Commercial office and retail buildings",
      "Industrial and manufacturing facilities",
      "Healthcare and assisted living facilities",
      "Hotels and hospitality properties",
      "Construction sites during active work phases",
      "Schools and institutional buildings",
      "Apartment communities during system maintenance",
    ],
    faqs: [
      {
        question: "When is fire watch legally required in California?",
        answer:
          "California fire code generally requires a fire watch when a required fire protection system is impaired for more than 4 hours in a 24-hour period, or when hot work operations create fire risk in areas without automatic suppression. Your local fire authority may have additional requirements.",
      },
      {
        question: "How fast can you deploy fire watch officers?",
        answer:
          "We prioritize fire watch as an urgent deployment. In most cases, we can have officers on-site within a few hours. For planned maintenance windows, we recommend scheduling at least 24 hours in advance.",
      },
      {
        question: "What documentation do you provide?",
        answer:
          "Officers maintain patrol logs throughout every shift — recording patrol times, observations, and any notable conditions. These logs are provided to you at the end of each coverage period.",
      },
      {
        question: "Can fire watch be combined with other security services?",
        answer:
          "Yes. Fire watch is often integrated into an existing security post during scheduled system maintenance. Officers can fulfill both roles simultaneously depending on the property's layout and requirements.",
      },
    ],
    relatedSlugs: ["unarmed-security", "construction-site-security", "vehicle-patrol"],
    metaDescription:
      "Fire watch services in Roseville, CA. Placer Protection Group provides trained fire watch officers for system outages, hot work operations, and code compliance across the Sacramento region.",
  },
  {
    slug: "construction-site-security",
    title: "Construction Site Security",
    shortTitle: "Construction Security",
    tagline: "Protect your site, your equipment, and your schedule.",
    summary:
      "After-hours and full-time security for active construction sites — preventing equipment theft, material loss, vandalism, and unauthorized access across Roseville and the greater Sacramento region.",
    overview:
      "Construction sites are high-value, high-risk environments. Unattended equipment, stored materials, and open access points make them a frequent target for theft and vandalism. Placer Protection Group provides dedicated construction site security that covers your perimeter, controls gate access, conducts patrol, and deters the opportunistic theft that can derail your timeline and budget. We work alongside your site superintendent to build a coverage plan that fits your project's specific phase and needs.",
    icon: "HardHat",
    category: "specialty",
    benefits: [
      "Prevents equipment theft, copper theft, and material loss",
      "Gate control and access management during active and off hours",
      "After-hours patrol to deter after-dark criminal activity",
      "Detailed incident reports to support insurance claims",
      "Visible deterrence that reduces opportunistic trespass",
      "Flexible coverage as your project phases change",
    ],
    features: [
      {
        title: "Gate Access Control",
        description:
          "Officers man entry points during shift changes, deliveries, and work hours — verifying credentials, logging who enters and exits, and preventing unauthorized personnel from accessing the site.",
      },
      {
        title: "After-Hours Patrol",
        description:
          "The highest risk window for construction site theft is overnight. Our officers conduct scheduled and randomized patrols throughout the site after crews leave, checking perimeter fencing, equipment, and material storage areas.",
      },
      {
        title: "Equipment & Material Protection",
        description:
          "Officers are briefed on your site's high-value assets — generators, vehicles, copper, lumber — and prioritize surveillance of these areas throughout their patrol.",
      },
      {
        title: "Incident Documentation",
        description:
          "Any theft, vandalism, trespass, or suspicious activity is documented in a detailed incident report. This documentation supports police reports, insurance claims, and subcontractor accountability.",
      },
      {
        title: "Coordination with Site Management",
        description:
          "We work directly with your project superintendent or site manager to align post orders, escalation contacts, and coverage schedules with your project's active phases.",
      },
    ],
    industries: [
      "Residential and commercial construction projects",
      "Infrastructure and road projects",
      "Industrial and warehouse development",
      "Mixed-use urban development sites",
      "Solar and energy infrastructure",
      "Multi-family housing construction",
    ],
    faqs: [
      {
        question: "How does construction site security reduce theft losses?",
        answer:
          "Visible officers and patrol vehicles are the most effective deterrent against opportunistic theft. Most construction site theft is committed by individuals testing for vulnerability — a guarded site is almost always bypassed in favor of an unguarded one.",
      },
      {
        question: "Do you provide coverage during active work hours?",
        answer:
          "Yes. We provide coverage during active shifts (gate control, access management) as well as after-hours and overnight patrol. Many clients use both to maintain full-cycle protection.",
      },
      {
        question: "Can coverage scale as the project phases change?",
        answer:
          "Absolutely. We build flexible agreements that allow you to increase or decrease coverage as your project moves through different phases — from foundation to framing to finishing.",
      },
      {
        question: "What happens if an officer catches someone on site after hours?",
        answer:
          "Officers are trained to observe, document, and contact law enforcement rather than confront intruders directly. They will secure the scene, gather information, and file a full incident report.",
      },
    ],
    relatedSlugs: ["armed-security", "fire-watch", "vehicle-patrol"],
    metaDescription:
      "Construction site security in Roseville, CA. Placer Protection Group protects active job sites from theft, vandalism, and unauthorized access throughout the Sacramento region.",
  },
  {
    slug: "retail-security",
    title: "Retail Security Services",
    shortTitle: "Retail Security",
    tagline: "Reduce shrinkage. Protect your team. Maintain a welcoming environment.",
    summary:
      "Professional retail security officers providing loss prevention support, floor presence, and incident response for shopping centers, strip malls, and individual retailers in Roseville.",
    overview:
      "Retail environments face unique security challenges — open access, high foot traffic, and organized retail crime require visible, professional management. Placer Protection Group provides uniformed officers who deliver a calm, welcoming presence while actively deterring theft and responding to incidents. Our officers are trained to balance customer service with effective loss prevention.",
    icon: "ShoppingBag",
    category: "personnel",
    benefits: [
      "Visible floor presence that deters shoplifting and organized theft",
      "De-escalation of customer disputes and disruptive behavior",
      "Protection for staff in high-risk retail environments",
      "Parking lot monitoring during peak hours and closing",
      "Incident documentation for loss prevention records",
      "Weekend and holiday surge coverage available",
    ],
    features: [
      {
        title: "Loss Prevention Presence",
        description:
          "Uniformed officers patrol retail floors and common areas, providing visible deterrence that reduces both opportunistic shoplifting and organized retail crime.",
      },
      {
        title: "Staff Safety Support",
        description:
          "Officers serve as a safety resource for retail associates during high-stress situations — managing disruptive customers, escorting staff during closing, and responding to confrontational scenarios.",
      },
      {
        title: "Parking Lot Coverage",
        description:
          "Officers extend coverage to parking lots during busy periods and closing times — addressing loitering, vehicle break-ins, and after-hours activity.",
      },
    ],
    industries: ["Shopping centers", "Strip malls", "Grocery and pharmacy", "Electronics and specialty retail", "Department stores"],
    faqs: [
      {
        question: "Can retail security officers detain shoplifters?",
        answer: "Officers are trained in California law regarding citizen's arrest and merchant detention. We follow strict protocols to protect both the officer and your business from liability.",
      },
      {
        question: "Do you provide coverage for multi-tenant shopping centers?",
        answer: "Yes. We can provide center-wide coverage that serves multiple tenants, or individual store posts — whatever structure fits your property's layout.",
      },
    ],
    relatedSlugs: ["unarmed-security", "vehicle-patrol", "event-security"],
    metaDescription:
      "Retail security services in Roseville, CA. Placer Protection Group provides professional loss prevention and retail security for shopping centers and retailers across the Sacramento region.",
  },
  {
    slug: "apartment-hoa-security",
    title: "Apartment & HOA Security",
    shortTitle: "Apartment & HOA Security",
    tagline: "Protecting residential communities where families live.",
    summary:
      "Professional security coverage for apartment communities, planned developments, and HOA-managed properties — including gate monitoring, roving patrol, and resident-focused access control.",
    overview:
      "Residential communities deserve security that balances strong oversight with a respectful, neighbor-friendly presence. Placer Protection Group provides residential security programs tailored to apartment communities, gated HOAs, and planned developments across Roseville and surrounding areas. Our officers manage access points, patrol common areas, respond to resident concerns, and document incidents — all while maintaining the professional standard residents expect.",
    icon: "Home",
    category: "specialty",
    benefits: [
      "Gate and entrance monitoring with visitor log",
      "Roving patrol of parking lots, pool areas, and common spaces",
      "Consistent officer presence that deters criminal activity",
      "Professional response to resident complaints and disputes",
      "After-hours coverage during high-risk windows",
      "Monthly reporting for HOA boards and property managers",
    ],
    features: [
      {
        title: "Gate & Entry Management",
        description:
          "Officers manage access at community gates — verifying residents, logging guests, and preventing unauthorized entry during staffed hours.",
      },
      {
        title: "Common Area Patrol",
        description:
          "Officers conduct regular patrols of parking lots, recreation areas, laundry facilities, and exterior corridors to deter vandalism, loitering, and after-hours violations.",
      },
      {
        title: "Resident Services Interface",
        description:
          "Our officers are trained to interact professionally with residents — handling concerns, fielding reports, and serving as a trusted point of contact for the community.",
      },
    ],
    industries: ["Apartment complexes", "Gated HOA communities", "Townhome developments", "Senior living communities", "Mixed-use residential properties"],
    faqs: [
      {
        question: "Can you enforce HOA rules, like pool hours or parking policies?",
        answer: "Officers can observe and document violations per your post orders. They serve as an enforcement presence, though formal HOA action remains with your management team or board.",
      },
      {
        question: "Do you report to the property manager or HOA board?",
        answer: "We will work with whichever contact structure you prefer. Many communities designate both a day-to-day property manager contact and a board liaison for monthly summary reporting.",
      },
    ],
    relatedSlugs: ["vehicle-patrol", "unarmed-security", "retail-security"],
    metaDescription:
      "Apartment and HOA security in Roseville, CA. Placer Protection Group provides professional residential security for apartment communities and HOAs across the Sacramento region.",
  },
  {
    slug: "healthcare-security",
    title: "Healthcare Facility Security",
    shortTitle: "Healthcare Security",
    tagline: "Calm, professional security in sensitive care environments.",
    summary:
      "Security services for hospitals, medical offices, clinics, and assisted living facilities — prioritizing patient safety, staff protection, and access control in sensitive healthcare settings.",
    overview:
      "Healthcare environments present unique security challenges: vulnerable populations, 24-hour operations, controlled substance access, and emotionally heightened situations requiring careful, professional management. Placer Protection Group's healthcare security officers are selected and trained specifically for medical environments — combining firm access control with the compassionate professionalism that care settings demand.",
    icon: "Cross",
    category: "personnel",
    benefits: [
      "Officers trained for healthcare environment sensitivities",
      "Access control for restricted areas and after-hours entry",
      "Patient and visitor management in lobby and waiting areas",
      "De-escalation of difficult patient or visitor situations",
      "Protection for healthcare staff in high-stress environments",
      "Coordination with clinical staff on safety protocols",
    ],
    features: [
      {
        title: "Lobby & Access Control",
        description:
          "Officers manage visitor check-in, enforce after-hours access policies, and maintain secure entry for staff at all hours.",
      },
      {
        title: "Patient Area Support",
        description:
          "When clinical staff need assistance managing an agitated patient or visitor, officers respond professionally and in coordination with your team.",
      },
    ],
    industries: ["Hospitals and urgent care", "Medical office buildings", "Assisted living and memory care", "Behavioral health facilities", "Dental and specialty clinics"],
    faqs: [
      {
        question: "Are your officers trained for HIPAA-sensitive environments?",
        answer: "Yes. Officers working in healthcare settings receive briefing on HIPAA awareness and patient privacy requirements, ensuring professional handling of any patient-adjacent interactions.",
      },
    ],
    relatedSlugs: ["unarmed-security", "armed-security", "event-security"],
    metaDescription:
      "Healthcare security services in Roseville, CA. Placer Protection Group provides professional, sensitive-environment security for hospitals, clinics, and medical facilities across the Sacramento area.",
  },
  {
    slug: "event-security",
    title: "Event Security Services",
    shortTitle: "Event Security",
    tagline: "Professional crowd management for events of every scale.",
    summary:
      "Experienced event security officers providing crowd management, access control, perimeter security, and incident response for corporate, community, and private events in the Roseville area.",
    overview:
      "Every event — from a corporate conference to a community festival — benefits from professional security oversight. Placer Protection Group provides trained event security teams that manage access points, monitor crowd behavior, coordinate with venue staff, and respond to incidents quickly and professionally. We scale our team to your event's size and risk profile.",
    icon: "Users",
    category: "specialty",
    benefits: [
      "Scalable officer teams sized to your event's attendance",
      "Access control and ticket/credential verification",
      "Crowd management and flow guidance",
      "Rapid response to disturbances or medical emergencies",
      "Coordination with local law enforcement for large events",
      "Pre-event site walk and security plan development",
    ],
    features: [
      {
        title: "Access Point Management",
        description:
          "Officers manage entry and exit points, verify credentials, and control access to restricted areas throughout the event.",
      },
      {
        title: "Crowd Monitoring & Response",
        description:
          "Experienced officers monitor crowd dynamics throughout the event, identifying and addressing issues before they escalate.",
      },
    ],
    industries: ["Corporate events and conferences", "Festivals and community events", "Private parties and receptions", "Sporting events", "Concerts and performances", "Fundraisers and galas"],
    faqs: [
      {
        question: "How far in advance should I book event security?",
        answer: "We recommend booking at least 2–4 weeks in advance for larger events. For smaller events, we can sometimes accommodate shorter lead times — contact us to check availability.",
      },
      {
        question: "Will officers be in uniform at my event?",
        answer: "Yes, officers are in professional uniform unless a client specifically requests business-casual or plainclothes coverage. Uniform style is discussed during event planning.",
      },
    ],
    relatedSlugs: ["unarmed-security", "armed-security", "retail-security"],
    metaDescription:
      "Event security services in Roseville, CA. Placer Protection Group provides professional crowd management and event security for corporate, community, and private events across the Sacramento region.",
  },
  {
    slug: "mobile-surveillance",
    title: "Mobile Surveillance & Remote Monitoring",
    shortTitle: "Mobile Surveillance",
    tagline: "Technology-enhanced security for properties that demand constant coverage.",
    summary:
      "Mobile surveillance units and remote monitoring solutions providing around-the-clock visibility for properties where a stationary guard presence is not practical or cost-effective.",
    overview:
      "For some properties, the most effective security solution is one that combines technology with responsive human oversight. Placer Protection Group can deploy mobile surveillance trailers or coordinate with monitoring platforms to provide continuous visual coverage of your property. When an alarm or camera alert is triggered, a patrol officer is dispatched immediately.",
    icon: "Camera",
    category: "patrol",
    benefits: [
      "Continuous monitoring without a full-time stationary guard",
      "Mobile surveillance units for remote or temporary coverage",
      "Immediate patrol dispatch on alert or activity detection",
      "Cost-effective alternative for large outdoor properties",
      "Supports construction sites, lots, and vacant properties",
      "Detailed activity logs and incident documentation",
    ],
    features: [
      {
        title: "Mobile Surveillance Units",
        description:
          "Self-contained mobile surveillance trailers can be deployed at strategic points on your property, providing camera coverage and acting as a visible deterrent.",
      },
      {
        title: "Patrol-on-Demand Response",
        description:
          "When monitoring detects activity, a patrol officer is dispatched to investigate and respond — combining technology with human judgment.",
      },
    ],
    industries: ["Large vacant lots and properties", "Construction sites", "Parking facilities", "Remote industrial properties", "Temporary event sites"],
    faqs: [
      {
        question: "Can surveillance be combined with a live patrol schedule?",
        answer: "Yes. Surveillance and patrol are complementary — monitoring provides continuous coverage while patrol adds a physical presence and randomized visit schedule.",
      },
    ],
    relatedSlugs: ["vehicle-patrol", "construction-site-security", "unarmed-security"],
    metaDescription:
      "Mobile surveillance and remote monitoring in Roseville, CA. Placer Protection Group provides technology-enhanced security solutions for properties across the Sacramento region.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return services.filter((s) => slugs.includes(s.slug));
}

export const servicesByCategory = {
  personnel: services.filter((s) => s.category === "personnel"),
  patrol: services.filter((s) => s.category === "patrol"),
  specialty: services.filter((s) => s.category === "specialty"),
};
