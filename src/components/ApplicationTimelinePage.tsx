import { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, Clock, MapPin, Phone, AlertTriangle } from 'lucide-react';

interface ApplicationTimelinePageProps {
  onComplete: () => void;
  onBack: () => void;
  country: string;
}

type TimelineStep = {
  id: string;
  title: string;
  description: string;
  duration: string;
  status: 'completed' | 'current' | 'upcoming';
  tips: string[];
};

const getTimelineSteps = (country: string): TimelineStep[] => {
  return [
    {
      id: '1',
      title: 'Initial Assessment',
      description: 'Complete eligibility questionnaire and receive your personalized immigration score',
      duration: '5-10 minutes',
      status: 'completed',
      tips: ['Ensure all information is accurate', 'Have your documents ready for reference'],
    },
    {
      id: '2',
      title: 'Consultant Match',
      description: 'Get matched with a licensed immigration consultant specialized in your destination',
      duration: '1-2 days',
      status: 'completed',
      tips: ['Check consultant credentials', 'Prepare list of questions'],
    },
    {
      id: '3',
      title: 'Document Preparation',
      description: 'Gather and prepare all required documents for your application',
      duration: '2-4 weeks',
      status: 'current',
      tips: ['Start with passport renewal if needed', 'Request reference letters early', 'Get documents translated if required'],
    },
    {
      id: '4',
      title: 'Application Submission',
      description: 'Submit your complete application through the official immigration portal',
      duration: '1-3 days',
      status: 'upcoming',
      tips: ['Double-check all information', 'Keep copies of everything', 'Pay fees through secure channels'],
    },
    {
      id: '5',
      title: 'Processing & Review',
      description: `Immigration authorities review your application and may request additional information`,
      duration: country === 'Canada' ? '6-12 months' : country === 'Australia' ? '8-14 months' : '4-8 months',
      status: 'upcoming',
      tips: ['Respond promptly to any requests', 'Keep your contact info updated', 'Track your application status'],
    },
    {
      id: '6',
      title: 'Medical & Biometrics',
      description: 'Complete medical examination and provide biometric data as required',
      duration: '2-4 weeks',
      status: 'upcoming',
      tips: ['Book appointments early', 'Bring required ID documents', 'Follow pre-exam instructions'],
    },
    {
      id: '7',
      title: 'Decision & Approval',
      description: 'Receive final decision on your application and next steps',
      duration: '1-2 weeks',
      status: 'upcoming',
      tips: ['Check email and portal regularly', 'Prepare for potential interview', 'Plan your next steps'],
    },
  ];
};

export function ApplicationTimelinePage({ onComplete, onBack, country }: ApplicationTimelinePageProps) {
  const [steps] = useState<TimelineStep[]>(getTimelineSteps(country));
  const [expandedStep, setExpandedStep] = useState<string | null>('3');
  
  const completedCount = steps.filter(s => s.status === 'completed').length;
  const progress = (completedCount / steps.length) * 100;
  const currentStepIndex = steps.findIndex(s => s.status === 'current');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1628] to-[#1a2d4a] text-white flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] flex items-center justify-center">
            <Calendar className="w-7 h-7 text-[#0A1628]" />
          </div>
          <h1 className="text-3xl font-bold">GI Way</h1>
        </div>
        <p className="text-slate-300 text-lg">Your immigration journey timeline</p>
      </div>

      {/* Progress Section */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/15 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-slate-300">
            Step {currentStepIndex + 1} of {steps.length}
          </span>
          <div className="w-10" /> {/* Spacer */}
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-8 overflow-y-auto">
        <h2 className="text-4xl font-bold mb-6 leading-tight">
          Application<br />
          Timeline for {country}
        </h2>
        
        <p className="text-slate-300 text-lg mb-8 max-w-md">
          Track your progress through each step of the immigration process. Estimated total time: 8-14 months
        </p>

        {/* Country Info Banner */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-5 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Immigrating to {country}</h3>
              <p className="text-slate-400 text-sm">
                Timeline based on current processing times for {country}. Actual times may vary based on your specific case.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={step.id}>
              <button
                onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                className={`w-full rounded-xl p-5 transition-all text-left ${
                  step.status === 'completed'
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]'
                    : step.status === 'current'
                    ? 'bg-white/10 border-2 border-[#D4AF37]'
                    : 'bg-white/10 border border-white/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Step Number/Status Icon */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    step.status === 'completed'
                      ? 'bg-[#0A1628]/20'
                      : step.status === 'current'
                      ? 'bg-[#D4AF37]/20'
                      : 'bg-white/10'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5 text-[#0A1628]" />
                    ) : step.status === 'current' ? (
                      <Clock className="w-5 h-5 text-[#D4AF37]" />
                    ) : (
                      <span className={`text-sm font-bold ${
                        step.status === 'upcoming' ? 'text-slate-400' : 'text-white'
                      }`}>
                        {index + 1}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`font-semibold ${
                        step.status === 'completed'
                          ? 'text-[#0A1628]'
                          : 'text-white'
                      }`}>
                        {step.title}
                      </h3>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        step.status === 'completed'
                          ? 'bg-[#0A1628]/20 text-[#0A1628]'
                          : step.status === 'current'
                          ? 'bg-[#D4AF37]/20 text-[#D4AF37]'
                          : 'bg-white/10 text-slate-400'
                      }`}>
                        {step.duration}
                      </span>
                    </div>
                    <p className={`text-sm ${
                      step.status === 'completed'
                        ? 'text-[#0A1628]/70'
                        : 'text-slate-400'
                    }`}>
                      {step.description}
                    </p>

                    {/* Status Badge */}
                    <div className="mt-2">
                      {step.status === 'completed' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A1628]">
                          <CheckCircle className="w-3 h-3" />
                          Completed
                        </span>
                      )}
                      {step.status === 'current' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4AF37]">
                          <Clock className="w-3 h-3" />
                          In Progress
                        </span>
                      )}
                      {step.status === 'upcoming' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
                          Upcoming
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expand Arrow */}
                  <div className={`transform transition-transform ${
                    expandedStep === step.id ? 'rotate-180' : ''
                  }`}>
                    <ArrowRight className={`w-5 h-5 ${
                      step.status === 'completed'
                        ? 'text-[#0A1628]'
                        : 'text-white'
                    }`} />
                  </div>
                </div>
              </button>

              {/* Expanded Tips Section */}
              {expandedStep === step.id && (
                <div className={`mt-2 rounded-xl p-5 ${
                  step.status === 'completed'
                    ? 'bg-white/10 border border-white/20'
                    : step.status === 'current'
                    ? 'bg-white/10 border border-[#D4AF37]/50'
                    : 'bg-white/5 border border-white/10'
                }`}>
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <h4 className="font-semibold text-white">Important Tips</h4>
                  </div>
                  <ul className="space-y-2 ml-8">
                    {step.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-[#D4AF37] mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-5 mt-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Need Personalized Guidance?</h3>
              <p className="text-slate-400 text-sm mb-3">
                Book a consultation with a licensed immigration consultant to get expert help with your application
              </p>
              <button className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg text-sm font-semibold hover:bg-white/15 transition-all">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="px-6 pb-8">
        <button
          onClick={onComplete}
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1628] py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
        >
          {currentStepIndex < steps.length - 1 ? 'Continue to Next Step' : 'View Application Summary'}
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <p className="text-center text-slate-400 text-xs mt-4">
          Track your progress anytime from your dashboard
        </p>
      </div>
    </div>
  );
}
