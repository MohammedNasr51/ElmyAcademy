import { useState } from "react";
import COURSES from "../utils/courses";
import Course from "./Course";
import useFetch from "../hooks/useFetch";
import { fetchCourses } from "../utils/http";

export default function FirstCoursesSection() {
  const [active, setActive] = useState("الأحدث");
  const { data, error, isFetching } = useFetch(fetchCourses, COURSES);

  // const fitData = data.filter((course) => course.id < 4);

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.3);
  }

  function handleSelectCategory(category) {
    setActive(category);
    // setCourses((prev) => shuffleArray(prev));
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
        {isFetching && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!isFetching &&
          !error &&
          data.map((course) => (
            <Course key={course.title + course.id} {...course} />
          ))}
      </div>
    </div>
  );
}
