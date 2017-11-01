export default [
  {
    name: 'name',
    label: 'Restaurant',
    type: 'text',
    req: true,
    min_length: 3,
    max_length: 100
  },
  {
    name: 'type',
    label: 'Type',
    type: 'text',
    req: true,
    min_length: 3,
    max_length: 50
  },
  {
    name: 'address',
    label: 'Address',
    type: 'text',
    req: true,
    min_length: 20,
    max_length: 150
  },
  {
    name: 'ownerEmail',
    label: 'Email',
    type: 'text',
    req: true
  },
  {
    name: 'featured',
    label: 'Featured',
    type: 'checkbox',
    req: false
  },
  {
    name: 'website',
    label: 'Website',
    type: 'text',
    req: false,
    min_length: 6,
    max_length: 100
  },
  {
    name: 'facebook',
    label: 'Facebook',
    type: 'text',
    req: false,
    min_length: 6,
    max_length: 100
  },
  {
    name: 'instagram',
    label: 'Instagram',
    type: 'text',
    req: false,
    min_length: 6,
    max_length: 100
  }
];
