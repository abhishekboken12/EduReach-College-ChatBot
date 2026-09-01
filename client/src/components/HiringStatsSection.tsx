import { topRecruiters, deptPlacements, images } from "../data/content";
import { TrendingUp } from "lucide-react";

export default function HiringStatsSection() {
  return (
    <section id="placements" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-maroon font-semibold text-sm uppercase tracking-wide mb-2">
            Where Our Students Go
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
            Placement Highlights 2023–24
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <img src={images.tech4} alt="Tech" className="w-10 h-10 rounded-lg object-cover" />
              <h3 className="font-heading text-lg font-semibold text-gray-800 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-maroon" />
                Average Package by Department
              </h3>
            </div>
            <div className="space-y-4">
              {deptPlacements.map((item) => (
                <div key={item.dept}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 font-medium">{item.dept}</span>
                    <span className="text-maroon font-semibold">{item.avg}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div
                      className="bg-maroon h-3 rounded-full transition-all duration-700"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <img src={images.recruter1} alt="Fest" className="rounded-lg h-28 w-full object-cover" />
              <img src={images.recruter2} alt="Event" className="rounded-lg h-28 w-full object-cover" />
              <img src={images.moreStudents} alt="Students" className="rounded-lg h-28 w-full object-cover" />
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-gray-800 mb-4">
                Top Recruiters
              </h3>
              <div className="flex flex-wrap gap-2">
                {topRecruiters.map((company) => (
                  <span
                    key={company}
                    className="px-3 py-1.5 bg-cream text-gray-700 rounded-full text-sm border border-gray-200 hover:border-maroon hover:text-maroon transition-colors duration-200"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}