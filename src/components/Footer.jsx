import { Link } from "react-router-dom";
import arowIcon from "../assets/arow.svg";
import logoIcon from "../assets/logo-w.svg";
import tickTockIcon from "../assets/ticktock.svg";
import instagramIcon from "../assets/instagram.svg";

export default function Footer() {
  return (
    <footer className="relative min-h-screen flex flex-col justify-end">
      {/* Section 2: Call to Action */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-10 md:py-16 px-6 text-white w-[90%] sm:w-[80%] mx-auto rounded-3xl z-10 absolute top-0 left-[5%] md:left-[10%]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="bg-white rounded-full py-2 px-2 w-full md:w-auto mb-4 md:mb-0 min-w-1/3  flex justify-between text-right">
            <button className="flex items-center justify-center bg-gradient-to-r from-primary-purble via-blue-600 to-primary-purble w-fit px-8 py-3 rounded-full hover:from-blue-700 hover:via-primary-purble hover:to-blue-700">
              <img src={arowIcon} alt="" className="me-2" />
              اشتراك
            </button>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="البريد الالكتروني"
              className="text-right w-full rounded-full px-4 py-2 outline-none bg-transparent placeholder:text-gray-400"
            />
          </div>
          <div className="text-center sm:text-right">
            <h2 className="text-xl md:text-2xl mb-4">
              اشترك في نشرتنا البريدية
            </h2>
            <p className="text-sm">
              يقوم المدربون من جميع أنحاء العالم بتعليم ملايين المتعلمين على
              علمي. نحن نقدم الأدوات والمهارات اللازمة لتعليم ما تحب.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Newsletter Subscription */}
      <section className="bg-gray-900 text-white pt-32 pb-4 md:py-16 px-6 rounded-t-3xl mt-40 sm:mt-44 flex-grow">
        <div
          className="w-[90%] mx-auto text-center flex flex-col lg:flex-row items-center justify-between lg:text-right"
          dir="rtl"
        >
          <ul className="w-full lg:w-1/3  mb-6 md:mb-0">
            <li className="my-3 flex items-center justify-center lg:justify-start">
              <Link>
                <img src={logoIcon} alt="" />
              </Link>
            </li>
            <li className="text-xs leading-loose">
              حرصاً على محاكاة البيئة التدريبية المثالية التي يبحث عنها الجميع،
              يتكامل فريق الدعم الفني في علمي مع بقية أقسامه لتمثيل التعاون
              المتكامل والخدمة الأفضل، حيث نتواجد على مدار الساعة لسماع
              استفساراتكم واقتراحاتكم وإيجاد الحلول الفعالة لأي مشكلةٍ قد
              تواجهكم برحابةٍ وسعادة، لأننا مؤمنون أن التواصل الفعال مع شركاء
              نجاحنا ومتدربينا هو السبيل الأفضل لنصبح المنصة التدريبية الأولى في
              الوطن العربي، لا تتردد في مراسلتنا عبر جميع وسائل الاتصال المتاحة
              على مدار الساعة:
            </li>
          </ul>
          <ul className="md:mt-5  mb-6 md:mb-0">
            <li className="text-primary-purble mb-5">روابط هامة</li>
            {[
              "الرئيسية",
              "من نحن",
              "كيف نعمل",
              "التسجيل كمدرب",
              "العنوان الوطني",
            ].map((item) => (
              <li key={item} className="py-2">
                <Link to="/">{item}</Link>
              </li>
            ))}
          </ul>
          <ul className="md:mt-5  mb-6 md:mb-0">
            <li className="text-primary-purble mb-5">الدعم و السياسات</li>
            {[
              "تواصل معنا",
              "الشروط و الأحكام",
              "سياسة الاستخدام والاسترجاع",
              "سياسة الخصوصية",
              "الدعم و المساعدة",
            ].map((item) => (
              <li key={item} className="py-2">
                <Link to="/">{item}</Link>
              </li>
            ))}
          </ul>
          <ul className="md:mb-auto md:mt-5 ">
            <li className="text-primary-purble mb-5">تواصل مباشرة</li>
            {[
              "واتساب :966597431779",
              "البريد الالكتروني:support@elmyacademy.com",
            ].map((item) => (
              <li key={item} className="py-2">
                <Link to="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex items-center justify-center lg:justify-end w-[90%] mx-auto mt-6">
          <li className="m-1 mb-0 p-3 rounded-full bg-gray-800">
            <Link to="/">
              <img src={instagramIcon} alt="" />
            </Link>
          </li>
          <li className="m-1 mb-0 p-3 rounded-full bg-gray-800">
            <Link to="/">
              <img src={tickTockIcon} alt="" />
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}
