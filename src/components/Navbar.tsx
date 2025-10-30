import { Activity } from 'lucide-react';

// The props are still the same, which is perfect.
interface NavbarProps {
  navigate: (page: string) => void;
  onLogout: () => void;
}

export default function Navbar({ navigate, onLogout }: NavbarProps) {
  // We no longer need the 'isScrolled' state or useEffect for this design.

  // This function is perfect, no changes needed.
  const scrollToSection = (id: string) => {
    navigate('home');
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    // 1. Changed to 'top-4' to float it down from the top edge.
    //    Removed the ternary logic for a consistent style.
    <nav className="fixed top-4 left-0 right-0 z-50 transition-all duration-300">
      
      {/* 2. This is now the "pill". */}
      {/* - Changed max-w-7xl to max-w-5xl (or adjust as you like) */}
      {/* - Added rounded-full, shadow-lg, ring-1 */}
      {/* - Added the glassmorphism effects permanently */}
      {/* - Changed padding to px-5 py-3 and removed h-16 */}
      <div className="
        max-w-5xl mx-auto px-5 py-3 
        bg-white/80 backdrop-blur-md 
        rounded-full 
        shadow-lg 
        ring-1 ring-black/5
      ">
        {/* 3. Removed h-16 from here, padding will handle the height. */}
        <div className="flex justify-between items-center">
          
          {/* Your logo - this logic is great */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('home')}>
            {/* REPLACE the Activity icon with this img tag */}
            <img 
              src="/logo.png" 
              alt="MedHelps Logo" 
              className="h-12 w-auto" // Adjust 'h-8' (height) as needed
            />
            <span className="text-2xl font-bold text-gray-800">MedHelps</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {/* All your button logic is perfect and has been kept */}
            <button onClick={() => navigate('home')} className="text-charcoal hover:text-blue-600 transition-colors font-medium">
             Home
            </button>
            <button onClick={() => scrollToSection('features')} className="text-charcoal hover:text-blue-600 transition-colors font-medium">
              Features
            </button>
            <button onClick={() => scrollToSection('about')} className="text-charcoal hover:text-blue-600 transition-colors font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-charcoal hover:text-blue-600 transition-colors font-medium">
              Contact
            </button>
          </div>

          {/* Your logout button - this logic is also perfect */}
          <button 
            onClick={onLogout}
            className="bg-red-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Logout
          </button>
         </div>
        </div>
    </nav>
  );
}