
const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const addBtn = document.getElementById("addBtn");
const studentBody = document.getElementById("studentBody");
const totalStudents = document.getElementById("totalStudents");
const avgScore = document.getElementById("avgScore");

addBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const score = parseFloat(scoreInput.value);

    if (!name || isNaN(score) || score < 0 || score > 10) {
        alert("Vui lòng nhập họ tên và điểm hợp lệ (0-10)!");
        return;
    }

    let rank = "";
    if (score >= 8.5) rank = "Giỏi";
    else if (score >= 7.0) rank = "Khá";
    else if (score >= 5.0) rank = "Trung bình";
    else rank = "Yếu";

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td class="stt"></td>
        <td>${name}</td>
        <td class="score-value">${score}</td>
        <td>${rank}</td>
    `;

    const btnDeleteTd = document.createElement("td");
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Xoá";
    btnDelete.className = "btn-delete";
    
    btnDelete.addEventListener("click", function () {
        newRow.remove();
        updateStats();   
    });

    btnDeleteTd.appendChild(btnDelete);
    newRow.appendChild(btnDeleteTd);

    studentBody.appendChild(newRow);

    nameInput.value = "";
    scoreInput.value = "";
    nameInput.focus();
    updateStats();
});

scoreInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addBtn.click();
});

function updateStats() {
    const rows = studentBody.querySelectorAll("tr");
    let totalScore = 0;

    rows.forEach((row, index) => {
        row.querySelector(".stt").textContent = index + 1;
        
        const scoreVal = parseFloat(row.querySelector(".score-value").textContent);
        totalScore += scoreVal;
    });

    totalStudents.textContent = rows.length;
    const avg = rows.length > 0 ? (totalScore / rows.length).toFixed(2) : 0;
    avgScore.textContent = avg;
}

