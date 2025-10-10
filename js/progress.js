// progress.js
function markLessonCompleted(lessonId) {
  let progress = JSON.parse(localStorage.getItem("progress")) || [];
  if (!progress.includes(lessonId)) {
    progress.push(lessonId);
    localStorage.setItem("progress", JSON.stringify(progress));
  }
  updateProgressDisplay();
}

function getProgressPercent() {
  const lessons = 4; // total lessons
  const completed = JSON.parse(localStorage.getItem("progress"))?.length || 0;
  return Math.round((completed / lessons) * 100);
}

function updateProgressDisplay() {
  const percent = getProgressPercent();
  document.getElementById("progressPercent").textContent = `${percent}%`;
  if (percent === 100) {
    document.getElementById("certificateLink").style.display = "block";
  }
}
