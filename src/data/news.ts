const BASE2 = "https://pansaholding.com/wp-content/uploads/2023/11/";

export interface NewsItem {
  slug: string;
  image: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  content: string[];
}

export const newsItems: NewsItem[] = [
  {
    slug: "pansa-road-show-august-2017",
    image: `${BASE2}1-1024x575-1-1.jpg`,
    date: "03 November 2023",
    category: "Events",
    title: "Pansa Road Show August 2017",
    excerpt: "The Pansa Group of Companies N.V. developed a road show to present our services and capabilities to potential partners and clients across the region.",
    content: [
      "The Pansa Group of Companies N.V. developed a road show to present our services and capabilities to potential partners and clients across the region.",
      "Through this initiative, the team engaged directly with local businesses and stakeholders, showcasing the full range of industrial maintenance, manufacturing, and human resource development services offered by the Pansa Group of Companies.",
    ],
  },
  {
    slug: "suripop",
    image: `${BASE2}WhatsApp-Image-2019-06-18-at-12.38.52-1024x680-1.jpeg`,
    date: "03 November 2023",
    category: "Events",
    title: "Suripop",
    excerpt: "In light of fostering community spirit and cultural engagement, Pansa Group proudly participated in Suripop, supporting local talent and culture.",
    content: [
      "In light of fostering community spirit and cultural engagement, Pansa Group proudly participated in Suripop, supporting local talent and culture.",
      "As a company rooted in Suriname, Pansa Group of Companies N.V. values initiatives that celebrate local creativity and bring the community together.",
    ],
  },
  {
    slug: "national-fair-of-suriname-2018",
    image: `${BASE2}DSC_7544-1024x678-1.jpg`,
    date: "03 November 2023",
    category: "Events",
    title: "National Fair of Suriname 2018",
    excerpt: "The purpose of the company participating in the National Fair was to showcase our capabilities, certifications and introduce ourselves to a wider audience.",
    content: [
      "The purpose of the company participating in the National Fair was to showcase our capabilities, certifications and introduce ourselves to a wider audience.",
      "Visitors to the Pansa Group booth had the opportunity to learn about the company's history, its industrial services, and its commitment to quality and safety standards.",
    ],
  },
  {
    slug: "school-visit-lbo-george-a-kort",
    image: `${BASE2}DSC05214-1024x575-1.jpg`,
    date: "03 November 2023",
    category: "Events",
    title: "School visit from LBO George A. Kort school",
    excerpt: "The mechanical engineering students from the secondary technical school visited our facilities to learn about real-world industrial applications.",
    content: [
      "The mechanical engineering students from the secondary technical school visited our facilities to learn about real-world industrial applications.",
      "The visit gave students hands-on exposure to the machine shop and workshop environment, connecting what they learn in the classroom to real industrial practice.",
    ],
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
