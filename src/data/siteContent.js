import { supabase } from "../lib/supabaseClient";

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

// 🔥 LOAD from Supabase
export const loadMaintenancePlans = async () => {
  const { data, error } = await supabase
    .from("site_content")
    .select("content")
    .eq("id", "maintenance_plans")
    .single();

  if (error || !data) {
    console.warn("Using default plans (no DB yet)");
    return defaultMaintenancePlans;
  }

  return data.content || defaultMaintenancePlans;
};

// 🔥 SAVE to Supabase
export const saveMaintenancePlans = async (plans) => {
  const { error } = await supabase
    .from("site_content")
    .upsert({
      id: "maintenance_plans",
      content: plans,
    });

  if (error) {
    console.error("Save failed:", error);
  } else {
    alert("Saved to database ✅");
    window.dispatchEvent(new Event('maintenanceClubPlansUpdated'));
  }
};