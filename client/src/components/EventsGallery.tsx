import { eventsGallery } from "../data/content";

const EventsGallery = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-wider text-[#7B1E2B] font-semibold mb-2">Life at EduReach</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Events & Highlights</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {eventsGallery.map((item: { title: string; image: string }) => (
          <div key={item.title} className="group relative overflow-hidden rounded-lg aspect-square">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
              <p className="text-white text-sm font-medium p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsGallery;