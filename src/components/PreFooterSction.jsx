import { Link } from "react-router";
import bgImg from '../assets/bg-instructor.png.png';
export default function PreFooterSction() {
  return (
    <section className="relative w-[90%] mx-auto min-h-[70vh] py-20 px-6 flex flex-col justify-center">
      <img src={bgImg} alt="" className="w-[80%] object-cover hidden md:block absolute top-0 left-[10%] animate-bounce" />
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-center text-4xl font-semibold">
          سجل كمدرب الآن و <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-primary-purble ">حقق شهرة اكبر</span>
        </h1>
        <p className="text-center text-gray-500">
          يقوم المدربون من جميع أنحاء العالم بتعليم ملايين المتعلمين على علمي.
          نحن نقدم الأدوات والمهارات اللازمة لتعليم ما تحب.
        </p>
        <Link to="/" className="text-white flex items-center justify-center bg-gradient-to-r from-primary-purble via-blue-600 to-primary-purble w-fit px-8 py-3 rounded-full hover:from-blue-700 hover:via-primary-purble hover:to-blue-700">سجل كمدرب الآن</Link>
      </div>
    </section>
  );
}
