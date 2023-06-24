import type { Navigation } from '@/interfaces/navigation'

export const navigations: Navigation[] = [
  {
    label: 'Ongoing Campaigns',
    path: 'popular-course', // '/',
  },
  {
    label: 'Past Campaigns',
    path: 'mentors', // '/popular-course',
  },
  {
    label: 'About',
    path: 'feature', // '/testimonial',
  },
  {
    label: 'Contact us',
    path: '/', // '/mentors',
  },
]
