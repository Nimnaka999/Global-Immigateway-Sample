import { useState } from 'react';
import { 
  ArrowLeft, User, GraduationCap, FileText, Upload, CheckCircle, 
  Mail, Phone, MapPin, Calendar, Book, Award, CreditCard, Clock,
  FileCheck, AlertCircle, ChevronRight, Home, School, Briefcase,
  DollarSign, X
} from 'lucide-react';

interface ApplicationPageProps {
  onBack: () => void;
  program?: {
    university: string;
    program: string;
    degree: string;
    tuition: string;
    intake: string;
  };
}

type ApplicationStep = 'personal' | 'academic' | 'documents' | 'payment' | 'review';

type ApplicationSection = {
  id: ApplicationStep;
  title: string;
  icon: any;
  description: string;
};

export function ApplicationPage({ onBack, program }: ApplicationPageProps) {
  const [currentStep, setCurrentStep] = useState<ApplicationStep>('personal');
  const [completedSteps, setCompletedSteps] = useState<ApplicationStep[]>([]);

  // Form state
  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    nic: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const [academicData, setAcademicData] = useState({
    highSchool: '',
    olYear: '',
    olResults: '',
    alYear: '',
    alStream: '',
    alResults: '',
    previousDegree: '',
    previousUniversity: '',
    previousGPA: ''
  });

  const [uploadedDocs, setUploadedDocs] = useState<string[]>([]);

  const applicationSections: ApplicationSection[] = [
    {
      id: 'personal',
      title: 'Personal Information',
      icon: User,
      description: 'Basic details and contact information'
    },
    {
      id: 'academic',
      title: 'Academic Background',
      icon: GraduationCap,
      description: 'Educational qualifications'
    },
    {
      id: 'documents',
      title: 'Document Upload',
      icon: Upload,
      description: 'Required certificates and documents'
    },
    {
      id: 'payment',
      title: 'Application Fee',
      icon: CreditCard,
      description: 'Payment and fee details'
    },
    {
      id: 'review',
      title: 'Review & Submit',
      icon: CheckCircle,
      description: 'Review your application'
    }
  ];

  const requiredDocuments = [
    { id: 'birth-cert', name: 'Birth Certificate', type: 'required' },
    { id: 'nic', name: 'National ID Copy', type: 'required' },
    { id: 'ol-cert', name: 'O/L Certificate', type: 'required' },
    { id: 'al-cert', name: 'A/L Certificate', type: 'required' },
    { id: 'photos', name: 'Passport Size Photos (2)', type: 'required' },
    { id: 'degree', name: 'Previous Degree (if any)', type: 'optional' },
    { id: 'transcript', name: 'Academic Transcript', type: 'optional' }
  ];

  const handleStepClick = (step: ApplicationStep) => {
    setCurrentStep(step);
  };

  const handleNext = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }

    const currentIndex = applicationSections.findIndex(s => s.id === currentStep);
    if (currentIndex < applicationSections.length - 1) {
      setCurrentStep(applicationSections[currentIndex + 1].id);
    }
  };

  const handleDocumentUpload = (docId: string) => {
    if (!uploadedDocs.includes(docId)) {
      setUploadedDocs([...uploadedDocs, docId]);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'personal':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Personal Information</h3>
              <p className="text-slate-600">Please provide your accurate personal details</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  value={personalData.firstName}
                  onChange={(e) => setPersonalData({...personalData, firstName: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter first name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  value={personalData.lastName}
                  onChange={(e) => setPersonalData({...personalData, lastName: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter last name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={personalData.email}
                    onChange={(e) => setPersonalData({...personalData, email: e.target.value})}
                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    value={personalData.phone}
                    onChange={(e) => setPersonalData({...personalData, phone: e.target.value})}
                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="+94 71 234 5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Date of Birth *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="date"
                    value={personalData.dateOfBirth}
                    onChange={(e) => setPersonalData({...personalData, dateOfBirth: e.target.value})}
                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Gender *
                </label>
                <select
                  value={personalData.gender}
                  onChange={(e) => setPersonalData({...personalData, gender: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  NIC Number *
                </label>
                <input
                  type="text"
                  value={personalData.nic}
                  onChange={(e) => setPersonalData({...personalData, nic: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter NIC number"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Address *
                </label>
                <div className="relative">
                  <Home className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={personalData.address}
                    onChange={(e) => setPersonalData({...personalData, address: e.target.value})}
                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Street address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  City *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={personalData.city}
                    onChange={(e) => setPersonalData({...personalData, city: e.target.value})}
                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="City"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Postal Code *
                </label>
                <input
                  type="text"
                  value={personalData.postalCode}
                  onChange={(e) => setPersonalData({...personalData, postalCode: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Postal code"
                />
              </div>
            </div>
          </div>
        );

      case 'academic':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Academic Background</h3>
              <p className="text-slate-600">Provide your educational qualifications</p>
            </div>

            {/* O/L Details */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <School className="w-5 h-5 text-blue-600" />
                <h4 className="font-bold text-blue-900">O/L (Ordinary Level)</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    School Name *
                  </label>
                  <input
                    type="text"
                    value={academicData.highSchool}
                    onChange={(e) => setAcademicData({...academicData, highSchool: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter school name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Year of Completion *
                  </label>
                  <input
                    type="text"
                    value={academicData.olYear}
                    onChange={(e) => setAcademicData({...academicData, olYear: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="2020"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Results Summary *
                  </label>
                  <input
                    type="text"
                    value={academicData.olResults}
                    onChange={(e) => setAcademicData({...academicData, olResults: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 9 A's"
                  />
                </div>
              </div>
            </div>

            {/* A/L Details */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Book className="w-5 h-5 text-purple-600" />
                <h4 className="font-bold text-purple-900">A/L (Advanced Level)</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Year of Completion *
                  </label>
                  <input
                    type="text"
                    value={academicData.alYear}
                    onChange={(e) => setAcademicData({...academicData, alYear: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="2022"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Stream *
                  </label>
                  <select
                    value={academicData.alStream}
                    onChange={(e) => setAcademicData({...academicData, alStream: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select stream</option>
                    <option value="physical">Physical Science</option>
                    <option value="biological">Biological Science</option>
                    <option value="commerce">Commerce</option>
                    <option value="arts">Arts</option>
                    <option value="technology">Technology</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Results Summary *
                  </label>
                  <input
                    type="text"
                    value={academicData.alResults}
                    onChange={(e) => setAcademicData({...academicData, alResults: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="e.g., 3 A's"
                  />
                </div>
              </div>
            </div>

            {/* Previous Degree (Optional) */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-amber-600" />
                <h4 className="font-bold text-amber-900">Previous Higher Education (Optional)</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Degree/Diploma
                  </label>
                  <input
                    type="text"
                    value={academicData.previousDegree}
                    onChange={(e) => setAcademicData({...academicData, previousDegree: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="e.g., BSc in Computer Science"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    University/Institution
                  </label>
                  <input
                    type="text"
                    value={academicData.previousUniversity}
                    onChange={(e) => setAcademicData({...academicData, previousUniversity: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Institution name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    GPA/Class
                  </label>
                  <input
                    type="text"
                    value={academicData.previousGPA}
                    onChange={(e) => setAcademicData({...academicData, previousGPA: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="e.g., 3.5/4.0"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'documents':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Document Upload</h3>
              <p className="text-slate-600">Upload all required documents (PDF or Image format)</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-1">Important Guidelines:</p>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>All documents must be clear and legible</li>
                  <li>File size should not exceed 5MB per document</li>
                  <li>Accepted formats: PDF, JPG, PNG</li>
                  <li>Ensure all pages are included for multi-page documents</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              {requiredDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className={`border rounded-xl p-5 transition-all ${
                    uploadedDocs.includes(doc.id)
                      ? 'bg-emerald-50 border-emerald-300'
                      : 'bg-white border-slate-200 hover:border-emerald-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        uploadedDocs.includes(doc.id)
                          ? 'bg-emerald-500'
                          : 'bg-slate-200'
                      }`}>
                        {uploadedDocs.includes(doc.id) ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : (
                          <FileText className="w-6 h-6 text-slate-500" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                          {doc.name}
                          {doc.type === 'required' && (
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                              Required
                            </span>
                          )}
                          {doc.type === 'optional' && (
                            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                              Optional
                            </span>
                          )}
                        </h4>
                        {uploadedDocs.includes(doc.id) && (
                          <p className="text-sm text-emerald-600 mt-1">✓ Document uploaded successfully</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {uploadedDocs.includes(doc.id) ? (
                        <>
                          <button className="px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-100 rounded-lg transition-colors">
                            View
                          </button>
                          <button 
                            onClick={() => setUploadedDocs(uploadedDocs.filter(id => id !== doc.id))}
                            className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => handleDocumentUpload(doc.id)}
                          className="px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
                        >
                          <Upload className="w-4 h-4" />
                          Upload
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-100 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-slate-700" />
                <div>
                  <p className="font-semibold text-slate-900">Upload Progress</p>
                  <p className="text-sm text-slate-600">
                    {uploadedDocs.length} of {requiredDocuments.filter(d => d.type === 'required').length} required documents uploaded
                  </p>
                </div>
              </div>
              <div className="text-2xl font-bold text-emerald-600">
                {Math.round((uploadedDocs.length / requiredDocuments.filter(d => d.type === 'required').length) * 100)}%
              </div>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Fee Payment</h3>
              <p className="text-slate-600">Complete your application by paying the processing fee</p>
            </div>

            {/* Fee Breakdown */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6">
              <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Fee Breakdown
              </h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Application Processing Fee</span>
                  <span className="font-semibold text-slate-900">LKR 5,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Document Verification Fee</span>
                  <span className="font-semibold text-slate-900">LKR 2,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Service Tax (5%)</span>
                  <span className="font-semibold text-slate-900">LKR 350</span>
                </div>
                <div className="border-t border-emerald-300 pt-3 mt-3 flex justify-between items-center">
                  <span className="font-bold text-lg text-slate-900">Total Amount</span>
                  <span className="font-bold text-2xl text-emerald-600">LKR 7,350</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Select Payment Method</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, popular: true },
                  { id: 'bank', name: 'Bank Transfer', icon: Briefcase, popular: false },
                  { id: 'mobile', name: 'Mobile Payment', icon: Phone, popular: true },
                  { id: 'cash', name: 'Pay at Campus', icon: Home, popular: false }
                ].map((method) => (
                  <div
                    key={method.id}
                    className="relative border-2 border-slate-200 rounded-xl p-4 hover:border-emerald-500 cursor-pointer transition-all group"
                  >
                    {method.popular && (
                      <span className="absolute -top-2 right-4 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 group-hover:bg-emerald-100 flex items-center justify-center transition-colors">
                        <method.icon className="w-6 h-6 text-slate-600 group-hover:text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{method.name}</p>
                        <p className="text-xs text-slate-600">Secure payment</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Form */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-4">Card Information</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-1">Secure Payment</p>
                <p className="text-blue-800">Your payment information is encrypted and secure. We never store your card details.</p>
              </div>
            </div>
          </div>
        );

      case 'review':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Review Your Application</h3>
              <p className="text-slate-600">Please review all information before submitting</p>
            </div>

            {/* Program Details */}
            {program && (
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6">
                <h4 className="font-bold text-emerald-900 mb-4">Selected Program</h4>
                <div className="space-y-2">
                  <p className="text-lg font-bold text-slate-900">{program.program}</p>
                  <p className="text-slate-700">{program.university}</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <span className="px-3 py-1 bg-white rounded-lg text-sm font-semibold text-slate-700">
                      {program.degree}
                    </span>
                    <span className="px-3 py-1 bg-white rounded-lg text-sm font-semibold text-slate-700">
                      {program.tuition}
                    </span>
                    <span className="px-3 py-1 bg-white rounded-lg text-sm font-semibold text-slate-700">
                      Intake: {program.intake}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Personal Info Summary */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </h4>
                <button
                  onClick={() => setCurrentStep('personal')}
                  className="text-sm text-emerald-600 font-semibold hover:text-emerald-700"
                >
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-600">Full Name</p>
                  <p className="font-semibold text-slate-900">{personalData.firstName} {personalData.lastName}</p>
                </div>
                <div>
                  <p className="text-slate-600">Email</p>
                  <p className="font-semibold text-slate-900">{personalData.email}</p>
                </div>
                <div>
                  <p className="text-slate-600">Phone</p>
                  <p className="font-semibold text-slate-900">{personalData.phone}</p>
                </div>
                <div>
                  <p className="text-slate-600">NIC</p>
                  <p className="font-semibold text-slate-900">{personalData.nic}</p>
                </div>
              </div>
            </div>

            {/* Academic Info Summary */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Academic Background
                </h4>
                <button
                  onClick={() => setCurrentStep('academic')}
                  className="text-sm text-emerald-600 font-semibold hover:text-emerald-700"
                >
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-600">O/L Results</p>
                  <p className="font-semibold text-slate-900">{academicData.olResults} ({academicData.olYear})</p>
                </div>
                <div>
                  <p className="text-slate-600">A/L Stream</p>
                  <p className="font-semibold text-slate-900">{academicData.alStream}</p>
                </div>
                <div>
                  <p className="text-slate-600">A/L Results</p>
                  <p className="font-semibold text-slate-900">{academicData.alResults} ({academicData.alYear})</p>
                </div>
              </div>
            </div>

            {/* Documents Summary */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <FileCheck className="w-5 h-5" />
                  Uploaded Documents
                </h4>
                <button
                  onClick={() => setCurrentStep('documents')}
                  className="text-sm text-emerald-600 font-semibold hover:text-emerald-700"
                >
                  Edit
                </button>
              </div>
              <div className="space-y-2">
                {uploadedDocs.map((docId) => {
                  const doc = requiredDocuments.find(d => d.id === docId);
                  return (
                    <div key={docId} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm text-slate-700">{doc?.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <div className="text-sm text-slate-700">
                  <p className="font-semibold text-slate-900 mb-1">
                    I agree to the Terms and Conditions
                  </p>
                  <p>
                    I confirm that all the information provided is accurate and complete. I understand that any false information may lead to rejection of my application.
                  </p>
                </div>
              </label>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-emerald-500/50 transition-all flex items-center justify-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Submit Application
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white px-6 py-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-semibold">Application in progress</span>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">University Application</h1>
            {program && (
              <p className="text-emerald-100">
                {program.program} at {program.university}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-white border-b border-slate-200 px-6 py-6 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {applicationSections.map((section, index) => {
              const isActive = currentStep === section.id;
              const isCompleted = completedSteps.includes(section.id);
              const SectionIcon = section.icon;

              return (
                <div key={section.id} className="flex items-center flex-1">
                  <button
                    onClick={() => handleStepClick(section.id)}
                    className={`flex flex-col items-center gap-2 transition-all ${
                      isActive || isCompleted ? 'cursor-pointer' : 'cursor-default opacity-50'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      isCompleted 
                        ? 'bg-emerald-500 text-white' 
                        : isActive 
                        ? 'bg-emerald-600 text-white ring-4 ring-emerald-200' 
                        : 'bg-slate-200 text-slate-500'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <SectionIcon className="w-6 h-6" />
                      )}
                    </div>
                    <div className="text-center">
                      <p className={`text-sm font-semibold ${
                        isActive ? 'text-emerald-600' : isCompleted ? 'text-emerald-500' : 'text-slate-500'
                      }`}>
                        {section.title}
                      </p>
                      <p className="text-xs text-slate-500 hidden md:block">{section.description}</p>
                    </div>
                  </button>

                  {index < applicationSections.length - 1 && (
                    <div className={`flex-1 h-1 mx-4 rounded-full transition-all ${
                      completedSteps.includes(section.id) ? 'bg-emerald-500' : 'bg-slate-200'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {renderStepContent()}

          {/* Navigation Buttons */}
          {currentStep !== 'review' && (
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-slate-200">
              <button
                onClick={() => {
                  const currentIndex = applicationSections.findIndex(s => s.id === currentStep);
                  if (currentIndex > 0) {
                    setCurrentStep(applicationSections[currentIndex - 1].id);
                  }
                }}
                disabled={currentStep === 'personal'}
                className="px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              <button
                onClick={handleNext}
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
              >
                Continue
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
