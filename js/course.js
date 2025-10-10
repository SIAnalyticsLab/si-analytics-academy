// course.js
const lessons = [
  { id: 1, title: "Introduction to Statistical Methods in STATA", video: "Tx6voP7sXDk" },
  { id: 2, title: "Understanding the STATA Environment", video: "6-hdZH1P6b0" },
  { id: 3, title: "Data Manipulation and Wrangling in STATA", video: "1rQrgrdpngQ" },
  { id: 4, title: "Reporting and Chart Creation in STATA", video: "HdwFIFgZoxY" }
];

const params = new URLSearchParams(window.location.search);
const session = parseInt(params.get("session")) || 1;
const lesson = lessons.find(l => l.id === session);

document.title = `${lesson.title} | SI Analytics Academy`;

document.getElementById("courseContainer").innerHTML = `
  <h2>${lesson.title}</h2>
  <iframe width="100%" height="480" src="https://www.youtube.com/embed/${lesson.video}" frameborder="0" allowfullscreen></iframe>
`;

document.getElementById("completeBtn").addEventListener("click", () => {
  markLessonCompleted(lesson.id);
  alert("Lesson marked as completed!");
  if (session < lessons.length) {
    window.location.href = `course.html?session=${session + 1}`;
  } else {
    window.location.href = "dashboard.html";
  }
});
