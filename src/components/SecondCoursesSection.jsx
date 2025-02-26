import { secondSecCourses } from "../utils/courses";
import MiniCourse from "./MiniCourse";

export default function SecondCoursesSection() {
  return (
    <div>
      <h3 className="mx-auto w-[16rem] py-2 text-2xl font-bold text-center my-10 text-primary-purble border-b-2 border-primary-purble">
        أكثر الفئات بحثاً فى علمي
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto my-14">
        {secondSecCourses.map((course) => (
          <MiniCourse key={course.title} {...course} />
        ))}
      </div>
    </div>
  );
}
