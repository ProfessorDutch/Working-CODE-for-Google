import React from 'react';
import { Church, Heart, Star, Users } from 'lucide-react';

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

export default function MonthlyBlessingCircle() {
  return (
    <section id="monthly-blessing" className="bg-gradient-to-br from-patriot-cream to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-patriot-navy mb-4">Foundation Members</h2>
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
  );
}