import { useState } from 'react';
import { ArrowLeft, ArrowRight, FileText, CheckCircle, AlertCircle, Upload, Download, HelpCircle } from 'lucide-react';

interface DocumentPreparationPageProps {
  onComplete: () => void;
  onBack: () => void;
}

type DocumentCategory = {
  id: string;
  title: string;
  description: string;
  required: boolean;
  status: 'pending' | 'uploaded' | 'verified';
};

const documentCategories: DocumentCategory[] = [
  {
    id: 'passport',
    title: 'Valid Passport',
    description: 'Passport must be valid for at least 6 months',
    required: true,
    status: 'pending',
  },
  {
    id: 'education',
    title: 'Education Certificates',
    description: 'Degree certificates and transcripts',
    required: true,
    status: 'pending',
  },
  {
    id: 'experience',
    title: 'Work Experience Letters',
    description: 'Employment reference letters with job duties',
    required: true,
    status: 'pending',
  },
  {
    id: 'language',
    title: 'Language Test Results',
    description: 'IELTS, TOEFL, or equivalent test scores',
    required: true,
    status: 'pending',
  },
  {
    id: 'financial',
    title: 'Proof of Funds',
    description: 'Bank statements showing sufficient funds',
    required: true,
    status: 'pending',
  },
  {
    id: 'police',
    title: 'Police Clearance Certificate',
    description: 'Background check from all countries lived in',
    required: false,
    status: 'pending',
  },
];

export function DocumentPreparationPage({ onComplete, onBack }: DocumentPreparationPageProps) {
  const [documents, setDocuments] = useState<DocumentCategory[]>(documentCategories);
  const [currentStep, setCurrentStep] = useState(0);
  
  const completedCount = documents.filter(d => d.status === 'uploaded' || d.status === 'verified').length;
  const progress = (completedCount / documents.length) * 100;

  const handleDocumentStatus = (id: string, status: 'pending' | 'uploaded' | 'verified') => {
    setDocuments(documents.map(doc => 
      doc.id === id ? { ...doc, status } : doc
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1628] to-[#1a2d4a] text-white flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] flex items-center justify-center">
            <FileText className="w-7 h-7 text-[#0A1628]" />
          </div>
          <h1 className="text-3xl font-bold">GI Way</h1>
        </div>
        <p className="text-slate-300 text-lg">Document preparation checklist</p>
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
            {completedCount} of {documents.length} documents ready
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
      <div className="flex-1 px-6 py-8">
        <h2 className="text-4xl font-bold mb-6 leading-tight">
          Prepare Your<br />
          Documents
        </h2>
        
        <p className="text-slate-300 text-lg mb-12 max-w-md">
          Gather these essential documents for your immigration application. We'll guide you through each requirement.
        </p>

        {/* Document List */}
        <div className="space-y-4 mb-12">
          {documents.map((doc, index) => (
            <div
              key={doc.id}
              className={`rounded-xl p-5 transition-all ${
                doc.status === 'uploaded' || doc.status === 'verified'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]'
                  : 'bg-white/10 border border-white/20'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  doc.status === 'uploaded' || doc.status === 'verified'
                    ? 'bg-[#0A1628]/20'
                    : 'bg-[#D4AF37]/20'
                }`}>
                  {doc.status === 'uploaded' || doc.status === 'verified' ? (
                    <CheckCircle className={`w-5 h-5 ${
                      doc.status === 'uploaded' || doc.status === 'verified'
                        ? 'text-[#0A1628]'
                        : 'text-[#D4AF37]'
                    }`} />
                  ) : (
                    <FileText className="w-5 h-5 text-[#D4AF37]" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-semibold ${
                      doc.status === 'uploaded' || doc.status === 'verified'
                        ? 'text-[#0A1628]'
                        : 'text-white'
                    }`}>
                      {doc.title}
                    </h3>
                    {doc.required && (
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                        doc.status === 'uploaded' || doc.status === 'verified'
                          ? 'bg-[#0A1628]/20 text-[#0A1628]'
                          : 'bg-[#D4AF37]/20 text-[#D4AF37]'
                      }`}>
                        Required
                      </span>
                    )}
                  </div>
                  <p className={`text-sm mb-3 ${
                    doc.status === 'uploaded' || doc.status === 'verified'
                      ? 'text-[#0A1628]/70'
                      : 'text-slate-400'
                  }`}>
                    {doc.description}
                  </p>

                  {/* Action Buttons */}
                  {doc.status === 'pending' && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDocumentStatus(doc.id, 'uploaded')}
                        className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg text-sm font-semibold hover:bg-white/15 transition-all flex items-center gap-2"
                      >
                        <Upload className="w-4 h-4" />
                        Upload
                      </button>
                      <button className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/15 transition-all">
                        <HelpCircle className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  )}

                  {(doc.status === 'uploaded' || doc.status === 'verified') && (
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#0A1628]" />
                      <span className="text-[#0A1628] font-semibold">
                        {doc.status === 'verified' ? 'Verified' : 'Uploaded'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Need help with documents?</h3>
              <p className="text-slate-400 text-sm mb-3">
                Our immigration consultants can help you prepare and review your documents
              </p>
              <button className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg text-sm font-semibold hover:bg-white/15 transition-all flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Document Guide
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="px-6 pb-8">
        <button
          onClick={onComplete}
          disabled={completedCount < documents.filter(d => d.required).length}
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1628] py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
        >
          Continue to Application
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <p className="text-center text-slate-400 text-xs mt-4">
          {completedCount < documents.filter(d => d.required).length
            ? `Upload ${documents.filter(d => d.required).length - completedCount} more required document(s) to continue`
            : 'All required documents ready!'}
        </p>
      </div>
    </div>
  );
}
