import { useContext, useState } from "react";
import Course from "../Course";
// import courses from "../../utils/courses";
import { t } from "i18next";
import { AuthContext } from "../../context/AuthContext";

const coursesCategories = [
  t("dashboard.myCoursesSection.all"),
  t("dashboard.myCoursesSection.unCompleted"),
  t("dashboard.myCoursesSection.completed"),
];

export default function MyCourses() {
  const { courses } = useContext(AuthContext);
  const [active, setActive] = useState(t("dashboard.myCoursesSection.all"));

  function handleSelectCategory(category) {
    setActive(category);
  }

  const filteredCourses = courses.filter((course) => {
    if (active === t("dashboard.myCoursesSection.all")) return true;
    if (active === t("dashboard.myCoursesSection.unCompleted"))
      return !course.completed;
    if (active === t("dashboard.myCoursesSection.completed"))
      return course.completed;
    return true;
  });

  return (
    <div className="mx-1 my-14 ">
      <ul className="flex flex-wrap justify-center gap-4 mx-auto w-full">
        {coursesCategories.map((item) => (
          <li key={item} onClick={() => handleSelectCategory(item)}>
            <button
              className={`py-2 px-3 rounded-full bg-gray-200 ${
                active === item ? "text-primary-purble" : ""
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-3">
          {filteredCourses.map((course) => (
            <div key={course.id} className="mx-2">
              <Course {...course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
