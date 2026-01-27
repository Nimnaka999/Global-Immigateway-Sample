import { UserProfile } from './ImmigrationApp';
import { Globe, Calendar, Award, TrendingUp, Phone, RefreshCw } from 'lucide-react';

interface ResultsScreenProps {
  profile: UserProfile;
  onRestart: () => void;
  onContinue?: () => void;
}

type Country = {
  name: string;
  flag: string;
  eligibilityScore: number;
  matchReason: string;
  visaPathways: string[];
  processingTime: string;
  color: string;
};

function calculateEligibility(profile: UserProfile): Country[] {
  const { age, education, workExperience, languageSkills, fieldOfStudy } = profile;
  
  let baseScore = 50;
  
  // Age scoring
  if (age >= 25 && age <= 35) baseScore += 15;
  else if (age >= 18 && age <= 24) baseScore += 10;
  else if (age >= 36 && age <= 45) baseScore += 8;
  
  // Education scoring
  const eduScores: { [key: string]: number } = {
    'phd': 25,
    'masters': 20,
    'bachelors': 15,
    'diploma': 10,
    'high-school': 5,
  };
  baseScore += eduScores[education] || 0;
  
  // Work experience scoring
  baseScore += Math.min(workExperience * 2, 20);
  
  // Language scoring
  const langScores: { [key: string]: number } = {
    'native': 15,
    'advanced': 12,
    'intermediate': 8,
    'basic': 4,
  };
  baseScore += langScores[languageSkills] || 0;
  
  // Field bonus
  const inDemandFields = ['engineering', 'it', 'healthcare'];
  if (inDemandFields.includes(fieldOfStudy)) {
    baseScore += 5;
  }
  
  const canadaScore = Math.min(baseScore + (fieldOfStudy === 'it' ? 8 : 0), 100);
  const australiaScore = Math.min(baseScore + (fieldOfStudy === 'healthcare' ? 10 : 0), 100);
  const germanyScore = Math.min(baseScore + (fieldOfStudy === 'engineering' ? 12 : 0), 100);
  const ukScore = Math.min(baseScore - 5, 100);
  
  return [
    {
      name: 'Canada',
      flag: '🇨🇦',
      eligibilityScore: canadaScore,
      matchReason: 'Strong points-based system match',
      visaPathways: ['Express Entry', 'Provincial Nominee', 'Study Permit'],
      processingTime: '6-12 months',
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      eligibilityScore: australiaScore,
      matchReason: 'High demand for your skills',
      visaPathways: ['Skilled Independent', 'State Sponsored', 'Employer Sponsored'],
      processingTime: '8-14 months',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Germany',
      flag: '🇩🇪',
      eligibilityScore: germanyScore,
      matchReason: 'EU Blue Card eligible',
      visaPathways: ['EU Blue Card', 'Job Seeker Visa', 'Skilled Worker'],
      processingTime: '3-6 months',
      color: 'from-gray-700 to-gray-800',
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      eligibilityScore: ukScore,
      matchReason: 'Global Talent opportunities',
      visaPathways: ['Skilled Worker', 'Global Talent', 'Graduate Route'],
      processingTime: '4-8 months',
      color: 'from-indigo-600 to-indigo-700',
    },
  ].sort((a, b) => b.eligibilityScore - a.eligibilityScore);
}

export function ResultsScreen({ profile, onRestart, onContinue }: ResultsScreenProps) {
  const countries = calculateEligibility(profile);
  const topCountry = countries[0];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0A1628] to-[#1a2d4a] text-white px-6 pt-8 pb-24 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] flex items-center justify-center">
              <Globe className="w-6 h-6 text-[#0A1628]" />
            </div>
            <h1 className="text-xl font-bold">GI Way</h1>
          </div>
          <button
            onClick={onRestart}
            className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
        
        <h2 className="text-2xl font-bold mb-2">Your Results Are Ready!</h2>
        <p className="text-slate-300">Based on your profile, here are your best matches</p>
      </div>

      {/* Main Content */}
      <div className="px-6 -mt-16 pb-8">
        {/* Top Match Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border-2 border-[#D4AF37]">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm font-semibold text-[#D4AF37]">BEST MATCH</span>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{topCountry.flag}</span>
              <div>
                <h3 className="text-2xl font-bold text-[#0A1628]">{topCountry.name}</h3>
                <p className="text-slate-600 text-sm">{topCountry.matchReason}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#D4AF37]">{topCountry.eligibilityScore}%</div>
              <p className="text-xs text-slate-500">Eligibility</p>
            </div>
          </div>

          {/* Score Bar */}
          <div className="mb-4">
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] rounded-full transition-all duration-1000"
                style={{ width: `${topCountry.eligibilityScore}%` }}
              />
            </div>
          </div>

          {/* Visa Pathways */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-2">Available Visa Pathways:</p>
            <div className="flex flex-wrap gap-2">
              {topCountry.visaPathways.map((pathway) => (
                <span
                  key={pathway}
                  className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                >
                  {pathway}
                </span>
              ))}
            </div>
          </div>

          {/* Processing Time */}
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Typical processing: {topCountry.processingTime}</span>
          </div>
        </div>

        {/* Other Countries */}
        <div className="mb-6">
          <h3 className="font-bold text-[#0A1628] mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Other Recommended Countries
          </h3>
          
          <div className="space-y-3">
            {countries.slice(1).map((country) => (
              <div key={country.name} className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{country.flag}</span>
                    <div>
                      <h4 className="font-semibold text-[#0A1628]">{country.name}</h4>
                      <p className="text-slate-500 text-xs">{country.matchReason}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-slate-700">{country.eligibilityScore}%</div>
                  </div>
                </div>
                
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${country.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${country.eligibilityScore}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1628] py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all">
          <Phone className="w-5 h-5" />
          Book Free Consultation
        </button>
        
        <p className="text-center text-slate-500 text-sm mt-3">
          Connect with a licensed immigration consultant to discuss your options
        </p>
      </div>
    </div>
  );
}