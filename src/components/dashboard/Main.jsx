import GreetingHeader from "./GreetingHeader";
import ProgressBox from "./ProgressBox";
import bookIcon from "../../assets/blue-book.svg";
import monitorIcon from "../../assets/feather_monitor.svg";
import awardIcon from "../../assets/purble-award.svg";
const progressBoxes = [
  {
    icon: bookIcon,
    title: "dashboard.mainSection.registeredCourses",
    count: 0,
    color: "custom-blue",
  },
  {
    icon: monitorIcon,
    title: "dashboard.mainSection.unCompletedCourses",
    color: "custom-purble",
    count: 0,
  },
  {
    icon: awardIcon,
    title: "dashboard.mainSection.completedCourses",
    color: "primary-purble",
    count: 0,
  },
];
export default function Main() {
  return (
    <section className="m-5">
      <GreetingHeader />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-7">
        {progressBoxes.map((box) => (
          <ProgressBox
            key={box.title}
            className={box.className}
            icon={box.icon}
            color={box.color}
            title={box.title}
          />
        ))}
      </div>
    </section>
  );
}
