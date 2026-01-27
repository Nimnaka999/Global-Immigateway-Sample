import {
  Globe,
  Award,
  Users,
  TrendingUp,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
} from "lucide-react";
import { useState, useEffect } from "react";
import { AppView } from "../App";

interface LandingPageProps {
  onNavigate: (view: AppView) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const [age, setAge] = useState("25-35");
  const [education, setEducation] = useState("bachelors");
  const [budget, setBudget] = useState("medium");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateScore = () => {
    let score = 60;
    if (age === "25-35") score += 15;
    if (education === "masters" || education === "phd")
      score += 15;
    if (budget === "high") score += 10;
    return Math.min(score, 95);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden relative">
      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-400/30 to-indigo-600/30 blur-3xl -top-48 -left-48 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-400/20 to-pink-600/20 blur-3xl top-1/3 -right-32 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-amber-400/20 to-orange-600/20 blur-3xl bottom-0 left-1/3 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] flex items-center justify-center">
                <Globe className="w-7 h-7 text-[#0A1628]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#0A1628]">
                  GI Way
                </h1>
                <p className="text-xs text-slate-500">
                  Global Pathways
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#immigration"
                className="text-slate-700 hover:text-[#0A1628] transition-colors"
              >
                Immigration
              </a>
              <a
                href="#education"
                className="text-slate-700 hover:text-[#0A1628] transition-colors"
              >
                Education
              </a>
              <a
                href="#institutions"
                className="text-slate-700 hover:text-[#0A1628] transition-colors"
              >
                Institutions
              </a>
              <a
                href="#features"
                className="text-slate-700 hover:text-[#0A1628] transition-colors"
              >
                Services
              </a>
            </div>

