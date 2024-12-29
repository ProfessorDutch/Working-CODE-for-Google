import React from 'react';

export default function GoogleSignIn({ 
  onSuccess,
  businessName 
}: { 
  onSuccess: () => void;
  businessName: string;
}) {
  const handleGoogleSignIn = () => {
    // Google OAuth implementation would go here
    // For now, just simulate success
    onSuccess();
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-full flex items-center justify-center gap-3 p-3 border-2 border-gray-200 rounded-lg hover:border-patriot-red hover:bg-patriot-cream transition-colors"
    >
      <img 
        src="https://www.google.com/favicon.ico" 
        alt="Google" 
        className="w-5 h-5"
      />
      <span>Continue with Google</span>
    </button>
  );
}