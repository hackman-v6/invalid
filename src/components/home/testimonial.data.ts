import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Promoting Sustainable Agriculture',
    content:
      'Rajesh Patel, an innovative farmer, utilized environmental crowdfunding to implement sustainable farming practices, reducing chemical inputs, preserving soil health, and promoting organic agriculture, ultimately enhancing the livelihoods of rural communities.',
    user: {
      id: 1,
      name: 'Rajesh Patel',
      professional: 'Owner, Organic Farms India',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Clean Water for Rural Communities',
    content:
      'Amit Kumar leveraged environmental crowdfunding to provide clean water solutions to underserved rural communities, enabling access to safe drinking water, improving sanitation facilities, and empowering communities to lead healthier lives.',
    user: {
      id: 1,
      name: 'Amit Kumar',
      professional: 'Social Entrepreneur',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Restoring Forest Ecosystems',
    content:
      'Priyam Sharma spearheaded a crowdfunding campaign to restore degraded forest ecosystems, mobilizing funds for tree planting initiatives, conservation efforts, and community engagement programs, creating a greener and healthier environment for generations to come.',
    user: {
      id: 1,
      name: 'Priyam Sharma ',
      professional: 'Founder, Green Guardians Trust',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Protecting Coastal Ecosystems ',
    content:
      'Shreya Gupta utilized environmental crowdfunding to restore coastal ecosystems, engaging communities and conducting research. Crowdfunding enabled significant strides in coastal conservation.',
    user: {
      id: 1,
      name: ' Shreya Gupta',
      professional: 'Environmental Scientist',
      photo: '4.jpg',
    },
  },
  {
    id: 5,
    title: ' Empowering Women in Waste Management',
    content:
      'Anjali Mehta empowered women in waste management through crowdfunding, establishing training centers and supporting women-led initiatives. Crowdfunding led to economic empowerment and reduced environmental pollution.',
    user: {
      id: 1,
      name: 'Anjali Mehta',
      professional: 'Social Entrepreneur',
      photo: '5.jpg',
    },
  },
]
