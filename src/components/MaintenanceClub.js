import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Clock, CheckCircle, ArrowRight, Users, Calendar, Gift } from 'lucide-react';

const MaintenanceClub = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleInfo: '',
    plan: 'professional'
  });

  const plans = [
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

  const benefits = [
    {
      icon: Shield,
      title: 'Vehicle Protection',
      description: 'Regular maintenance protects your investment and maintains resale value'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automatic scheduling means your vehicle is always ready when you need it'
    },
    {
      icon: Star,
      title: 'Premium Service',
      description: 'Club members receive priority service and exclusive benefits'
    },
    {
      icon: Gift,
      title: 'Great Value',
      description: 'Save up to 50% compared to individual service bookings'
    }
  ];

  const testimonials = [
    {
      name: 'Michael R.',
      plan: 'Professional Care',
      content: 'The maintenance club has been amazing. My truck always looks showroom-ready and the priority scheduling is a lifesaver.',
      rating: 5
    },
    {
      name: 'Sarah K.',
      plan: 'Premium Care',
      content: 'Worth every penny! The ceramic coating maintenance keeps my car looking brand new. Best decision I made for my vehicle.',
      rating: 5
    },
    {
      name: 'James T.',
      plan: 'Professional Care',
      content: 'As a busy professional, having automatic detailing saves me so much time. The team is always professional and thorough.',
      rating: 5
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/maintenance-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert('Thank you for joining our Maintenance Club! We will contact you within 24 hours to complete your setup.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          vehicleInfo: '',
          plan: 'professional'
        });
      } else {
        alert('There was an error submitting your subscription. Please try again or call us.');
      }
    } catch (error) {
      console.error('Subscription submission error:', error);
      alert('There was an error submitting your subscription. Please try again or call us.');
    }
  };

  return (
    <section id="maintenance-club" className="section">
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">Membership Program</div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Master's <span className="text-red-500">Maintenance Club</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Keep your vehicle looking pristine year-round with our exclusive maintenance membership plans.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-600/10 border border-red-800/30 rounded-full">
            <Users className="text-red-400" size={20} />
            <span className="text-red-400 font-medium">150+ Members in Chico</span>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-red-400" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: plan.id === selectedPlan ? 0.2 : 0.1 }}
                className={`card relative cursor-pointer transition-all duration-300 ${
                  selectedPlan === plan.id 
                    ? 'border-red-600 shadow-2xl shadow-red-900/20 scale-105' 
                    : 'hover:border-red-900/50'
                } ${plan.popular ? 'ring-2 ring-red-600/50' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-black text-red-500">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-red-500 flex-shrink-0" size={20} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-full font-bold transition-all ${
                    selectedPlan === plan.id
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-red-400">{testimonial.plan}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sign Up Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <h2 className="text-3xl font-bold text-center mb-8">Join the Maintenance Club</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="(530) 555-5555"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Selected Plan <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="plan"
                      value={formData.plan}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                    >
                      {plans.map((plan) => (
                        <option key={plan.id} value={plan.id}>
                          {plan.name} - {plan.price}/month
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Vehicle Information <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="vehicleInfo"
                    value={formData.vehicleInfo}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your vehicle (make, model, year, etc.)"
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-primary px-8 py-4 text-lg"
                  >
                    Start Your Membership
                    <ArrowRight size={20} />
                  </button>
                  <p className="text-sm text-gray-400 mt-4">
                    No long-term contracts. Cancel anytime.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-3">How does billing work?</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Members are billed monthly on the same date they sign up. You can cancel anytime with no penalties.
                </p>
                
                <h3 className="font-bold mb-3">Can I change my plan?</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.
                </p>
                
                <h3 className="font-bold mb-3">What if I need extra services?</h3>
                <p className="text-gray-400 text-sm">
                  Club members receive discounts on all additional services not included in their plan.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-3">How do I schedule appointments?</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Club members get priority scheduling. Call us or use our online booking system with your member ID.
                </p>
                
                <h3 className="font-bold mb-3">Is there a commitment period?</h3>
                <p className="text-gray-400 text-sm mb-6">
                  No long-term commitments. We're confident you'll love our service enough to stay month-to-month.
                </p>
                
                <h3 className="font-bold mb-3">Do you offer family plans?</h3>
                <p className="text-gray-400 text-sm">
                  Yes! Contact us for special family pricing and multi-vehicle discounts.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MaintenanceClub;
