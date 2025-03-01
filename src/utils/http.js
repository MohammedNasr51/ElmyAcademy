import axios from "axios";

export async function fetchCourses() {
  try {
    const response = await axios({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        _limit: 10,
        _sort: "asc",
      },
      url: "https://sci.com.sa/elmy/public/api/v1/home-page/courses?lang=ar&filter",
    });
    console.log("response", response);
    if (response.error.data.code !== 200) {
      return {
        error: response.error.data.message || "Could not fetch courses.",
      };
    }

    return { data: response.data.data };
  } catch (error) {
    return { error: error || "An error occurred while fetching courses." };
  }
}
