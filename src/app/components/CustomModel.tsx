import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CustomModelProps {
    onClose: () => void;
}

export default function CustomModel({ onClose }: CustomModelProps) {
  const router = useRouter();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-[#0a192f] border border-[#233554] rounded-lg p-4 sm:p-6 max-w-[90%] sm:max-w-xl w-full relative">
        <button 
          onClick={onClose}
          className="absolute -top-[-10px] -right-[-10px] sm:-top-[-15px] sm:-right-[-15px] w-6 h-6 bg-white hover:bg-[#8B5CF6] rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-gray-600 hover:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="rounded-xl p-2 sm:p-4 mb-2 sm:mb-4">
            <svg
              className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 20C20 15 25 15 25 15H75C75 15 80 15 80 20V55C80 55 80 60 75 60H25C25 60 20 60 20 55V20Z"
                fill="#8B5CF6"
              />
              <path
                d="M25 25L50 40L75 25"
                stroke="#0a192f"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="70"
                cy="70"
                r="25"
                fill="#0a192f"
              />
              <path
                d="M60 70L67 77L80 64"
                stroke="#8B5CF6"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-400 mb-2 tracking-wide">Message Sent</h2>
          <p className="text-[#8892b0] text-lg sm:text-xl tracking-wide mb-4 sm:mb-6">
            Thank you for contacting us. We will get back to you as soon as possible.
          </p>
          <button
            onClick={() => router.push('/')}
            className="px-4 sm:px-6 py-3 sm:py-2 border border-purple text-gray-400 rounded-lg hover:text-purple transition-colors flex items-center gap-2"
          >
            <svg 
              className="w-4 h-4" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}