import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Droplets, Wind, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "headlight",
      title: "Headlight Restoration",
      price: "$60",
      icon: Sparkles,
      description:
        "Restore clarity, improve visibility, and protect headlights from fading.",
      features: [
        "Removes oxidation and yellowing",
        "Improves nighttime visibility",
        "Adds UV protection",
      ],
    },
    {
      id: "spot",
      title: "Spot Cleaning",
      price: "$35",
      icon: Droplets,
      description:
        "Targeted stain removal for specific interior areas without full detail.",
      features: [
        "Removes tough stains",
        "Focused interior treatment",
        "Quick and effective cleaning",
      ],
    },
    {
      id: "shampoo",
      title: "Deep Shampoo",
      price: "$100",
      icon: Wind,
      description:
        "Deep interior extraction to remove dirt, odors, and buildup.",
      features: [
        "Cleans carpets and upholstery",
        "Removes embedded dirt",
        "Helps eliminate odors",
      ],
    },
  ];

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">Add-On Services</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Customize Your <span className="text-red-500">Detail</span>
          </h2>
          <p className="text-xl text-gray-300">
            Add these services to your Full Detail to get the exact level of care your vehicle needs.
          </p>
        </motion.div>

        {/* Add-On Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:border-red-900/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/20"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                  <service.icon className="text-red-400" size={32} />
                </div>

                <div className="text-red-400 font-bold text-sm mb-2">
                  Starting at {service.price}
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-red-500" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Important Note */}
        <div className="text-center">
          <div className="inline-block px-6 py-4 bg-red-600/10 border border-red-800/30 rounded-xl">
            <p className="text-red-400 font-medium">
              Add-on services are available with Full Detail packages only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;