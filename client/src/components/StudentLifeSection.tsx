import { campusFeatures } from "../data/content";

export default function StudentLifeSection() {
  return (
    <section id="campus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-maroon font-semibold text-sm uppercase tracking-wide mb-2">
            Beyond the Classroom
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
            Campus & Student Life
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {campusFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-xl overflow-hidden h-64 cursor-pointer"
            >
              {/* Image - zooms on hover */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Bottom gradient - always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                <div className="w-full p-4">
                  <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                  {/* Description slides up on hover */}
                  <p className="text-white/90 text-sm mt-1 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}