import { useState } from 'react';
import { ArrowLeft, Search, Filter, DollarSign, Calendar, Award, MapPin, CheckCircle, BookOpen, Users, TrendingUp, X, Phone } from 'lucide-react';
import { ApplicationPage } from './ApplicationPage';

interface EducationAppProps {
  onBack: () => void;
}

type Program = {
  id: string;
  university: string;
  program: string;
  degree: string;
  duration: string;
  tuition: string;
  intake: string;
  location: string;
  accreditation: string[];
  description: string;
};

const programs: Program[] = [
  {
    id: '1',
    university: 'University of Colombo',
    program: 'Bachelor of Computer Science',
    degree: 'BSc',
    duration: '4 years',
    tuition: 'LKR 450,000/year',
    intake: 'January 2026',
    location: 'Colombo 03',
    accreditation: ['UGC Approved', 'SLQF Level 6'],
    description: 'Comprehensive computer science program with AI and cybersecurity specializations',
  },
  {
    id: '2',
    university: 'SLIIT',
    program: 'BSc (Hons) in Information Technology',
    degree: 'BSc Hons',
    duration: '4 years',
    tuition: 'LKR 625,000/year',
    intake: 'March 2026',
    location: 'Malabe',
    accreditation: ['UGC Approved', 'BCS Accredited'],
    description: 'Industry-focused IT degree with international collaboration and internship opportunities',
  },
  {
    id: '3',
    university: 'University of Moratuwa',
    program: 'Bachelor of Engineering (Hons)',
    degree: 'BEng Hons',
    duration: '4 years',
    tuition: 'LKR 380,000/year',
    intake: 'September 2026',
    location: 'Moratuwa',
    accreditation: ['UGC Approved', 'IET Accredited'],
    description: 'Premier engineering program with specializations in Civil, Electrical, and Mechanical',
  },
  {
    id: '4',
    university: 'NSBM Green University',
    program: 'BBA (Hons) in Business Management',
    degree: 'BBA Hons',
    duration: '3 years',
    tuition: 'LKR 720,000/year',
    intake: 'January 2026',
    location: 'Homagama',
    accreditation: ['Plymouth UK', 'AACSB Pathway'],
    description: 'International business degree with UK top-up pathway and industry placements',
  },
  {
    id: '5',
    university: 'University of Kelaniya',
    program: 'BSc (Hons) in Nursing',
    degree: 'BSc Hons',
    duration: '4 years',
    tuition: 'LKR 290,000/year',
    intake: 'July 2026',
    location: 'Ragama',
    accreditation: ['UGC Approved', 'SLNC Registered'],
    description: 'Professional nursing program with clinical training at leading hospitals',
  },
  {
    id: '6',
    university: 'IIT Campus',
    program: 'BSc (Hons) Software Engineering',
    degree: 'BSc Hons',
    duration: '3 years',
    tuition: 'LKR 850,000/year',
    intake: 'February 2026',
    location: 'Colombo 06',
    accreditation: ['Westminster UK', 'BCS Accredited'],
    description: 'UK degree program with cutting-edge software development curriculum',
  },
];

