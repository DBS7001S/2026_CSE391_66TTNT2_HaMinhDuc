
let students = [];
let sortDirection = 1;

const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const addBtn = document.getElementById("addBtn");
const studentBody = document.getElementById("studentBody");
const totalStudents = document.getElementById("totalStudents");
const avgScore = document.getElementById("avgScore");

const searchInput = document.getElementById("searchInput");
const filterRank = document.getElementById("filterRank");
const scoreHeader = document.querySelector("th:nth-child(3)");

addBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const score = parseFloat(scoreInput.value);

    if (!name || isNaN(score) || score < 0 || score > 10) {
        alert("Vui lòng nhập họ tên và điểm hợp lệ (0-10)!");
        return;
    }

    const rank = score >= 8.5 ? "Giỏi" : score >= 7.0 ? "Khá" : score >= 5.0 ? "Trung bình" : "Yếu";

    students.push({
        id: Date.now(), 
        name,
        score,
        rank
    });

    nameInput.value = "";
    scoreInput.value = "";
    nameInput.focus();
    
    applyFilters(); 
});

function applyFilters() {
    const keyword = searchInput.value.toLowerCase();
    const rankValue = filterRank.value;

    let filtered = students.filter(s => {
        const matchName = s.name.toLowerCase().includes(keyword);
        const matchRank = (rankValue === "Tất cả") || (s.rank === rankValue);
        return matchName && matchRank;
    });

    filtered.sort((a, b) => (a.score - b.score) * sortDirection);

    renderTable(filtered);
    updateStats(filtered);
}

function renderTable(data) {
    studentBody.innerHTML = "";

    if (data.length === 0) {
        studentBody.innerHTML = `<tr><td colspan="5" style="text-align:center;">Không có kết quả</td></tr>`;
        return;
    }

    data.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.score}</td>
            <td>${student.rank}</td>
            <td><button class="btn-delete" onclick="deleteStudent(${student.id})">Xoá</button></td>
        `;
        studentBody.appendChild(row);
    });
}

function deleteStudent(id) {
    students = students.filter(s => s.id !== id);
    applyFilters();
}

function updateStats(data) {
    totalStudents.textContent = data.length;
    const totalScore = data.reduce((sum, s) => sum + s.score, 0);
    avgScore.textContent = data.length > 0 ? (totalScore / data.length).toFixed(2) : 0;
}

searchInput.addEventListener("input", applyFilters);
filterRank.addEventListener("change", applyFilters);

scoreHeader.style.cursor = "pointer";
scoreHeader.addEventListener("click", () => {
    sortDirection *= -1;
    const icon = sortDirection === 1 ? "▲" : "▼";
    scoreHeader.textContent = `Điểm ${icon}`;
    applyFilters();
});