export const defaultMaintenancePlans = [
  {
    id: 'basic',
    name: 'Basic Care',
    price: '$39',
    period: '/month',
    description: 'Perfect for regular maintenance',
    features: [
      'Monthly exterior wash',
      'Interior vacuum and wipe down',
      'Tire dressing',
      'Window cleaning',
      '10% off additional services'
    ],
    popular: false
  },
  {
    id: 'professional',
    name: 'Professional Care',
    price: '$79',
    period: '/month',
    description: 'Most popular for vehicle enthusiasts',
    features: [
      'Bi-weekly exterior wash',
      'Weekly interior cleaning',
      'Monthly wax application',
      'Ceramic coating maintenance',
      'Priority scheduling',
      '20% off all services',
      'Free headlight restoration annually'
    ],
    popular: true
  },
  {
    id: 'premium',
    name: 'Premium Care',
    price: '$129',
    period: '/month',
    description: 'Ultimate protection and care',
    features: [
      'Weekly full detail',
      'Unlimited exterior washes',
      'Full ceramic coating system',
      'Paint correction quarterly',
      'Leather conditioning monthly',
      'Emergency spill cleanup',
      '30% off all services',
      'Free annual ceramic upgrade'
    ],
    popular: false
  }
];

export const loadMaintenancePlans = () => {
  const saved = localStorage.getItem('maintenanceClubPlans');
  return saved ? JSON.parse(saved) : defaultMaintenancePlans;
};

export const saveMaintenancePlans = (plans) => {
  localStorage.setItem('maintenanceClubPlans', JSON.stringify(plans));
  window.dispatchEvent(new Event('maintenanceClubPlansUpdated'));
};