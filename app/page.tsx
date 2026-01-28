'use client';

import { ModernLandingPage } from '../components/ModernLandingPage';
import { ImmigrationApp } from '../components/ImmigrationApp';
import { EducationApp } from '../components/EducationApp';
import { useState } from 'react';

export type AppView = 'landing' | 'immigration' | 'education';

export default function Home() {
  const [currentView, setCurrentView] = useState<AppView>('landing');

  if (currentView === 'immigration') {
    return <ImmigrationApp onBack={() => setCurrentView('landing')} />;
  }

  if (currentView === 'education') {
    return <EducationApp onBack={() => setCurrentView('landing')} />;
  }

  return <ModernLandingPage onNavigate={setCurrentView} />;
}