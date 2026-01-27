import { useState } from 'react';
import { motion } from 'framer-motion';
import { OnboardingScreen } from './OnboardingScreen';
import { QuestionnaireFlow } from './QuestionnaireFlow';
import { ResultsScreen } from './ResultsScreen';
import { ProfileSummaryPage } from './ProfileSummaryPage';
import { DocumentPreparationPage } from './DocumentPreparationPage';
import { ApplicationTimelinePage } from './ApplicationTimelinePage';
import { ArrowLeft, Zap, X } from 'lucide-react';

export type UserProfile = {
  age: number;
  education: string;
  workExperience: number;
  languageSkills: string;
  fieldOfStudy: string;
};

interface ImmigrationAppProps {
  onBack: () => void;
}

type Screen = 'onboarding' | 'questionnaire' | 'profile' | 'results' | 'documents' | 'timeline';

export function ImmigrationApp({ onBack }: ImmigrationAppProps) {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [showEligibilityChecker, setShowEligibilityChecker] = useState(false);
  const [age, setAge] = useState("25-35");
  const [education, setEducation] = useState("bachelors");
  const [budget, setBudget] = useState("medium");

  const calculateScore = () => {
    let score = 60;
    if (age === "25-35") score += 15;
    if (education === "masters" || education === "phd")
      score += 15;
    if (budget === "high") score += 10;
    return Math.min(score, 95);
  };

  const handleStartQuestionnaire = () => {
    setCurrentScreen('questionnaire');
  };

  const handleQuestionnaireComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    setCurrentScreen('profile');
  };

  const handleProfileComplete = () => {
    setCurrentScreen('results');
  };

  const handleResultsComplete = () => {
    setCurrentScreen('documents');
  };

  const handleDocumentsComplete = () => {
    setCurrentScreen('timeline');
  };

  const handleRestart = () => {
    setUserProfile(null);
    setCurrentScreen('onboarding');
  };

  const handleBackToResults = () => {
    setCurrentScreen('results');
  };

  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Back to Landing Button - Only show on onboarding */}
      {currentScreen === 'onboarding' && (
        <button
          onClick={onBack}
          className="absolute top-4 left-4 z-50 bg-white/90 backdrop-blur-sm text-slate-700 px-4 py-2 rounded-lg font-semibold hover:bg-white transition-all flex items-center gap-2 shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      )}

      {/* Eligibility Checker Button */}
      {currentScreen !== 'onboarding' && (
        <button
          onClick={() => setShowEligibilityChecker(true)}
          className="absolute top-4 right-4 z-50 bg-white/90 backdrop-blur-sm text-slate-700 px-4 py-2 rounded-lg font-semibold hover:bg-white transition-all flex items-center gap-2 shadow-md"
        >
          <Zap className="w-4 h-4" />
          Check Eligibility
        </button>
      )}

      {/* Eligibility Checker Modal */}
      {showEligibilityChecker && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowEligibilityChecker(false)}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 p-6 border-b border-amber-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-6 h-6 text-amber-600" />
                    <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">
                      Live Eligibility Checker
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Get Your Instant Score
                  </h2>
                  <p className="mt-2 text-slate-600">
                    Answer three quick questions to see your immigration eligibility
                  </p>
                </div>
                <button
                  onClick={() => setShowEligibilityChecker(false)}
                  className="text-slate-500 hover:text-slate-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-bold mb-3 text-slate-700">
                    Your Age
                  </label>
                  <select
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-900 focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="18-24">18-24 years</option>
                    <option value="25-35">25-35 years</option>
                    <option value="36-45">36-45 years</option>
                    <option value="46+">46+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-slate-700">
                    Education Level
                  </label>
                  <select
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-900 focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="high-school">High School</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">PhD/Doctorate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-slate-700">
                    Budget Range
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-900 focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="low">Under $10,000</option>
                    <option value="medium">$10,000 - $25,000</option>
                    <option value="high">$25,000+</option>
                  </select>
                </div>
              </div>

              {/* Score Display */}
              <motion.div
                className="rounded-2xl p-8 text-center bg-gradient-to-br from-slate-900 to-blue-900"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-4">
                  Your Eligibility Score
                </p>
                <motion.div
                  className="text-6xl md:text-7xl font-bold text-white mb-4"
                  key={calculateScore()}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {calculateScore()}%
                </motion.div>
                <p className="text-slate-300 text-lg mb-6">
                  {calculateScore() >= 80 
                    ? 'Excellent! You qualify for multiple immigration options.' 
                    : calculateScore() >= 60 
                    ? 'Good! You qualify for several immigration options.' 
                    : 'Fair! Let\'s explore your options together.'}
                </p>

                <motion.button
                  onClick={() => setShowEligibilityChecker(false)}
                  className="px-8 py-4 rounded-xl font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-orange-500 hover:shadow-2xl hover:shadow-amber-500/50 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {currentScreen === 'onboarding' && (
        <OnboardingScreen onStart={handleStartQuestionnaire} />
      )}
      
      {currentScreen === 'questionnaire' && (
        <QuestionnaireFlow onComplete={handleQuestionnaireComplete} />
      )}
      
      {currentScreen === 'profile' && userProfile && (
        <ProfileSummaryPage 
          profile={userProfile} 
          onComplete={handleProfileComplete}
          onBack={() => setCurrentScreen('questionnaire')}
        />
      )}
      
      {currentScreen === 'results' && userProfile && (
        <ResultsScreen 
          profile={userProfile} 
          onRestart={handleRestart}
          onContinue={handleResultsComplete}
        />
      )}
      
      {currentScreen === 'documents' && (
        <DocumentPreparationPage 
          onComplete={handleDocumentsComplete}
          onBack={handleBackToResults}
        />
      )}
      
      {currentScreen === 'timeline' && (
        <ApplicationTimelinePage 
          country="Canada"
          onComplete={() => setCurrentScreen('onboarding')}
          onBack={() => setCurrentScreen('documents')}
        />
      )}
    </div>
  );
}

export default ImmigrationApp;