            <button className="bg-[#0A1628] text-white px-6 py-3 rounded-lg hover:bg-[#1a2d4a] transition-colors font-semibold">
              Get Free Eligibility Score
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0A1628] mb-6">
              Your Gateway to
              <br />
              Global Success
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Navigate your path to international opportunities
              with expert guidance and personalized solutions
            </p>
          </div>

          {/* Two App Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Immigration Selection Card */}
            <div
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200"
              onClick={() => onNavigate("immigration")}
            >
              <div className="absolute top-0 left-0 right-0 h-48 overflow-hidden">
                <img
                  src="https://www.aiu.edu/wp-content/uploads/2025/02/education-technology-trends-scaled-1-1024x625.jpg"
                  alt="Immigration pathways"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent opacity-70" />
              </div>

              <div className="relative pt-48 p-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0A1628] flex items-center justify-center">
                    <Globe className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <span className="text-sm font-semibold text-[#0A1628] uppercase tracking-wide">
                    Immigration Selection
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#0A1628] mb-3">
                  Find Your Path to UK, Canada, and Beyond
                </h3>

                <p className="text-slate-600 mb-6">
                  Discover personalized immigration pathways
                  based on your profile. Get matched with the
                  best visa options for your goals.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700 flex items-center gap-1">
                    🇨🇦 Canada
                  </span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700 flex items-center gap-1">
                    🇦🇺 Australia
                  </span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700 flex items-center gap-1">
                    🇬🇧 UK
                  </span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700 flex items-center gap-1">
                    🇩🇪 Germany
                  </span>
                </div>

                <button className="w-full bg-gradient-to-r from-[#0A1628] to-[#1a2d4a] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all group-hover:gap-3">
                  Start Immigration Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Education Selection Card */}
            <div
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200"
              onClick={() => onNavigate("education")}
            >
              <div className="absolute top-0 left-0 right-0 h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1680444873773-7c106c23ac52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwbW9kZXJufGVufDF8fHx8MTc2OTExMzc5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="University campus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#047857] to-transparent opacity-70" />
              </div>

              <div className="relative pt-48 p-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#047857] flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#047857] uppercase tracking-wide">
                    Education Selection
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#0A1628] mb-3">
                  Discover Local Degrees and Top-Up Programs
                </h3>

                <p className="text-slate-600 mb-6">
                  Explore universities and degree programs in
                  Sri Lanka. Compare courses, fees, and
                  accreditation to make the best choice.
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#047857]" />
                    <span>250+ Programs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#047857]" />
                    <span>Accredited Unis</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#047857] to-[#059669] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all group-hover:gap-3">
                  Explore Education Programs
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Questionnaire Widget */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#D4AF37]">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full mb-4">
                <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm font-semibold text-[#D4AF37]">
                  LIVE ELIGIBILITY CHECKER
                </span>
              </div>
              <h3 className="text-3xl font-bold text-[#0A1628] mb-2">
                Get Your Instant Score
              </h3>
              <p className="text-slate-600">
                Answer three quick questions to see your
                immigration eligibility
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Age Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Age
                </label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors"
                >
                  <option value="18-24">18-24 years</option>
                  <option value="25-35">25-35 years</option>
                  <option value="36-45">36-45 years</option>
                  <option value="46+">46+ years</option>
                </select>
              </div>

              {/* Education Level */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Education Level
                </label>
                <select
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors"
                >
                  <option value="high-school">
                    High School
                  </option>
                  <option value="diploma">Diploma</option>
                  <option value="bachelors">
                    Bachelor's Degree
                  </option>
                  <option value="masters">
                    Master's Degree
                  </option>
                  <option value="phd">PhD/Doctorate</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Budget Range
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors"
                >
                  <option value="low">Under $10,000</option>
                  <option value="medium">
                    $10,000 - $30,000
                  </option>
                  <option value="high">$30,000+</option>
                </select>
              </div>
            </div>

            {/* Live Score Display */}
            <div className="bg-gradient-to-br from-[#0A1628] to-[#1a2d4a] rounded-xl p-8 text-white text-center">
              <p className="text-sm font-semibold mb-2 text-[#D4AF37]">
                YOUR ELIGIBILITY SCORE
              </p>
              <div className="text-6xl font-bold mb-4">
                {calculateScore()}%
              </div>
              <p className="text-slate-300 mb-6">
                {calculateScore() >= 80
                  ? "Excellent! You have strong eligibility for multiple pathways."
                  : calculateScore() >= 60
                    ? "Good! You qualify for several immigration options."
                    : "You may be eligible for specific pathways. Get detailed assessment."}
              </p>
              <button className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1628] px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                Get Full Assessment Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-[#0A1628] mb-4">
              How We Help You Succeed
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our platform combines advanced technology with
              expert guidance to streamline your journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-2xl border-2 border-slate-100 hover:border-[#D4AF37] transition-all hover:shadow-lg">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#F4D03F]/20 flex items-center justify-center">
                <Users className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h4 className="text-xl font-bold text-[#0A1628] mb-3">
                Lead Qualification
              </h4>
              <p className="text-slate-600">
                Intelligent pre-screening ensures only qualified
                leads reach consultants, saving time and
                improving conversion rates
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-2xl border-2 border-slate-100 hover:border-[#D4AF37] transition-all hover:shadow-lg">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#F4D03F]/20 flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h4 className="text-xl font-bold text-[#0A1628] mb-3">
                Smart Scoring Engine
              </h4>
              <p className="text-slate-600">
                Advanced algorithms analyze your profile against
                immigration criteria to provide accurate
                eligibility predictions
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-2xl border-2 border-slate-100 hover:border-[#D4AF37] transition-all hover:shadow-lg">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#F4D03F]/20 flex items-center justify-center">
                <Award className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h4 className="text-xl font-bold text-[#0A1628] mb-3">
                Consultant Routing
              </h4>
              <p className="text-slate-600">
                Automatically match with licensed immigration
                consultants specialized in your destination and
                visa category
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A1628] to-[#1a2d4a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of successful applicants who trusted
            us with their global dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1628] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
              Get Started Free
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1628] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Column 1 - Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#0A1628]" />
                </div>
                <h4 className="text-xl font-bold">GI Way</h4>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Your trusted partner for global immigration and
                education opportunities
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h5 className="font-semibold mb-4">
                Quick Links
              </h5>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Blog & Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Our Services */}
            <div>
              <h5 className="font-semibold mb-4">
                Our Services
              </h5>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Immigration Assessment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Education Counseling
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Visa Processing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Document Preparation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Interview Coaching
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Countries We Serve */}
            <div>
              <h5 className="font-semibold mb-4">
                Countries We Serve
              </h5>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <span>🇨🇦</span>
                  <span>Canada</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🇦🇺</span>
                  <span>Australia</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🇬🇧</span>
                  <span>United Kingdom</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🇩🇪</span>
                  <span>Germany</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🇳🇿</span>
                  <span>New Zealand</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © 2026 GI Way. All rights reserved.
              </p>
              <div className="flex gap-6 text-slate-400 text-sm">
                <a
                  href="#"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;