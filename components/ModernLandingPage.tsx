import { useState, useEffect } from 'react';
import {
  Globe, Award, Users, TrendingUp, MapPin, Mail, Phone, Linkedin, Facebook, Instagram,
  ChevronRight, CheckCircle, ArrowRight, Sparkles, Zap, Target, Menu, X, Sun, Moon,
  User, LogIn, GraduationCap, Briefcase, ChevronDown, Building2, Plane, BookOpen,
  Shield, Clock, MessageCircle, Star
} from 'lucide-react';
import { AppView } from '@/app/page';
import { motion, AnimatePresence } from 'framer-motion';

interface ModernLandingPageProps {
  onNavigate: (view: AppView) => void;
}

export function ModernLandingPage({ onNavigate }: ModernLandingPageProps) {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState<'immigration' | 'education' | null>(null);
  const [showAuthModal, setShowAuthModal] = useState<'login' | 'signup' | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{name: string, email: string} | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [age, setAge] = useState('25-35');
  const [education, setEducation] = useState('bachelors');
  const [budget, setBudget] = useState('medium');
  const [selectedJourney, setSelectedJourney] = useState<'immigration' | 'education' | null>(null);
  const [showProfilePanel, setShowProfilePanel] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (showProfilePanel) {
        setShowProfilePanel(false);
      }
    };

    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClickOutside);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClickOutside);
      clearTimeout(timer);
    };
  }, [showProfilePanel]);

  const calculateScore = () => {
    let score = 60;
    if (age === '25-35') score += 15;
    if (education === 'masters' || education === 'phd') score += 15;
    if (budget === 'high') score += 10;
    return Math.min(score, 95);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="text-center">
              <motion.div
                className="relative w-24 h-24 mx-auto mb-8"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-white/30"
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Plane className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold text-white mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.25 }}
              >

              </motion.h1>

              <motion.p
                className="text-3xl md:text-5xl font-bold text-white/90"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.25 }}
              >

              </motion.p>

              <motion.div
                className="mt-8 flex justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.25 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-white"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`min-h-screen transition-colors duration-500 relative ${isDark ? 'bg-[#0A0E27] text-white' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900'
        }`}>
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Light Mode Background */}
          {!isDark && (
            <>
              <motion.div
                className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-300/20 via-indigo-300/15 to-purple-300/10 blur-3xl"
                animate={{
                  x: ['-10%', '10%', '-10%'],
                  y: ['-10%', '10%', '-10%'],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                style={{ top: '-20%', left: '-10%' }}
              />
              <motion.div
                className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-300/15 via-pink-300/10 to-orange-300/10 blur-3xl"
                animate={{
                  x: ['10%', '-10%', '10%'],
                  y: ['10%', '-10%', '10%'],
                  scale: [1.1, 1, 1.1],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
                style={{ top: '40%', right: '-10%' }}
              />
              {/* Floating Particles */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
                  animate={{
                    y: [0, -100, 0],
                    x: [0, Math.random() * 50 - 25, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 10,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: 'easeInOut'
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </>
          )}

          {/* Dark Mode Background */}
          {isDark && (
            <>
              <motion.div
                className="absolute w-[900px] h-[900px] rounded-full bg-gradient-to-br from-blue-600/10 via-purple-600/8 to-pink-600/5 blur-3xl"
                animate={{
                  x: ['-15%', '15%', '-15%'],
                  y: ['-15%', '15%', '-15%'],
                  rotate: [0, 360],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{ top: '-25%', left: '-15%' }}
              />
              <motion.div
                className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-br from-amber-600/8 via-orange-600/6 to-red-600/4 blur-3xl"
                animate={{
                  x: ['15%', '-15%', '15%'],
                  y: ['15%', '-15%', '15%'],
                  rotate: [360, 0],
                }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                style={{ bottom: '-20%', right: '-15%' }}
              />
              {/* Constellation Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-10">
                {[...Array(50)].map((_, i) => (
                  <motion.circle
                    key={i}
                    cx={`${Math.random() * 100}%`}
                    cy={`${Math.random() * 100}%`}
                    r="2"
                    fill="#60A5FA"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 3 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 5
                    }}
                  />
                ))}
              </svg>
            </>
          )}

          {/* Mouse-reactive floating shapes */}
          <motion.div
            className={`absolute w-64 h-64 rounded-full ${isDark ? 'bg-blue-500/5' : 'bg-indigo-300/10'} blur-2xl`}
            animate={{
              x: mousePosition.x * 0.02,
              y: mousePosition.y * 0.02,
            }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            style={{ left: '20%', top: '30%' }}
          />
          <motion.div
            className={`absolute w-48 h-48 rounded-full ${isDark ? 'bg-purple-500/5' : 'bg-purple-300/10'} blur-2xl`}
            animate={{
              x: mousePosition.x * -0.015,
              y: mousePosition.y * -0.015,
            }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            style={{ right: '15%', top: '50%' }}
          />
        </div>

        {/* Header */}
        <motion.header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
              ? isDark
                ? 'bg-[#0A0E27]/95 backdrop-blur-xl shadow-lg shadow-black/20 py-3'
                : 'bg-white/95 backdrop-blur-xl shadow-lg py-3'
              : 'bg-transparent py-6'
            }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                className="flex items-center gap-3 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div className={`w-12 h-12 rounded-xl ${isDark
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                      : 'bg-gradient-to-br from-blue-600 to-indigo-700'
                    } flex items-center justify-center shadow-lg`}>
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 blur-md opacity-50"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Global Immigateway
                  </h1>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Your Path to Success</p>
                </div>
              </motion.div>

              {/* Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                {/* Immigration Mega Menu */}
                <div
                  className="relative"
                  onMouseEnter={() => setShowMegaMenu('immigration')}
                  onMouseLeave={() => setShowMegaMenu(null)}
                >
                  <button className={`flex items-center gap-2 font-semibold ${isDark ? 'text-slate-200 hover:text-blue-400' : 'text-slate-700 hover:text-blue-600'
                    } transition-colors`}>
                    Immigration
                    <ChevronDown className={`w-4 h-4 transition-transform ${showMegaMenu === 'immigration' ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {showMegaMenu === 'immigration' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`absolute top-full left-0 mt-4 w-[600px] ${isDark ? 'bg-slate-800/95' : 'bg-white/95'
                          } backdrop-blur-xl rounded-2xl shadow-2xl p-6 border ${isDark ? 'border-slate-700' : 'border-slate-200'
                          }`}
                      >
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <h3 className={`text-sm font-bold mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              POPULAR DESTINATIONS
                            </h3>
                            <div className="space-y-3">
                              {[
                                { icon: '🇨🇦', name: 'Canada', visas: '12 visa types' },
                                { icon: '🇦🇺', name: 'Australia', visas: '10 visa types' },
                                { icon: '🇬🇧', name: 'United Kingdom', visas: '8 visa types' },
                                { icon: '🇩🇪', name: 'Germany', visas: '6 visa types' }
                              ].map((country, i) => (
                                <motion.div
                                  key={i}
                                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${isDark ? 'hover:bg-slate-700/50' : 'hover:bg-slate-100'
                                    } transition-colors`}
                                  whileHover={{ x: 5 }}
                                >
                                  <span className="text-2xl">{country.icon}</span>
                                  <div>
                                    <p className="font-semibold">{country.name}</p>
                                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{country.visas}</p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className={`text-sm font-bold mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              VISA CATEGORIES
                            </h3>
                            <div className="space-y-3">
                              {[
                                { icon: Briefcase, name: 'Skilled Worker', color: 'blue' },
                                { icon: GraduationCap, name: 'Study Visa', color: 'purple' },
                                { icon: Users, name: 'Family Sponsorship', color: 'pink' },
                                { icon: Building2, name: 'Business & Investment', color: 'amber' }
                              ].map((category, i) => (
                                <motion.div
                                  key={i}
                                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${isDark ? 'hover:bg-slate-700/50' : 'hover:bg-slate-100'
                                    } transition-colors`}
                                  whileHover={{ x: 5 }}
                                >
                                  <div className={`w-8 h-8 rounded-lg bg-${category.color}-500/10 flex items-center justify-center`}>
                                    <category.icon className={`w-4 h-4 text-${category.color}-600`} />
                                  </div>
                                  <p className="font-semibold">{category.name}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Education Mega Menu */}
                <div
                  className="relative"
                  onMouseEnter={() => setShowMegaMenu('education')}
                  onMouseLeave={() => setShowMegaMenu(null)}
                >
                  <button className={`flex items-center gap-2 font-semibold ${isDark ? 'text-slate-200 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'
                    } transition-colors`}>
                    Education
                    <ChevronDown className={`w-4 h-4 transition-transform ${showMegaMenu === 'education' ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {showMegaMenu === 'education' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`absolute top-full left-0 mt-4 w-[600px] ${isDark ? 'bg-slate-800/95' : 'bg-white/95'
                          } backdrop-blur-xl rounded-2xl shadow-2xl p-6 border ${isDark ? 'border-slate-700' : 'border-slate-200'
                          }`}
                      >
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <h3 className={`text-sm font-bold mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              DEGREE LEVELS
                            </h3>
                            <div className="space-y-3">
                              {[
                                { name: 'Foundation Programs', count: '45+ programs' },
                                { name: 'Undergraduate Degrees', count: '120+ programs' },
                                { name: 'Postgraduate Degrees', count: '85+ programs' },
                                { name: 'Professional Diplomas', count: '60+ programs' }
                              ].map((level, i) => (
                                <motion.div
                                  key={i}
                                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${isDark ? 'hover:bg-slate-700/50' : 'hover:bg-slate-100'
                                    } transition-colors`}
                                  whileHover={{ x: 5 }}
                                >
                                  <p className="font-semibold">{level.name}</p>
                                  <span className={`text-xs ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>{level.count}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className={`text-sm font-bold mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              TOP UNIVERSITIES
                            </h3>
                            <div className="space-y-3">
                              {[
                                { name: 'University of Colombo', rating: '4.8' },
                                { name: 'University of Moratuwa', rating: '4.7' },
                                { name: 'SLIIT', rating: '4.6' },
                                { name: 'IIT Sri Lanka', rating: '4.5' }
                              ].map((uni, i) => (
                                <motion.div
                                  key={i}
                                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${isDark ? 'hover:bg-slate-700/50' : 'hover:bg-slate-100'
                                    } transition-colors`}
                                  whileHover={{ x: 5 }}
                                >
                                  <p className="font-semibold">{uni.name}</p>
                                  <div className="flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                    <span className="text-sm font-bold">{uni.rating}</span>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a href="#features" className={`font-semibold ${isDark ? 'text-slate-200 hover:text-blue-400' : 'text-slate-700 hover:text-blue-600'
                  } transition-colors`}>Features</a>
                <button onClick={() => setShowContactModal(true)} className={`font-semibold ${isDark ? 'text-slate-200 hover:text-blue-400' : 'text-slate-700 hover:text-blue-600'
                  } transition-colors`}>Contact</button>
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center gap-4">
                {/* Dark/Light Toggle */}
                <motion.button
                  onClick={() => setIsDark(!isDark)}
                  className={`relative w-16 h-8 rounded-full ${isDark ? 'bg-slate-700' : 'bg-slate-300'
                    } transition-colors`}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`absolute top-1 left-1 w-6 h-6 rounded-full ${isDark ? 'bg-slate-900' : 'bg-white'
                      } shadow-lg flex items-center justify-center`}
                    animate={{ x: isDark ? 32 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    {isDark ? (
                      <Moon className="w-4 h-4 text-blue-400" />
                    ) : (
                      <Sun className="w-4 h-4 text-amber-500" />
                    )}
                  </motion.div>
                </motion.button>

                {/* Login/Account */}
                {!isLoggedIn ? (
                  <div className="flex items-center gap-2">
                    <motion.button
                      onClick={() => setShowAuthModal('login')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold ${isDark
                          ? 'bg-slate-700/50 text-slate-200 hover:bg-slate-700'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        } transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <LogIn className="w-4 h-4" />
                      Login
                    </motion.button>
                    <motion.button
                      onClick={() => setShowAuthModal('signup')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Sign In
                    </motion.button>
                  </div>
                ) : (
                  <div className="relative">
                    <motion.div
                      className={`w-10 h-10 rounded-full ${isDark ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-600 to-indigo-700'
                        } flex items-center justify-center cursor-pointer`}
                      whileHover={{ scale: 1.1 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowProfilePanel(!showProfilePanel);
                      }}
                    >
                      <User className="w-5 h-5 text-white" />
                    </motion.div>

                    {/* Profile Panel */}
                    <AnimatePresence>
                      {showProfilePanel && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className={`absolute top-full right-0 mt-2 w-64 ${isDark ? 'bg-slate-800/95' : 'bg-white/95'
                            } backdrop-blur-xl rounded-xl shadow-2xl border ${isDark ? 'border-slate-700' : 'border-slate-200'
                            } p-4 z-50`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* Profile Header */}
                          <div className="flex items-center gap-3 pb-4 border-b border-slate-700/50">
                            <div className={`w-12 h-12 rounded-full ${isDark ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-600 to-indigo-700'
                              } flex items-center justify-center`}>
                              <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{currentUser?.name || 'User'}</p>
                              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{currentUser?.email || 'user@example.com'}</p>
                            </div>
                          </div>

                          {/* Profile Menu Items */}
                          <div className="py-2">
                            <motion.button
                              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${isDark ? 'hover:bg-slate-700/50 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                                } transition-colors`}
                              whileHover={{ x: 5 }}
                            >
                              <User className="w-4 h-4" />
                              <span>My Profile</span>
                            </motion.button>

                            <motion.button
                              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${isDark ? 'hover:bg-slate-700/50 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                                } transition-colors`}
                              whileHover={{ x: 5 }}
                            >
                              <Briefcase className="w-4 h-4" />
                              <span>My Applications</span>
                            </motion.button>

                            <motion.button
                              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${isDark ? 'hover:bg-slate-700/50 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                                } transition-colors`}
                              whileHover={{ x: 5 }}
                            >
                              <MessageCircle className="w-4 h-4" />
                              <span>Messages</span>
                            </motion.button>
                          </div>

                          {/* Logout Button */}
                          <div className="pt-2 border-t border-slate-700/50">
                            <motion.button
                              onClick={() => {
                                setIsLoggedIn(false);
                                setCurrentUser(null);
                                setShowProfilePanel(false);
                                localStorage.removeItem('currentUser');
                              }}
                              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${isDark ? 'hover:bg-red-500/10 text-red-400 hover:text-red-300' : 'hover:bg-red-50 text-red-600 hover:text-red-700'
                                } transition-colors`}
                              whileHover={{ x: 5 }}
                            >
                              <LogIn className="w-4 h-4 rotate-180" />
                              <span>Logout</span>
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}


              </div>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="relative z-10 pt-32">
          {/* Hero Section */}
          <section className="container mx-auto px-6 py-20">
            <motion.div
              className="text-center max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className={`text-sm font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  Trusted by 50,000+ Success Stories
                </span>
              </motion.div>

              <motion.h1
                className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'
                  }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Your Gateway to
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Global Success
                </span>
              </motion.h1>

              <motion.p
                className={`text-xl md:text-2xl mb-12 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Navigate your path to international opportunities with expert guidance
                <br />and personalized solutions
              </motion.p>
            </motion.div>

            {/* Journey Selection Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
              {/* Immigration Card */}
              <motion.div
                className={`group relative overflow-hidden rounded-3xl ${isDark ? 'bg-slate-800/50' : 'bg-white'
                  } backdrop-blur-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'
                  } shadow-2xl cursor-pointer`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => onNavigate('immigration')}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&h=600&fit=crop"
                    alt="Immigration"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className={`text-xs font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        IMMIGRATION SELECTION
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Find Your Path to UK, Canada, and Beyond
                  </h3>

                  <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Discover personalized immigration pathways based on your profile. Get matched with the best visa options for your goals.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {['🇨🇦 Canada', '🇦🇺 Australia', '🇬🇧 UK', '🇩🇪 Germany'].map((country, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-lg text-sm font-semibold ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'
                          }`}
                      >
                        {country}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 group-hover:shadow-xl group-hover:shadow-blue-500/50 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    Start Immigration Assessment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Education Card */}
              <motion.div
                className={`group relative overflow-hidden rounded-3xl ${isDark ? 'bg-slate-800/50' : 'bg-white'
                  } backdrop-blur-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'
                  } shadow-2xl cursor-pointer`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => onNavigate('education')}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://www.aiu.edu/wp-content/uploads/2025/02/education-technology-trends-scaled-1-1024x625.jpg"
                    alt="Education"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/50 to-transparent" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/20 group-hover:to-teal-500/20 transition-all duration-500"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className={`text-xs font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                        EDUCATION SELECTION
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Discover Local Degrees and Top-Up Programs
                  </h3>

                  <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Explore universities and degree programs in Sri Lanka. Compare courses, fees, and accreditation to make the best choice.
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      <span className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        250+ Programs
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      <span className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Accredited Unis
                      </span>
                    </div>
                  </div>

                  <motion.button
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:shadow-xl group-hover:shadow-emerald-500/50 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    Explore Education Programs
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="container mx-auto px-6 py-20">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Why Choose Us
              </h2>
              <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Comprehensive support for your global journey
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Expert Guidance',
                  desc: 'Licensed consultants with 15+ years experience',
                  color: 'blue'
                },
                {
                  icon: Clock,
                  title: 'Fast Processing',
                  desc: 'Average 30% faster than industry standards',
                  color: 'purple'
                },
                {
                  icon: MessageCircle,
                  title: '24/7 Support',
                  desc: 'Round-the-clock assistance for all your queries',
                  color: 'pink'
                },
                {
                  icon: Target,
                  title: '95% Success Rate',
                  desc: 'Industry-leading approval rates',
                  color: 'emerald'
                },
                {
                  icon: Award,
                  title: 'Personalized Plans',
                  desc: 'Custom strategies based on your profile',
                  color: 'amber'
                },
                {
                  icon: Users,
                  title: '50K+ Clients',
                  desc: 'Trusted by thousands worldwide',
                  color: 'indigo'
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className={`group p-8 rounded-2xl ${isDark ? 'bg-slate-800/50' : 'bg-white'
                    } backdrop-blur-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'
                    } shadow-xl hover:shadow-2xl transition-all cursor-pointer`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={`relative mt-20 ${isDark ? 'bg-slate-900' : 'bg-slate-900'
          } text-white overflow-hidden`}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative container mx-auto px-6 py-16">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              {/* Brand Column */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Global Immigateway</h3>
                    <p className="text-xs text-slate-400">Your Path to Success</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-6">
                  Empowering dreams through expert immigration and education consulting since 2010.
                </p>
                <div className="flex gap-3">
                  {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold mb-4 text-blue-400">Quick Links</h4>
                <ul className="space-y-3">
                  {['About Us', 'Success Stories', 'Blog', 'Careers', 'FAQ'].map((link, i) => (
                    <li key={i}>
                      <motion.a
                        href="#"
                        className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                        whileHover={{ x: 5 }}
                      >
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Services */}
              <div>
                <h4 className="font-bold mb-4 text-purple-400">Our Services</h4>
                <ul className="space-y-3">
                  {['Immigration Consulting', 'Education Counseling', 'Visa Processing', 'Document Preparation', 'Settlement Services'].map((service, i) => (
                    <li key={i}>
                      <motion.a
                        href="#"
                        className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                        whileHover={{ x: 5 }}
                      >
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-bold mb-4 text-pink-400">Contact Us</h4>
                <div className="space-y-4">
                  <a href="mailto:info@globalimmigateway.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Email</p>
                      <p className="text-sm font-semibold">info@globalimmigateway.com</p>
                    </div>
                  </a>
                  <a href="tel:+94112345678" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Phone</p>
                      <p className="text-sm font-semibold">+94 11 234 5678</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Address</p>
                      <p className="text-sm font-semibold">Colombo 03, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-500 text-sm">
                  © 2024 Global Immigateway. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm text-slate-500">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Contact Modal */}
        <AnimatePresence>
          {showContactModal && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
            >
              <motion.div
                className={`w-full max-w-2xl rounded-2xl ${isDark ? 'bg-slate-800' : 'bg-white'
                  } shadow-2xl p-8`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Contact Us
                  </h3>
                  <button
                    onClick={() => setShowContactModal(false)}
                    className={`w-8 h-8 rounded-lg ${isDark ? 'hover:bg-slate-700' : 'hover:bg-slate-100'
                      } flex items-center justify-center transition-colors`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <a href="mailto:info@globalimmigateway.com" className={`flex items-center gap-4 p-4 rounded-xl ${isDark ? 'bg-slate-700/50 hover:bg-slate-700' : 'bg-slate-50 hover:bg-slate-100'
                    } transition-colors group`}>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`text-xs font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Email</p>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>info@globalimmigateway.com</p>
                    </div>
                  </a>

                  <a href="tel:+94112345678" className={`flex items-center gap-4 p-4 rounded-xl ${isDark ? 'bg-slate-700/50 hover:bg-slate-700' : 'bg-slate-50 hover:bg-slate-100'
                    } transition-colors group`}>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`text-xs font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Phone</p>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>+94 11 234 5678</p>
                    </div>
                  </a>

                  <div className={`flex items-center gap-4 p-4 rounded-xl ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'
                    }`}>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`text-xs font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Address</p>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Colombo 03, Sri Lanka</p>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4 p-4 rounded-xl ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'
                    }`}>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`text-xs font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Working Hours</p>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Mon-Fri: 9AM-6PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3 justify-center">
                  {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      className={`w-12 h-12 rounded-lg ${isDark ? 'bg-slate-700 hover:bg-blue-600' : 'bg-slate-100 hover:bg-blue-600'
                        } flex items-center justify-center transition-colors group`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className={`w-5 h-5 ${isDark ? 'text-slate-300' : 'text-slate-600'} group-hover:text-white`} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Auth Modal */}
        <AnimatePresence>
          {showAuthModal && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAuthModal(null)}
            >
              <motion.div
                className={`w-full max-w-md rounded-2xl ${isDark ? 'bg-slate-800' : 'bg-white'
                  } shadow-2xl p-8`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {showAuthModal === 'login' ? 'Welcome Back' : 'Create Account'}
                  </h3>
                  <button
                    onClick={() => setShowAuthModal(null)}
                    className={`w-8 h-8 rounded-lg ${isDark ? 'hover:bg-slate-700' : 'hover:bg-slate-100'
                      } flex items-center justify-center transition-colors`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { name: 'Google', color: 'red' },
                    { name: 'Apple', color: 'slate' },
                    { name: 'Facebook', color: 'blue' }
                  ].map((social, i) => (
                    <motion.button
                      key={i}
                      className={`py-3 rounded-lg border-2 ${isDark
                          ? 'border-slate-700 hover:bg-slate-700'
                          : 'border-slate-200 hover:bg-slate-50'
                        } font-semibold transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.name}
                    </motion.button>
                  ))}
                </div>

                <div className="relative mb-6">
                  <div className={`absolute inset-0 flex items-center`}>
                    <div className={`w-full border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`} />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className={`px-4 ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-white text-slate-500'}`}>
                      Or continue with email
                    </span>
                  </div>
                </div>

                {/* Email/Password Form */}
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const email = formData.get('email') as string;
                  const password = formData.get('password') as string;
                  const name = formData.get('name') as string;
                  
                  if (showAuthModal === 'signup') {
                    const users = JSON.parse(localStorage.getItem('users') || '[]');
                    const newUser = { name, email, password };
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));
                    setCurrentUser({ name, email });
                    localStorage.setItem('currentUser', JSON.stringify({ name, email }));
                  } else {
                    const users = JSON.parse(localStorage.getItem('users') || '[]');
                    const user = users.find((u: any) => u.email === email && u.password === password);
                    if (user) {
                      setCurrentUser({ name: user.name, email: user.email });
                      localStorage.setItem('currentUser', JSON.stringify({ name: user.name, email: user.email }));
                    } else {
                      alert('Invalid credentials');
                      return;
                    }
                  }
                  setIsLoggedIn(true);
                  setShowAuthModal(null);
                }}>
                  {showAuthModal === 'signup' && (
                    <div>
                      <input
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        required
                        className={`w-full px-4 py-3 rounded-lg ${isDark
                            ? 'bg-slate-700 border-slate-600 text-white'
                            : 'bg-slate-50 border-slate-200 text-slate-900'
                          } border-2 focus:border-blue-500 focus:outline-none transition-colors`}
                      />
                    </div>
                  )}
                  <div>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email address"
                      required
                      className={`w-full px-4 py-3 rounded-lg ${isDark
                          ? 'bg-slate-700 border-slate-600 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-900'
                        } border-2 focus:border-blue-500 focus:outline-none transition-colors`}
                    />
                  </div>
                  <div>
                    <input
                      name="password"
                      type="password"
                      placeholder="Password"
                      required
                      className={`w-full px-4 py-3 rounded-lg ${isDark
                          ? 'bg-slate-700 border-slate-600 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-900'
                        } border-2 focus:border-blue-500 focus:outline-none transition-colors`}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {showAuthModal === 'login' ? 'Login' : 'Sign Up'}
                  </motion.button>
                </form>

                <p className={`text-center text-sm mt-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {showAuthModal === 'login' ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={() => setShowAuthModal(showAuthModal === 'login' ? 'signup' : 'login')}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    {showAuthModal === 'login' ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
    </>
  );
}
