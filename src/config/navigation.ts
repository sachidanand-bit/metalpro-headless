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
    url: '/building-applications',
    isMegaMenu: true,
    megaColumns: [
      {
        title: 'Residential',
        items: [
          { label: 'Garages', url: '/steel-garage-canada-what-ownership-is-really-like' },
          { label: 'Homes', url: '/barndominium-canada-what-its-like-to-live-in-one' },
          { label: 'Sheds', url: '/metal-shed-canada-is-it-right-for-you' },
          { label: 'Storage', url: '/steel-rv-storage-building-canada-protecting-your-investment' },
          { label: 'Workshops', url: '/steel-workshop-building-in-canada-life-after-you-build' },
        ],
      },
      {
        title: 'Commercial',
        items: [
          { label: 'Aircraft Hangars', url: '/aircraft-hangars' },
          { label: 'Office Buildings', url: '/office-buildings' },
          { label: 'Retail Stores', url: '/steel-building-for-retail-business-running-it-day-to-day' },
          { label: 'Warehouses', url: '/steel-warehouse-building-canada-running-a-warehouse-business' },
        ],
      },
      {
        title: 'Industrial',
        items: [
          { label: 'Cold Storage Facility', url: '/cold-storage' },
          { label: 'Heavy Equipment Storage', url: '/industrial-steel-building-canada-a-manufacturing-operations-guide' },
          { label: 'Manufacturing Plants', url: '/manufacturing-plants' },
          { label: 'Shipping Container Covers', url: '/shipping-container-cover-quonset-style' },
        ],
      },
      {
        title: 'Agricultural',
        items: [
          { label: 'Farm Storage', url: '/steel-farm-building-canada-running-an-agricultural-operation' },
          { label: 'Livestock Barns', url: '/livestock-barns' },
          { label: 'Riding Arenas', url: '/riding-arenas' },
        ],
      },
    ],
  },
  {
    label: 'Building Types',
    url: '/building-types',
    children: [
      { label: 'CFS Buildings', url: '/cfs-buildings' },
      { label: 'Quonset Hut Buildings', url: '/quonset-hut-buildings' },
      { label: 'I-Beam Steel Buildings', url: '/i-beam-buildings' },
      { label: 'Building Comparison', url: '/building-comparison' },
    ],
  },
  { label: 'Clearance', url: '/clearance' },
  { label: 'Resources', url: '/resources' },
  { label: 'Contact Us', url: '/contact-us' },
];