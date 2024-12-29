import React, { useState } from 'react';
import { Heart, Star, Users, Church } from 'lucide-react';
import PaymentModal from '../components/PaymentModal';

const foundationPoints = [
  {
    icon: <Church className="w-6 h-6 text-patriot-red" />,
    title: "Church-Rooted Values",
    text: "Most Foundation Members grew up in the church—it shaped their lives, taught them resilience, and revealed God's unwavering faithfulness."
  },
  {
    icon: <Heart className="w-6 h-6 text-patriot-red" />,
    title: "Called to Give Back",
    text: "Now, they feel called to do something bigger: to give today's youth opportunities they never had, or to pass on the same life-changing blessings they received."
  },
  {
    icon: <Star className="w-6 h-6 text-patriot-red" />,
    title: "Historic Mission",
    text: "They understand this moment is historic—a chance to take action, to ensure our children grow up rooted in faith, surrounded by a powerful community, and guided by Jesus."
  },
  {
    icon: <Users className="w-6 h-6 text-patriot-red" />,
    title: "First Seed Planters",
    text: "This is more than a movement; it's a mission. Foundation Members are the ones bold enough to plant the first seeds."
  }
];

const subscriptionTiers = [
  {
    name: 'Seed Planter',
    seeds: 11,
    price: 11,
    features: [
      'Fund 11 Mustard Seeds monthly',
      'Monthly impact report',
      'Community updates',
      'Prayer circle access'
    ]
  },
  {
    name: 'Growth Nurturer',
    seeds: 33,
    price: 33,
    featured: true,
    features: [
      'Fund 33 Mustard Seeds monthly',
      'Detailed impact tracking',
      'Quarterly virtual meetups',
      'Mentorship opportunities',
      'Recognition on website'
    ]
  },
  {
    name: 'Harvest Champion',
    seeds: 77,
    price: 77,
    features: [
      'Fund 77 Mustard Seeds monthly',
      'VIP impact events',
      'Direct student connections',
      'Leadership circle access',
      'Custom impact report',
      'Featured supporter story'
    ]
  }
];

export default function Support() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedTier, setSelectedTier] = useState<typeof subscriptionTiers[0] | null>(null);

  const handleSubscribe = (tier: typeof subscriptionTiers[0]) => {
    setSelectedTier(tier);
    setShowPaymentModal(true);
  };

  return (
    <main className="flex-1">
      <section className="py-16 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-patriot-navy mb-4">
              Foundation Members
            </h1>
            <p className="text-xl text-patriot-blue">Our First Seed Planters</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {foundationPoints.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                {point.icon}
                <h3 className="text-lg font-bold text-patriot-navy my-3">{point.title}</h3>
                <p className="text-patriot-navy">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-patriot-navy mb-4">Monthly Blessing Circles</h2>
            <p className="text-xl text-patriot-blue max-w-2xl mx-auto">
              Join our community of monthly supporters and help nurture young minds through education and mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptionTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 ${
                  tier.featured ? 'border-2 border-patriot-red' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Heart className={`w-8 h-8 ${tier.featured ? 'text-patriot-red' : 'text-patriot-navy'}`} />
                  <h3 className="text-xl font-bold text-patriot-navy">{tier.name}</h3>
                </div>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-patriot-red">${tier.price}</span>
                  <span className="text-patriot-gray">/month</span>
                </div>

                <p className="text-patriot-blue mb-6">
                  Plant {tier.seeds} Mustard Seeds monthly to support youth education and mentorship.
                </p>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-patriot-red" />
                      <span className="text-sm text-patriot-gray">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleSubscribe(tier)}
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-colors ${
                    tier.featured
                      ? 'bg-patriot-red text-white hover:bg-patriot-crimson'
                      : 'bg-patriot-cream text-patriot-navy hover:bg-patriot-navy hover:text-white'
                  }`}
                >
                  Join the Circle
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showPaymentModal && selectedTier && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          defaultAmount={selectedTier.price}
          defaultRecurring={true}
          description={`Monthly ${selectedTier.name} Subscription - Plant ${selectedTier.seeds} Seeds Monthly`}
        />
      )}
    </main>
  );
}