export interface NavItem {
  label: string;
  url: string;
  isMegaMenu?: boolean;
  megaColumns?: {
    title: string;
    items: { label: string; url: string }[];
  }[];
  children?: { label: string; url: string }[];
}

export const headerNav: NavItem[] = [
  { label: 'Home', url: '/' },
  { label: 'About Us', url: '/about-us' },
  {
    label: 'Building Applications',
    url: '/building-applications/',
    isMegaMenu: true,
    megaColumns: [
      {
        title: 'Residential',
        items: [
          { label: 'Garages', url: '/residential-steel-buildings/garage/' },
          { label: 'Homes', url: '/residential-steel-buildings/homes/' },
          { label: 'Sheds', url: '/residential-steel-buildings/sheds/' },
          { label: 'Storage', url: '/residential-steel-buildings/storage/' },
          { label: 'Workshops', url: '/residential-steel-buildings/workshop/' },
        ],
      },
      {
        title: 'Commercial',
        items: [
          { label: 'Aircraft Hangars', url: '/commercial-steel-buildings/aircraft-hangars/' },
          { label: 'Office Buildings', url: '/commercial-steel-buildings/office-buildings/' },
          { label: 'Retail Stores', url: '/commercial-steel-buildings/retail-stores/' },
          { label: 'Warehouses', url: '/commercial-steel-buildings/warehouse/' },
        ],
      },
      {
        title: 'Industrial',
        items: [
          { label: 'Cold Storage Facility', url: '/industrial-steel-buildings/cold-storage' },
          { label: 'Heavy Equipment Storage', url: '/industrial-steel-buildings/heavy-equipment-storage/' },
          { label: 'Manufacturing Plants', url: '/industrial-steel-buildings/manufacturing-plants/' },
          { label: 'Shipping Container Covers', url: '/industrial-steel-buildings/shipping-container-covers/' },
        ],
      },
      {
        title: 'Agricultural',
        items: [
          { label: 'Farm Storage', url: '/agricultural-steel-buildings/farm-storage/' },
          { label: 'Livestock Barns', url: '/agricultural-steel-buildings/livestock-barns/' },
          { label: 'Riding Arenas', url: '/agricultural-steel-buildings/riding-arenas/' },
        ],
      },
    ],
  },
  {
    label: 'Building Types',
    url: '/building-types',
    children: [
      { label: 'Quonset Hut Buildings', url: '/quonset-hut-buildings/' },
      { label: 'CFS Buildings', url: '/cfs-buildings/' },
      { label: 'I-Beam Steel Buildings', url: '/i-beam-buildings/' },
      { label: 'Building Comparison', url: '/building-comparison/' },
    ],
  },
  { label: 'Clearance', url: '/clearance' },
  { label: 'Resources', url: '/resources' },
  { label: 'Contact Us', url: '/contact-us' },
];