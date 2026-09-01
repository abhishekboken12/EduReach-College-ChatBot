import { coursesContent, images } from "../data/content";
import { BookOpen, Users } from "lucide-react";

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-maroon font-semibold text-sm uppercase tracking-wide mb-2">
            World-Class Education
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
            Programs Offered
          </h2>
        </div>

        {/* B.Tech grid */}
        <h3 className="font-heading text-xl font-semibold text-gray-800 mb-4">
          B.Tech Programs (4 Years)
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {coursesContent.btech.map((course) => (
            <div
              key={course.name}
              className="bg-white rounded-lg p-5 border border-gray-100 hover:border-maroon hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-maroon mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">{course.name}</h4>
                  <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> {course.seats} seats
                    </span>
                    <span className="text-maroon font-medium">{course.avg}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* M.Tech & MBA */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* M.Tech */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <img src={images.tech2} alt="Tech" className="w-16 h-16 rounded-lg object-cover" />
              <h3 className="font-heading text-xl font-semibold text-gray-800">M.Tech Programs</h3>
            </div>
            <div className="space-y-2">
              {coursesContent.mtech.map((course) => (
                <div key={course.name} className="flex justify-between text-sm py-2 border-b border-gray-50 last:border-0">
                  <span className="text-gray-700">{course.name}</span>
                  <span className="text-gray-500">{course.seats} seats</span>
                </div>
              ))}
            </div>
          </div>

          {/* MBA */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <img src={images.tech3} alt="MBA" className="w-16 h-16 rounded-lg object-cover" />
              <h3 className="font-heading text-xl font-semibold text-gray-800">MBA Program</h3>
            </div>
            <p className="text-gray-700">{coursesContent.mba.name}</p>
            <div className="flex items-center gap-4 mt-3 text-sm">
              <span className="text-gray-500">{coursesContent.mba.seats} seats</span>
              <span className="text-maroon font-medium">{coursesContent.mba.avg}</span>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Specializations in Finance, Marketing, HR, and IT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}