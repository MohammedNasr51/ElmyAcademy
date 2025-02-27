import { useState } from "react";
import COURSES from "../utils/courses";
import Course from "./Course";

export default function FirstCoursesSection() {
  const [courses, setCourses] = useState(COURSES);
  const [active, setActive] = useState("الأحدث");

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.3);
  }

  function handleSelectCategory(category) {
    setActive(category);
    setCourses((prev) => shuffleArray(prev));
  }

  return (
    <div className="my-10 mx-auto w-[90%] sm:w-[80%]">
      <div className="mx-auto">
        <ul className="flex flex-wrap justify-center gap-4 my-9">
          {["الأكثر شعبية", "المفضلة للمبتدئين", "الأحدث"].map((item) => {
            let styles =
              active === item
                ? "from-dark-purble via-primary-purble to-dark-purble text-white"
                : "text-primary-purble bg-white border border-primary-purble";

            return (
              <li key={item}>
                <button
                  className={`py-2 px-3 rounded-full bg-gradient-to-l ${styles}`}
                  onClick={() => handleSelectCategory(item)}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto my-5">
        {courses.map((course) => (
          <Course key={course.title + course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
