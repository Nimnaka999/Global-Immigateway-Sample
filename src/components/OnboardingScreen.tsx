import { Globe, Award, Briefcase, ArrowRight } from 'lucide-react';

interface OnboardingScreenProps {
  onStart: () => void;
}

export function OnboardingScreen({ onStart }: OnboardingScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1628] to-[#1a2d4a] text-white flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] flex items-center justify-center">
            <Globe className="w-7 h-7 text-[#0A1628]" />
          </div>
          <h1 className="text-3xl font-bold">GI Way</h1>
        </div>
        <p className="text-slate-300 text-lg">Your pathway to global opportunities</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-8 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-6 leading-tight">
          Discover Your<br />
          Immigration<br />
          Possibilities
        </h2>
        
        <p className="text-slate-300 text-lg mb-12 max-w-md">
          Answer a few simple questions and we'll match you with the best immigration pathways tailored to your profile.
        </p>

        {/* Features */}
        <div className="space-y-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Personalized Assessment</h3>
              <p className="text-slate-400 text-sm">Get tailored recommendations based on your unique profile</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
              <Globe className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Multiple Countries</h3>
              <p className="text-slate-400 text-sm">Explore pathways to Canada, Australia, UK, and more</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Expert Guidance</h3>
              <p className="text-slate-400 text-sm">Connect with licensed immigration consultants</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="px-6 pb-8">
        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1628] py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
        >
          Start Assessment
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <p className="text-center text-slate-400 text-xs mt-4">
          Takes only 2-3 minutes to complete
        </p>
      </div>
    </div>
  );
}
