import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { UserProfile } from './ImmigrationApp';

interface QuestionnaireFlowProps {
  onComplete: (profile: UserProfile) => void;
}

type QuestionStep = {
  id: keyof UserProfile;
  question: string;
  description: string;
  type: 'number' | 'select';
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
};

const questions: QuestionStep[] = [
  {
    id: 'age',
    question: 'What is your age?',
    description: 'Age is a key factor in immigration eligibility',
    type: 'number',
    min: 18,
    max: 65,
  },
  {
    id: 'education',
    question: 'What is your highest level of education?',
    description: 'Higher education can improve your eligibility',
    type: 'select',
    options: [
      { value: 'high-school', label: 'High School' },
      { value: 'diploma', label: 'Diploma/Certificate' },
      { value: 'bachelors', label: "Bachelor's Degree" },
      { value: 'masters', label: "Master's Degree" },
      { value: 'phd', label: 'PhD/Doctorate' },
    ],
  },
  {
    id: 'fieldOfStudy',
    question: 'What is your field of study?',
    description: 'Some fields are in high demand in certain countries',
    type: 'select',
    options: [
      { value: 'engineering', label: 'Engineering' },
      { value: 'it', label: 'Information Technology' },
      { value: 'healthcare', label: 'Healthcare/Medicine' },
      { value: 'business', label: 'Business/Finance' },
      { value: 'arts', label: 'Arts/Humanities' },
      { value: 'trades', label: 'Skilled Trades' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 'workExperience',
    question: 'How many years of work experience do you have?',
    description: 'Professional experience strengthens your application',
    type: 'number',
    min: 0,
    max: 40,
  },
  {
    id: 'languageSkills',
    question: 'What is your English proficiency level?',
    description: 'Language skills are essential for immigration',
    type: 'select',
    options: [
      { value: 'basic', label: 'Basic (A1-A2)' },
      { value: 'intermediate', label: 'Intermediate (B1-B2)' },
      { value: 'advanced', label: 'Advanced (C1-C2)' },
      { value: 'native', label: 'Native/Fluent' },
    ],
  },
];

export function QuestionnaireFlow({ onComplete }: QuestionnaireFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<UserProfile>>({});

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (value: string | number) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(answers as UserProfile);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isAnswered = answers[currentQuestion.id] !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1628] to-[#1a2d4a] text-white flex flex-col">
      {/* Header with Progress */}
      <div className="px-6 pt-8 pb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-slate-300">
            Question {currentStep + 1} of {questions.length}
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

      {/* Question */}
      <div className="flex-1 px-6 py-8">
        <h2 className="text-3xl font-bold mb-3">{currentQuestion.question}</h2>
        <p className="text-slate-300 mb-8">{currentQuestion.description}</p>

        {/* Answer Input */}
        <div className="space-y-3">
          {currentQuestion.type === 'number' && (
            <div>
              <input
                type="number"
                min={currentQuestion.min}
                max={currentQuestion.max}
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleAnswer(parseInt(e.target.value))}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                placeholder={`Enter ${currentQuestion.id}`}
              />
              <p className="text-slate-400 text-sm mt-2">
                Range: {currentQuestion.min} - {currentQuestion.max}
              </p>
            </div>
          )}

          {currentQuestion.type === 'select' && currentQuestion.options && (
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full px-6 py-4 rounded-xl text-left transition-all ${
                    answers[currentQuestion.id] === option.value
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1628] font-semibold'
                      : 'bg-white/10 border border-white/20 text-white hover:bg-white/15'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Continue Button */}
      <div className="px-6 pb-8">
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1628] py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
        >
          {currentStep < questions.length - 1 ? 'Continue' : 'See Results'}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
