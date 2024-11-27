'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { countryData, type CountryCode } from '@/utils/countryData'
import { ClipLoader } from 'react-spinners'
import emailjs from '@emailjs/browser';
import CustomModel from './CustomModel'
import { motion } from 'framer-motion';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    countryCode: 'US' as CountryCode,
    message: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required.';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Replace these with your EmailJS credentials
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone_number: `${countryData[formData.countryCode].code}${formData.phoneNumber}`,
        message: formData.message,
        to_name: 'Shahnawaz',
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (response.status === 200) {
        setShowSuccessModal(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          countryCode: 'US' as CountryCode,
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-[#0a192f] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Form Section */}
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl mt-12 md:text-5xl lg:text-6xl text-white font-bold mb-3 sm:mb-4">
              Contact
            </h1>
            <p className="text-purple mb-6 sm:mb-8 text-base sm:text-lg font-semibold tracking-wide">
              Feel free to reach out to me for any inquiries!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className={`block mb-2 ${
                      errors.firstName ? 'text-[#ff3366]' : 'text-gray-400'
                    }`}>
                    First Name: <span className="text-[#ff3366]">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Type your first name here..."
                    className={`w-full bg-[#112240] border ${
                      errors.firstName ? 'border-[#ff3366]' : 'border-[#233554]'
                    } rounded-lg px-4 py-3 text-gray-400 focus:border-purple focus:outline-none placeholder-[#4a5567]`}
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                  {errors.firstName && (
                    <p className="text-[#ff3366] text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className={`block mb-2 ${
                      errors.lastName ? 'text-[#ff3366]' : 'text-gray-400'
                    }`}>
                    Last Name: <span className="text-[#ff3366]">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Type your last name here..."
                    className={`w-full bg-[#112240] border ${
                      errors.lastName ? 'border-[#ff3366]' : 'border-[#233554]'
                    } rounded-lg px-4 py-3 text-gray-400 focus:border-purple focus:outline-none placeholder-[#4a5567]`}
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                  {errors.lastName && (
                    <p className="text-[#ff3366] text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className={`block mb-2 ${
                      errors.email ? 'text-[#ff3366]' : 'text-gray-400'
                    }`}>
                    Email: <span className="text-[#ff3366]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Type your email here..."
                    className={`w-full bg-[#112240] border ${
                      errors.email ? 'border-[#ff3366]' : 'border-[#233554]'
                    } rounded-lg px-4 py-3 text-gray-400 focus:border-purple focus:outline-none placeholder-[#4a5567]`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && (
                    <p className="text-[#ff3366] text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div className='phone-number-container relative'>
                  <label htmlFor="phone" className={`block mb-2 ${
                      errors.phoneNumber ? 'text-[#ff3366]' : 'text-gray-400'
                    }`}>
                    Phone Number: <span className="text-[#ff3366]">*</span>
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent text-gray-400 border-none focus:outline-none z-10 w-[90px] cursor-pointer flex items-center"
                    >
                      <img
                        src={`https://flagcdn.com/24x18/${formData.countryCode.toLowerCase()}.png`}
                        alt={countryData[formData.countryCode].name}
                        className="w-6 h-4 object-cover rounded-sm"
                      />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute left-0 top-full mt-1 w-[250px] max-h-[300px] overflow-y-auto bg-[#0a192f] border border-[#233554] rounded-lg shadow-lg z-20">
                        {Object.entries(countryData).map(([code, data]) => (
                          <div
                            key={code}
                            onClick={() => {
                              setFormData({
                                ...formData,
                                countryCode: code as CountryCode
                              });
                              setIsDropdownOpen(false);
                            }}
                            className="flex items-center px-4 py-2 hover:bg-[#1e3a8a] cursor-pointer"
                          >
                            <img
                              src={`https://flagcdn.com/24x18/${code.toLowerCase()}.png`}
                              alt={data.name}
                              className="w-6 h-4 object-cover rounded-sm mr-2"
                            />
                            <span className="text-white">{data.name} ({data.code})</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <input
                      type="tel"
                      id="phone"
                      placeholder="Type your phone number here..."
                      className={`w-full bg-[#112240] border ${
                        errors.phoneNumber ? 'border-[#ff3366]' : 'border-[#233554]'
                      } rounded-lg pl-24 pr-4 py-3 text-gray-400 focus:border-purple focus:outline-none placeholder-[#4a5567]`}
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    />
                    <span className="absolute left-12 top-1/2 -translate-y-1/2 text-white">
                      {countryData[formData.countryCode].code}
                    </span>
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-[#ff3366] text-sm mt-1">{errors.phoneNumber}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={`block mb-2 ${
                      errors.message ? 'text-[#ff3366]' : 'text-gray-400'
                    }`}>
                  Message: <span className="text-[#ff3366]">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Type your message here..."
                  className={`w-full bg-[#112240] border ${
                    errors.message ? 'border-[#ff3366]' : 'border-[#233554]'
                  } rounded-lg px-4 py-3 text-gray-400 focus:border-purple focus:outline-none resize-none placeholder-[#4a5567]`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && (
                  <p className="text-[#ff3366] text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 send-meg-btn rounded-lg flex items-center justify-center gap-2 bg-[#233554] text-white hover:bg-[#2a3f63] transition-colors w-full sm:flex-1 disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <ClipLoader size={20} color="#ffffff" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

                <Link
                  href="/"
                  className="px-6 py-3 border border-[#233554] text-white rounded-lg hover:bg-[#233554] transition-colors text-center flex items-center justify-center gap-2 w-full sm:flex-1"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19 12H5M5 12L12 19M5 12L12 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Go Back
                </Link>
              </div>

              {/* Privacy Notice */}
              <p className="text-[#8892b0] text-xs sm:text-sm mt-4 sm:mt-6">
                This site is protected by reCAPTCHA and the Google{' '}
                <Link href="https://policies.google.com/privacy" target="_blank" className="text-purple hover:underline">Privacy Policy</Link>
                {' '}and{' '}
                <Link href="https://policies.google.com/terms" target="_blank" className="text-purple hover:underline">Terms of Service</Link>
                {' '}apply.
              </p>
            </form>

            {/* Mobile Illustration */}
            <div className="lg:hidden flex items-center justify-center mt-8">
              <Image
                src="/icons/tower.svg"
                alt="Contact Illustration"
                width={300}
                height={300}
                className="object-contain w-full max-w-[200px] sm:max-w-[250px]"
                priority
              />
            </div>
          </div>

          {/* Desktop Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="sticky top-8">
              <Image
                src="/icons/tower.svg"
                alt="Contact Illustration"
                width={300}
                height={300}
                className="object-contain w-full max-w-[280px] xl:max-w-[300px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <CustomModel onClose={() => setShowSuccessModal(false)} />
      )}
    </motion.div>
  );
}