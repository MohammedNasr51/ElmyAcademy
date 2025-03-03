import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Course from "../Course";
// import Course from "../Course";

export default function Favorites() {
  const { courses } = useContext(AuthContext);

  const favorites = courses.filter((course) => course.isBookmarked);


  return (
    <div className="mx-1 my-10">
      <div className="mt-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3">
          {favorites.map((course) => (
            <div key={course.id+Math.random()+course.image} className="mx-2">
              <Course {...course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
