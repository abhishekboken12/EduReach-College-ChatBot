import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { contactInfo } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-7 h-7 text-amber-300" />
              <span className="font-heading text-xl font-bold">EduReach</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premier engineering institution established in 2005. AICTE approved, JNTU Hyderabad affiliated.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="#about" className="block hover:text-amber-300 transition-colors duration-200">About Us</a>
              <a href="#courses" className="block hover:text-amber-300 transition-colors duration-200">Programs</a>
              <a href="#mentors" className="block hover:text-amber-300 transition-colors duration-200">Faculty</a>
              <a href="#campus" className="block hover:text-amber-300 transition-colors duration-200">Campus Life</a>
              <a href="#placements" className="block hover:text-amber-300 transition-colors duration-200">Placements</a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-4">Programs</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>B.Tech (6 specializations)</p>
              <p>M.Tech (3 specializations)</p>
              <p>MBA (Finance, Marketing, HR, IT)</p>
              <p>Admissions open: March 1st</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-300 flex-shrink-0" />
                {contactInfo.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-300 flex-shrink-0" />
                {contactInfo.phone}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-300 flex-shrink-0" />
                {contactInfo.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2024 EduReach College, Hyderabad. All rights reserved.
        </div>
      </div>
    </footer>
  );
}