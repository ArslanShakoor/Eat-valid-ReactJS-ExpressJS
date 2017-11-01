export default [
  {
    name: 'rating',
    label: 'Restaurant',
    type: 'select',
    req: true
  },
  {
    name: 'anonymous',
    label: 'Anonymous',
    type: 'checkbox',
    req: false
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    req: true,
    min_length: 30,
    max_length: 500
  },
  {
    name: 'overall',
    label: 'Overall',
    type: 'stars',
    req: true
  },
  {
    name: 'taste',
    label: 'Taste',
    type: 'stars',
    req: true
  },
  {
    name: 'cleanliness',
    label: 'Cleanliness',
    type: 'stars',
    req: true
  },
  {
    name: 'service',
    label: 'Service',
    type: 'stars',
    req: true
  }
];
