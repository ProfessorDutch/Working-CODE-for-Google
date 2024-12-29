import React, { useState } from 'react';
import { X, Heart, ArrowRight, Share2, Star, MessageCircle } from 'lucide-react';
import { EnrollmentService } from '../../services/enrollments';
import { useFormErrors } from '../../hooks/useFormErrors';

interface AmbassadorFormProps {
  onClose: () => void;
}

const ENGAGEMENT_OPPORTUNITIES = [
  {
    id: 'share',
    icon: <Share2 className="w-5 h-5" />,
    title: 'Share Stories of Faith',
    description: 'Spread hope by sharing our content with your community'
  },
  {
    id: 'engage',
    icon: <Heart className="w-5 h-5" />,
    title: 'Show Your Support',
    description: 'Like and react to uplift inspiring stories of youth and faith'
  },
  {
    id: 'comment',
    icon: <MessageCircle className="w-5 h-5" />,
    title: 'Encourage Others',
    description: 'Leave encouraging comments to support young believers'
  },
  {
    id: 'community',
    icon: <Star className="w-5 h-5" />,
    title: 'Join the Movement',
    description: 'Be part of a community dedicated to nurturing faith in youth'
  }
];

export default function AmbassadorForm({ onClose }: AmbassadorFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    church: '',
    engagements: [] as string[]
  });
  const [loading, setLoading] = useState(false);
  const { errors, setError, clearError, clearAllErrors } = useFormErrors();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    clearError(name);
  };

  const handleEngagementToggle = (engagementId: string) => {
    setFormData(prev => ({
      ...prev,
      engagements: prev.engagements.includes(engagementId)
        ? prev.engagements.filter(id => id !== engagementId)
        : [...prev.engagements, engagementId]
    }));
    clearError('engagements');
  };

  const validateForm = () => {
    let isValid = true;
    clearAllErrors();

    if (!formData.firstName.trim()) {
      setError('firstName', 'First name is required');
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      setError('lastName', 'Last name is required');
      isValid = false;
    }
    if (!formData.email.trim()) {
      setError('email', 'Email is required');
      isValid = false;
    }
    if (formData.engagements.length === 0) {
      setError('engagements', 'Please select at least one way to engage');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      await EnrollmentService.createAmbassadorEnrollment({
        type: 'ambassador',
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        church: formData.church,
        commitments: formData.engagements
      });

      setShowSuccess(true);
    } catch (err) {
      console.error('Failed to submit enrollment:', err);
      setError('submit', err instanceof Error ? err.message : 'Failed to submit enrollment');
    } finally {
      setLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full mx-auto p-8">
          <div className="text-center">
            <Heart className="w-12 h-12 text-patriot-red mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-patriot-navy mb-4">
              Welcome to The Mustard Seed Movement!
            </h3>
            <p className="text-patriot-blue mb-6">
              Thank you for joining our community. Together, we'll share faith, inspire hope, and make a difference in young lives.
            </p>
            <button
              onClick={onClose}
              className="bg-patriot-red text-white px-8 py-3 rounded-full hover:bg-patriot-crimson transition-colors"
            >
              Start Sharing Faith
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full mx-auto my-8 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-patriot-navy">Join Our Community</h2>
              <p className="text-patriot-blue mt-2">Share faith and inspire the next generation</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-patriot-red focus:border-transparent`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-patriot-red focus:border-transparent`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-patriot-red focus:border-transparent`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Church (Optional)
                </label>
                <input
                  type="text"
                  name="church"
                  value={formData.church}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                />
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-patriot-navy mb-2">Ways to Share Your Faith</h3>
                <p className="text-patriot-blue">
                  Choose how you'd like to engage and inspire others in their faith journey
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ENGAGEMENT_OPPORTUNITIES.map((opportunity) => (
                  <button
                    key={opportunity.id}
                    type="button"
                    onClick={() => handleEngagementToggle(opportunity.id)}
                    className={`flex flex-col items-center text-center p-6 rounded-xl border-2 transition-all duration-300 ${
                      formData.engagements.includes(opportunity.id)
                        ? 'border-patriot-red bg-patriot-cream scale-105'
                        : 'border-gray-200 hover:border-patriot-red hover:bg-patriot-cream/50'
                    }`}
                  >
                    <div className={`p-3 rounded-full mb-3 ${
                      formData.engagements.includes(opportunity.id)
                        ? 'bg-patriot-red text-white'
                        : 'bg-gray-100 text-patriot-navy'
                    }`}>
                      {opportunity.icon}
                    </div>
                    <h4 className="font-semibold text-patriot-navy mb-2">{opportunity.title}</h4>
                    <p className="text-sm text-patriot-gray">{opportunity.description}</p>
                  </button>
                ))}
              </div>
              {errors.engagements && (
                <p className="mt-2 text-sm text-red-600 text-center">{errors.engagements}</p>
              )}
            </div>

            {errors.submit && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                {errors.submit}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-patriot-red text-white py-3 rounded-full font-semibold hover:bg-patriot-crimson transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? 'Processing...' : (
                <>Join the Movement <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}