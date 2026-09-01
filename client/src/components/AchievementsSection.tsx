import { achievementsContent } from "../data/content";

export default function AchievementsSection() {
  return (
    <section className="bg-maroon py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievementsContent.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white font-heading">
                {stat.value}
              </p>
              <p className="text-white/80 mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}