// Set current year dynamically
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date dynamically
document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;

// Course list array
const courses = [
  { id: "CSE 110", title: "Programming Basics", credits: 3, type: "CSE", completed: true },
  { id: "WDD 130", title: "Web Fundamentals", credits: 3, type: "WDD", completed: true },
  { id: "CSE 111", title: "Programming with Functions", credits: 3, type: "CSE", completed: false },
  { id: "CSE 210", title: "Programming Data Structures", credits: 3, type: "CSE", completed: false },
  { id: "WDD 131", title: "JavaScript Basics", credits: 3, type: "WDD", completed: true },
  { id: "WDD 231", title: "Frontend Development", credits: 3, type: "WDD", completed: false },
];

// Generate course cards
function displayCourses(filter = "All") {
  const coursesContainer = document.querySelector(".courses");
  coursesContainer.innerHTML = ""; // Clear existing content
  const filteredCourses = filter === "All" ? courses : courses.filter(course => course.type === filter);

  filteredCourses.forEach(course => {
    const courseCard = document.createElement("div");
    courseCard.className = `course-card ${course.completed ? "completed" : ""}`;
    courseCard.innerHTML = `
      <h3>${course.id}</h3>
      <p>${course.title}</p>
      <p>${course.credits} Credits</p>
    `;
    coursesContainer.appendChild(courseCard);
  });
}

// Add event listeners to filter buttons
document.getElementById("filter-all").addEventListener("click", () => displayCourses("All"));
document.getElementById("filter-cse").addEventListener("click", () => displayCourses("CSE"));
document.getElementById("filter-wdd").addEventListener("click", () => displayCourses("WDD"));

// Initial display of all courses
displayCourses();

// Dialog logic
const dialog = document.getElementById("courseDialog");
const dialogCloseBtn = document.getElementById("dialogClose");
const courseCards = document.querySelectorAll(".course-card");

// Show dialog on course card click
function openDialog(course) {
  dialog.querySelector("#dialogContent").innerHTML = `
    <h3>${course.id}</h3>
    <p>${course.title}</p>
    <p>${course.credits} Credits</p>
    <p>Type: ${course.type}</p>
    <p>Completed: ${course.completed ? "Yes" : "No"}</p>
  `;
  dialog.showModal();
}

// Close dialog
dialogCloseBtn.addEventListener("click", () => dialog.close());

// Add click listeners dynamically to course cards
function addCardEventListeners() {
  const courseCards = document.querySelectorAll(".course-card");
  courseCards.forEach((card, index) => {
    card.addEventListener("click", () => openDialog(courses[index]));
  });
}

// Update event listeners after displaying courses
displayCourses();
addCardEventListeners();

