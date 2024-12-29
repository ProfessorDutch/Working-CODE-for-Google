import React from 'react';
import { Star, Building2 } from 'lucide-react';
import BusinessTierExample from './BusinessTierExample';
import { BUSINESS_TIERS } from '../../constants/businessTiers';

// Example accountant businesses with consistent data
const accountantBusinesses = {
  hero: {
    name: "Faith & Numbers Accounting",
    address: "1200 Peachtree St NE, Atlanta, GA 30309",
    phone: "(404) 555-0100",
    website: "faithandnumbers.com",
    description: "Premier faith-based accounting firm serving Atlanta's businesses and nonprofits since 1995. Full-service tax, audit, and advisory solutions."
  },
  featured: [
    {
      name: "Grace Financial Services",
      address: "2675 Paces Ferry Rd, Atlanta, GA 30339",
      phone: "(404) 555-0201",
      website: "gracefinancialcpa.com",
      description: "Trusted accounting and tax services for churches and religious organizations."
    },
    {
      name: "Cornerstone Tax & Accounting",
      address: "3344 Peachtree Rd NE, Atlanta, GA 30326",
      phone: "(404) 555-0202",
      website: "cornerstonetax.com",
      description: "Comprehensive accounting solutions with Christian values."
    }
  ],
  basic: [
    {
      name: "Divine Numbers Accounting",
      address: "2900 Chamblee Tucker Rd, Atlanta, GA 30341",
      phone: "(404) 555-0401"
    },
    {
      name: "Faithful Tax Solutions",
      address: "4400 Ashford Dunwoody Rd, Atlanta, GA 30346",
      phone: "(404) 555-0402"
    }
  ],
  nonMember: [
    {
      name: "Smith & Associates CPAs",
      address: "2100 Powers Ferry Rd, Atlanta, GA 30339",
      phone: "(404) 555-0501"
    },
    {
      name: "Metro Tax Services",
      address: "1000 Parkwood Circle, Atlanta, GA 30339",
      phone: "(404) 555-0502"
    },
    {
      name: "Johnson Accounting LLC",
      address: "245 Perimeter Center Pkwy, Atlanta, GA 30346",
      phone: "(404) 555-0503"
    },
    {
      name: "Atlanta Tax Solutions",
      address: "1100 Peachtree St NE, Atlanta, GA 30309",
      phone: "(404) 555-0504"
    }
  ]
};

export default function DirectoryPreview() {
  return (
    <div className="space-y-8">
      {/* Directory Header */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-patriot-navy mb-4">Atlanta Accountants Directory</h3>
        <div className="flex items-center gap-2 text-sm text-patriot-gray">
          <Building2 className="w-4 h-4" />
          <span>Showing accounting firms near Atlanta, GA</span>
        </div>
      </div>

      {/* Hero Example */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-4 bg-patriot-red">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">Premium Hero Section</span>
            </div>
            <span className="text-white font-bold">${BUSINESS_TIERS.HERO.price}/month</span>
          </div>
        </div>
        <BusinessTierExample 
          name={accountantBusinesses.hero.name}
          tier="HERO"
          business={accountantBusinesses.hero}
        />
      </div>

      {/* Featured Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accountantBusinesses.featured.map((business, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 bg-green-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-white" />
                  <span className="font-semibold text-white">Featured Listing</span>
                </div>
                <span className="text-white font-bold">${BUSINESS_TIERS.FEATURED.price}/month</span>
              </div>
            </div>
            <BusinessTierExample 
              name={business.name}
              tier="FEATURED"
              business={business}
            />
          </div>
        ))}
      </div>

      {/* Basic Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accountantBusinesses.basic.map((business, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 bg-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-patriot-navy">Basic Member</span>
                </div>
                <span className="text-green-600 font-bold">Free</span>
              </div>
            </div>
            <BusinessTierExample 
              name={business.name}
              tier="ICON"
              business={business}
            />
          </div>
        ))}
      </div>

      {/* Non-Member Listings */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-500">Other Local Accountants</h3>
          <span className="text-sm text-gray-400">Non-member listings appear below</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {accountantBusinesses.nonMember.map((business, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="text-sm font-medium text-gray-600 mb-2">{business.name}</h4>
              <p className="text-xs text-gray-400">{business.address}</p>
              <p className="text-xs text-gray-400 mt-1">{business.phone}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Directory Footer */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-sm text-patriot-gray">
            <span className="font-medium">Pro Tip:</span> Mustard Seed members appear above non-member listings
          </div>
          <div className="text-sm text-patriot-blue">
            Showing 8 of 156 accounting firms in Atlanta
          </div>
        </div>
      </div>
    </div>
  );
}