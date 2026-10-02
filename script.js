const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const rollNo = document.getElementById("rollNo").value;
    const course = document.getElementById("course").value;

    if (name === "" || rollNo === "" || course === "") {
        alert("Please fill all fields.");
        return;
    }

    const student = document.createElement("li");

    student.textContent =
        `${name} | ${rollNo} | ${course}`;

    studentList.appendChild(student);

    studentForm.reset();
});