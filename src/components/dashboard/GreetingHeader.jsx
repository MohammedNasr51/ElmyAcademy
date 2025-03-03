import { t } from "i18next";
import { Link } from "react-router";

export default function GreetingHeader() {
  return (
    <div className="mt-10">
      <h1 className="text-lg my-2 font-semibold">
        {t("dashboard.greetingSection.greeting")}
        <span className="mx-1">user</span>
      </h1>
      <p className="text-gray-500 text-sm">
        {t("dashboard.greetingSection.message")}
        <Link className="text-blue-700">
          {t("dashboard.greetingSection.link")}
        </Link>
      </p>
    </div>
  );
}
