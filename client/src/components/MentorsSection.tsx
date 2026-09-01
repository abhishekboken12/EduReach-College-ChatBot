import { useEffect, useRef } from "react";
import { mentorsContent } from "../data/content";

interface MentorsSectionProps {
  onReachMentors?: () => void;
}

export default function MentorsSection({ onReachMentors }: MentorsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  // Simple scroll check - when section is in view, call the callback
  useEffect(() => {
    const handleScroll = () => {
      if (triggered.current || !sectionRef.current || !onReachMentors) return;

      const rect = sectionRef.current.getBoundingClientRect();
      // When the section top is within the viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        triggered.current = true;
        onReachMentors();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onReachMentors]);

  return (
    <section id="mentors" ref={sectionRef} className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-maroon font-semibold text-sm uppercase tracking-wide mb-2">
            Learn from the Best
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
            Popular Mentors
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
          {mentorsContent.map((mentor) => (
            <div
              key={mentor.name}
              className="min-w-[260px] md:min-w-0 bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-gray-900">{mentor.name}</h3>
                <p className="text-maroon text-sm font-medium mb-2">{mentor.role}</p>
                <p className="text-gray-500 text-sm mb-2">{mentor.bio}</p>
                <p className="text-xs text-gray-400">Teaches: {mentor.teaches}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}