import { Download, Smartphone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Take Control of Your <span className="text-gradient">Health Journey</span> Today
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          Join thousands of users who are already experiencing smarter healthcare
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/*
            We change the <button> to an <a> tag to make it a link.
            - href="#": This is a placeholder. Replace '#' with your actual App Store URL.
            - target="_blank": This makes the link open in a new browser tab.
            - rel="noopener noreferrer": This is a security best practice for external links.
          */}
          <a
            href="#" // <-- ADD YOUR APP STORE URL HERE
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Download className="w-5 h-5" />
            
          </a>

          {/*
            We'll do the same for the Google Play button.
            Replace '#' with your actual Google Play URL.
          */}
          <a
            href="https://dhealthdata.netlify.app/" // <-- ADD YOUR GOOGLE PLAY URL HERE
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Smartphone className="w-5 h-5" />
            Health Records
          </a>
        </div>
      </div>
    </section>
  );
}

