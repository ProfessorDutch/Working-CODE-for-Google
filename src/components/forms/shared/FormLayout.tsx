import React from 'react';
import { X } from 'lucide-react';

interface FormLayoutProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  onClose: () => void;
  children: React.ReactNode;
}

export default function FormLayout({ 
  title, 
  subtitle, 
  icon, 
  onClose, 
  children 
}: FormLayoutProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5 overflow-hidden">
      <div className="bg-white rounded-2xl max-w-2xl w-full mx-auto my-5 p-8 max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-start mb-6 flex-shrink-0">
          <div className="flex items-center gap-4">
            {icon}
            <div>
              <h2 className="text-2xl font-bold text-patriot-navy">{title}</h2>
              {subtitle && (
                <p className="text-patriot-blue mt-1">{subtitle}</p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}