import React from 'react';
import { Building2, Heart, Star, Target, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BusinessTierExample from '../components/business/BusinessTierExample';
import { BUSINESS_TIERS } from '../constants/businessTiers';

export default function BusinessSupport() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-patriot-red" />,
      title: "Faith-Driven Impact",
      description: "Join a network of businesses committed to nurturing young believers through education, mentorship, and career development."
    },
    {
      icon: <Star className="w-8 h-8 text-patriot-red" />,
      title: "Community Recognition",
      description: "Stand out in our business directory with enhanced visibility and showcase your commitment to faith-based youth development."
    },
    {
      icon: <Target className="w-8 h-8 text-patriot-red" />,
      title: "Direct Support",
      description: "Your partnership directly funds life-changing opportunities for youth, from career training to spiritual growth programs."
    }
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy mb-6">
              Partner in Faith & Purpose
            </h1>
            <p className="text-xl text-patriot-navy mb-8 max-w-3xl mx-auto">
              Join a community of faith-driven businesses committed to empowering the next generation through Christ-centered education and mentorship.
            </p>
            <button
              onClick={() => navigate('/claim-business')}
              className="bg-patriot-red text-white px-8 py-3 rounded-full font-semibold hover:bg-patriot-crimson transition-colors flex items-center gap-2 mx-auto"
            >
              Join Our Directory <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Subscription Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Icon Tier (Free) */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-patriot-navy mb-2">Icon Listing</h3>
                <p className="text-patriot-gray font-bold">Free</p>
              </div>
              <BusinessTierExample name="Example Business" tier="ICON" />
              <button
                onClick={() => navigate('/claim-business')}
                className="w-full mt-4 bg-patriot-cream text-patriot-navy px-6 py-3 rounded-full hover:bg-patriot-navy hover:text-white transition-colors"
              >
                Get Started Free
              </button>
            </div>

            {/* Enhanced Tier */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-patriot-navy mb-2">Enhanced Listing</h3>
                <p className="text-patriot-navy font-bold">${BUSINESS_TIERS.ENHANCED.price}/month</p>
              </div>
              <BusinessTierExample name="Example Business" tier="ENHANCED" />
              <button
                onClick={() => navigate('/claim-business')}
                className="w-full mt-4 bg-patriot-red text-white px-6 py-3 rounded-full hover:bg-patriot-crimson transition-colors"
              >
                Choose Enhanced
              </button>
            </div>

            {/* Featured Tier */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-patriot-red">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-patriot-navy mb-2">Featured Listing</h3>
                <p className="text-patriot-red font-bold">${BUSINESS_TIERS.FEATURED.price}/month</p>
              </div>
              <BusinessTierExample name="Example Business" tier="FEATURED" />
              <button
                onClick={() => navigate('/claim-business')}
                className="w-full mt-4 bg-patriot-red text-white px-6 py-3 rounded-full hover:bg-patriot-crimson transition-colors"
              >
                Choose Featured
              </button>
            </div>

            {/* Hero Tier */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-patriot-navy mb-2">Hero Listing</h3>
                <p className="text-patriot-red font-bold">${BUSINESS_TIERS.HERO.price}/month</p>
              </div>
              <BusinessTierExample name="Example Business" tier="HERO" />
              <button
                onClick={() => navigate('/claim-business')}
                className="w-full mt-4 bg-patriot-red text-white px-6 py-3 rounded-full hover:bg-patriot-crimson transition-colors"
              >
                Choose Hero
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-patriot-navy mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-patriot-blue">Make a lasting impact while growing your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                {benefit.icon}
                <h3 className="text-xl font-bold text-patriot-navy my-4">{benefit.title}</h3>
                <p className="text-patriot-navy">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}