import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import VideoPlayer from './VideoPlayer';
import CareerPathsPreview from './CareerPathsPreview';
import DailyScripture from './DailyScripture';
import AmbassadorForm from './forms/AmbassadorForm';
import MonthlyBlessingCircle from './subscription/MonthlyBlessingCircle';
import ActionButtonsSection from './sections/ActionButtonsSection';

export default function MainContent() {
  const navigate = useNavigate();
  const [showAmbassadorForm, setShowAmbassadorForm] = useState(false);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy mb-6">
                Plant Seeds of Faith in Young Lives
              </h1>
              <div className="space-y-6">
                <p className="text-xl text-patriot-navy">
                  Every month, Foundation Members fund life-changing opportunities for youth through their Mustard Seed subscriptions.
                </p>
                <div className="bg-white/80 backdrop-blur rounded-lg p-6 shadow-sm space-y-4">
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-patriot-red flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-lg font-bold text-patriot-navy">Your Seeds Create Change</h2>
                      <p className="text-patriot-navy">Fund faith-based education, mentorship programs, and career development for young believers.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => navigate('/support')}
                      className="bg-patriot-red text-white px-8 py-3 rounded-full font-semibold hover:bg-patriot-crimson transition-colors flex items-center gap-2"
                    >
                      Plant Seeds Today <ArrowRight className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => setShowAmbassadorForm(true)}
                      className="bg-patriot-navy text-white px-8 py-3 rounded-full font-semibold hover:bg-patriot-blue transition-colors"
                    >
                      Become an Ambassador
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <VideoPlayer 
                url="https://www.youtube.com/watch?v=VAH-ixdFWFs"
                poster="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Members Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <MonthlyBlessingCircle />
        </div>
      </section>

      {/* Action Buttons */}
      <ActionButtonsSection onFundFuture={() => navigate('/support')} />

      {/* Career Paths Preview */}
      <section className="py-12 bg-patriot-cream">
        <div className="max-w-6xl mx-auto px-4">
          <CareerPathsPreview />
        </div>
      </section>

      {/* Daily Scripture */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <DailyScripture />
        </div>
      </section>

      {/* Modals */}
      {showAmbassadorForm && (
        <AmbassadorForm onClose={() => setShowAmbassadorForm(false)} />
      )}
    </main>
  );
}