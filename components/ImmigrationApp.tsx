import { useState } from 'react';
import { OnboardingScreen } from './OnboardingScreen';
import { QuestionnaireFlow } from './QuestionnaireFlow';
import { ResultsScreen } from './ResultsScreen';
import { ProfileSummaryPage } from './ProfileSummaryPage';
import { DocumentPreparationPage } from './DocumentPreparationPage';
import { ApplicationTimelinePage } from './ApplicationTimelinePage';
import { ArrowLeft } from 'lucide-react';

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