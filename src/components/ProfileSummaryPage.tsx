import { useState } from 'react';
import { ArrowLeft, ArrowRight, User, Award, Briefcase, Globe, Languages, GraduationCap, Edit2, Save, X } from 'lucide-react';

interface ProfileSummaryPageProps {
  profile: {
    age: number;
    education: string;
    workExperience: number;
    languageSkills: string;
    fieldOfStudy: string;
  };
  onComplete: () => void;
  onBack: () => void;
}

type ProfileSection = {
  id: string;
  icon: any;
  title: string;
  value: string;
  description: string;
  editable: boolean;
};

export function ProfileSummaryPage({ profile, onComplete, onBack }: ProfileSummaryPageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  const educationLabels: { [key: string]: string } = {
    'high-school': 'High School',
    'diploma': 'Diploma/Certificate',
    'bachelors': "Bachelor's Degree",
    'masters': "Master's Degree",
    'phd': 'PhD/Doctorate',
  };

  const languageLabels: { [key: string]: string } = {
    'basic': 'Basic (A1-A2)',
    'intermediate': 'Intermediate (B1-B2)',
    'advanced': 'Advanced (C1-C2)',
    'native': 'Native/Fluent',
  };

  const fieldLabels: { [key: string]: string } = {
    'engineering': 'Engineering',
    'it': 'Information Technology',
    'healthcare': 'Healthcare/Medicine',
    'business': 'Business/Finance',
    'arts': 'Arts/Humanities',
    'trades': 'Skilled Trades',
    'other': 'Other',
  };

  const profileSections: ProfileSection[] = [
    {
      id: 'age',
      icon: User,
      title: 'Age',
      value: `${profile.age} years old`,
      description: 'Optimal age range for most immigration programs',
      editable: true,
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Education Level',
      value: educationLabels[profile.education] || profile.education,
      description: 'Highest level of education completed',
      editable: true,
    },
    {
      id: 'fieldOfStudy',
      icon: Award,
      title: 'Field of Study',
      value: fieldLabels[profile.fieldOfStudy] || profile.fieldOfStudy,
      description: 'Academic and professional specialization',
      editable: true,
    },
    {
      id: 'workExperience',
      icon: Briefcase,
      title: 'Work Experience',
      value: `${profile.workExperience} years`,
      description: 'Professional experience in your field',
      editable: true,
    },
    {
      id: 'languageSkills',
      icon: Languages,
      title: 'Language Proficiency',
      value: languageLabels[profile.languageSkills] || profile.languageSkills,
      description: 'English language proficiency level',
      editable: true,
    },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, this would update the profile
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1628] to-[#1a2d4a] text-white flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] flex items-center justify-center">
            <User className="w-7 h-7 text-[#0A1628]" />
          </div>
          <h1 className="text-3xl font-bold">GI Way</h1>
        </div>
        <p className="text-slate-300 text-lg">Your profile summary</p>
      </div>

      {/* Header Actions */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/15 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg text-sm font-semibold hover:bg-white/15 transition-all flex items-center gap-2"
            >
              <Edit2 className="w-4 h-4" />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg text-sm font-semibold hover:bg-white/15 transition-all flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1628] rounded-lg text-sm font-semibold hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-8">
        <h2 className="text-4xl font-bold mb-6 leading-tight">
          Your<br />
          Immigration<br />
          Profile
        </h2>
        
        <p className="text-slate-300 text-lg mb-12 max-w-md">
          Review your information below. This profile will be used to match you with the best immigration pathways.
        </p>

        {/* Profile Sections */}
        <div className="space-y-4 mb-12">
          {profileSections.map((section) => (
            <div
              key={section.id}
              className="bg-white/10 border border-white/20 rounded-xl p-5 transition-all hover:bg-white/15"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{section.title}</h3>
                  
                  {!isEditing ? (
                    <>
                      <p className="text-slate-300 text-lg mb-1">{section.value}</p>
                      <p className="text-slate-400 text-sm">{section.description}</p>
                    </>
                  ) : (
                    <>
                      {section.id === 'age' && (
                        <input
                          type="number"
                          value={editedProfile.age}
                          onChange={(e) => setEditedProfile({ ...editedProfile, age: parseInt(e.target.value) })}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent mb-2"
                          min="18"
                          max="65"
                        />
                      )}
                      
                      {section.id === 'education' && (
                        <select
                          value={editedProfile.education}
                          onChange={(e) => setEditedProfile({ ...editedProfile, education: e.target.value })}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent mb-2"
                        >
                          <option value="high-school">High School</option>
                          <option value="diploma">Diploma/Certificate</option>
                          <option value="bachelors">Bachelor's Degree</option>
                          <option value="masters">Master's Degree</option>
                          <option value="phd">PhD/Doctorate</option>
                        </select>
                      )}
                      
                      {section.id === 'fieldOfStudy' && (
                        <select
                          value={editedProfile.fieldOfStudy}
                          onChange={(e) => setEditedProfile({ ...editedProfile, fieldOfStudy: e.target.value })}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent mb-2"
                        >
                          <option value="engineering">Engineering</option>
                          <option value="it">Information Technology</option>
                          <option value="healthcare">Healthcare/Medicine</option>
                          <option value="business">Business/Finance</option>
                          <option value="arts">Arts/Humanities</option>
                          <option value="trades">Skilled Trades</option>
                          <option value="other">Other</option>
                        </select>
                      )}
                      
                      {section.id === 'workExperience' && (
                        <input
                          type="number"
                          value={editedProfile.workExperience}
                          onChange={(e) => setEditedProfile({ ...editedProfile, workExperience: parseInt(e.target.value) })}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent mb-2"
                          min="0"
                          max="40"
                        />
                      )}
                      
                      {section.id === 'languageSkills' && (
                        <select
                          value={editedProfile.languageSkills}
                          onChange={(e) => setEditedProfile({ ...editedProfile, languageSkills: e.target.value })}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent mb-2"
                        >
                          <option value="basic">Basic (A1-A2)</option>
                          <option value="intermediate">Intermediate (B1-B2)</option>
                          <option value="advanced">Advanced (C1-C2)</option>
                          <option value="native">Native/Fluent</option>
                        </select>
                      )}
                      
                      <p className="text-slate-400 text-sm">{section.description}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Profile Completeness */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
              <Globe className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Profile Completeness</h3>
              <p className="text-slate-400 text-sm mb-4">
                Your profile is 100% complete and ready for assessment
              </p>
              
              {/* Progress Bar */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] transition-all duration-300"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 space-y-4">
          <h3 className="font-semibold text-slate-300">Tips to Improve Your Score</h3>
          
          <div className="bg-white/10 border border-white/20 rounded-xl p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Improve Language Skills</h4>
                <p className="text-slate-400 text-sm">
                  Taking an IELTS or TOEFL test can significantly boost your immigration score
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-xl p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Gain More Experience</h4>
                <p className="text-slate-400 text-sm">
                  Additional years of work experience in your field can increase eligibility
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-xl p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Further Education</h4>
                <p className="text-slate-400 text-sm">
                  Consider pursuing a Master's degree to enhance your profile
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="px-6 pb-8">
        <button
          onClick={onComplete}
          disabled={isEditing}
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1628] py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
        >
          Continue to Results
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <p className="text-center text-slate-400 text-xs mt-4">
          {isEditing ? 'Save your changes to continue' : 'Your information is secure and confidential'}
        </p>
      </div>
    </div>
  );
}
