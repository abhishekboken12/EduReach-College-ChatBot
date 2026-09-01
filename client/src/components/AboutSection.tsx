import { aboutContent, images } from "../data/content";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="relative">
            <img
              src={images.collegeClassroom}
              alt="Classroom"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
            {/* Small overlay image */}
            <img
              src={images.tech1}
              alt="Technology"
              className="absolute -bottom-6 -right-6 w-40 h-40 object-cover rounded-lg shadow-xl border-4 border-white hidden md:block"
            />
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-maroon font-semibold text-sm uppercase tracking-wide mb-2">
              {aboutContent.subtitle}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-gray-900 font-bold mb-6">
              {aboutContent.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {aboutContent.description}
            </p>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutContent.highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-cream rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
                >
                  <p className="text-2xl font-bold text-maroon">{item.value}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}