export function EducationApp({ onBack }: EducationAppProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [budgetFilter, setBudgetFilter] = useState<string>('all');
  const [degreeFilter, setDegreeFilter] = useState<string>('all');
  const [intakeFilter, setIntakeFilter] = useState<string>('all');
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [showApplicationPage, setShowApplicationPage] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const toggleCompare = (programId: string) => {
    if (compareList.includes(programId)) {
      setCompareList(compareList.filter(id => id !== programId));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, programId]);
    }
  };

  const handleApplyNow = (program: Program) => {
    setSelectedProgram(program);
    setShowApplicationPage(true);
  };

  // If showing application page, render it instead
  if (showApplicationPage && selectedProgram) {
    return (
      <ApplicationPage
        onBack={() => setShowApplicationPage(false)}
        program={selectedProgram}
      />
    );
  }

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.program.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.university.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesBudget = budgetFilter === 'all' ||
                         (budgetFilter === 'low' && parseInt(program.tuition.replace(/\D/g, '')) < 500000) ||
                         (budgetFilter === 'medium' && parseInt(program.tuition.replace(/\D/g, '')) >= 500000 && parseInt(program.tuition.replace(/\D/g, '')) < 700000) ||
                         (budgetFilter === 'high' && parseInt(program.tuition.replace(/\D/g, '')) >= 700000);
    
    const matchesDegree = degreeFilter === 'all' || program.degree.includes(degreeFilter);
    const matchesIntake = intakeFilter === 'all' || program.intake.includes(intakeFilter);
    
    return matchesSearch && matchesBudget && matchesDegree && matchesIntake;
  });

  const comparePrograms = programs.filter(p => compareList.includes(p.id));

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#047857] to-[#059669] text-white px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Education Selection</h1>
                <p className="text-xs text-emerald-100">Sri Lanka Universities</p>
              </div>
            </div>

            <button
              onClick={() => setShowLeadForm(true)}
              className="bg-white text-[#047857] px-4 py-2 rounded-lg font-semibold hover:bg-slate-100 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Get Counseling
            </button>
          </div>

          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Discover Your Perfect Degree</h2>
            <p className="text-emerald-100">Browse 250+ programs from leading universities in Sri Lanka</p>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by program or university name..."
              className="w-full pl-12 pr-4 py-4 rounded-xl text-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="w-5 h-5 text-slate-600 flex-shrink-0" />
            
            {/* Budget Filter */}
            <select
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
              className="px-4 py-2 border-2 border-slate-200 rounded-lg text-sm focus:border-[#047857] focus:outline-none bg-white"
            >
              <option value="all">All Budgets</option>
              <option value="low">Under 500K/year</option>
              <option value="medium">500K - 700K/year</option>
              <option value="high">Above 700K/year</option>
            </select>

            {/* Degree Level Filter */}
            <select
              value={degreeFilter}
              onChange={(e) => setDegreeFilter(e.target.value)}
              className="px-4 py-2 border-2 border-slate-200 rounded-lg text-sm focus:border-[#047857] focus:outline-none bg-white"
            >
              <option value="all">All Degrees</option>
              <option value="BSc">BSc</option>
              <option value="BEng">BEng</option>
              <option value="BBA">BBA</option>
              <option value="Hons">Honours</option>
            </select>

            {/* Intake Filter */}
            <select
              value={intakeFilter}
              onChange={(e) => setIntakeFilter(e.target.value)}
              className="px-4 py-2 border-2 border-slate-200 rounded-lg text-sm focus:border-[#047857] focus:outline-none bg-white"
            >
              <option value="all">All Intakes</option>
              <option value="January">January 2026</option>
              <option value="February">February 2026</option>
              <option value="March">March 2026</option>
              <option value="July">July 2026</option>
              <option value="September">September 2026</option>
            </select>

            {compareList.length > 0 && (
              <button
                onClick={() => setShowCompare(true)}
                className="ml-auto px-4 py-2 bg-[#047857] text-white rounded-lg text-sm font-semibold hover:bg-[#059669] transition-all flex items-center gap-2"
              >
                Compare ({compareList.length})
                <TrendingUp className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Program Cards */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-4 text-sm text-slate-600">
          Showing {filteredPrograms.length} programs
        </div>

        <div className="grid gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border-2 border-slate-100 hover:border-[#047857]"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left Side - Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#0A1628] mb-1">{program.program}</h3>
                      <p className="text-slate-600 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {program.university} • {program.location}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-[#047857]/10 text-[#047857] rounded-full text-sm font-semibold">
                      {program.degree}
                    </span>
                  </div>

                  <p className="text-slate-600 mb-4">{program.description}</p>

                  {/* Accreditation Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.accreditation.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium flex items-center gap-1"
                      >
                        <CheckCircle className="w-3 h-3 text-[#047857]" />
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <div>
                        <p className="text-xs text-slate-500">Duration</p>
                        <p className="font-semibold text-slate-700">{program.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-slate-500" />
                      <div>
                        <p className="text-xs text-slate-500">Tuition</p>
                        <p className="font-semibold text-slate-700">{program.tuition}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-slate-500" />
                      <div>
                        <p className="text-xs text-slate-500">Next Intake</p>
                        <p className="font-semibold text-slate-700">{program.intake}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Actions */}
                <div className="flex flex-col gap-3 md:w-48">
                  <button
                    onClick={() => handleApplyNow(program)}
                    className="w-full bg-gradient-to-r from-[#047857] to-[#059669] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Apply Now
                  </button>
                  <button
                    onClick={() => toggleCompare(program.id)}
                    className={`w-full py-3 rounded-lg font-semibold border-2 transition-all ${
                      compareList.includes(program.id)
                        ? 'bg-[#047857] text-white border-[#047857]'
                        : 'bg-white text-[#047857] border-[#047857] hover:bg-[#047857]/5'
                    }`}
                  >
                    {compareList.includes(program.id) ? 'Added to Compare' : 'Add to Compare'}
                  </button>
                  <button className="w-full bg-white text-slate-700 py-3 rounded-lg font-semibold border-2 border-slate-200 hover:border-slate-300 transition-all">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compare Modal */}
      {showCompare && comparePrograms.length > 0 && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#0A1628]">Compare Programs</h3>
              <button
                onClick={() => setShowCompare(false)}
                className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {comparePrograms.map((program) => (
                  <div key={program.id} className="border-2 border-slate-200 rounded-xl p-4">
                    <h4 className="font-bold text-[#0A1628] mb-2">{program.program}</h4>
                    <p className="text-sm text-slate-600 mb-4">{program.university}</p>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-slate-500">Degree Type</p>
                        <p className="font-semibold">{program.degree}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Duration</p>
                        <p className="font-semibold">{program.duration}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Tuition</p>
                        <p className="font-semibold text-[#047857]">{program.tuition}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Intake</p>
                        <p className="font-semibold">{program.intake}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Accreditation</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {program.accreditation.map((badge) => (
                            <span key={badge} className="px-2 py-1 bg-slate-100 rounded text-xs">
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lead Capture Form */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="bg-gradient-to-br from-[#047857] to-[#059669] text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
              <h3 className="text-xl font-bold">Request Academic Counseling</h3>
              <button
                onClick={() => setShowLeadForm(false)}
                className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-slate-600 mb-6">
                Connect with our education counselors to find the perfect program for your goals
              </p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#047857] focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#047857] focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#047857] focus:outline-none"
                    placeholder="+94 XX XXX XXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Field of Study</label>
                  <select className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#047857] focus:outline-none">
                    <option>Computer Science / IT</option>
                    <option>Engineering</option>
                    <option>Business Management</option>
                    <option>Healthcare / Nursing</option>
                    <option>Arts & Humanities</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#047857] to-[#059669] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EducationApp;