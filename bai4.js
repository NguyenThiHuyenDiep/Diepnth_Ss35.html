let employees = JSON.parse(localStorage.getItem("employees")) || [
    { name: "Nguyễn Văn A", role: "Developer" },
    { name: "Trần Thị B", role: "Designer" },
    { name: "Phạm Văn C", role: "Project Manager" },
    { name: "Lê Văn D", role: "Tester" },
    { name: "Hoàng Thị E", role: "HR" },
    { name: "Nguyễn Van F", role: "Data Analyst" },
    { name: "Le Văn H", role: "Business Analyst" },
    { name: "Nguyen Van G", role: "Software Engineer" }
];
let currentPage = 1;
const perPage = 3;
function saveToLocalStorage() {
    localStorage.setItem("employees", JSON.stringify(employees));
}
function renderTable() {
    const table = document.getElementById("employeeTable");
    table.innerHTML = "";
    
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const pageData = employees.slice(start, end);
    
    pageData.forEach((employee, index) => {
        const row = `<tr>
            <td>${start + index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.role}</td>
        </tr>`;
        table.innerHTML += row;
    });
    
    renderPagination();
}
function renderPagination() {
    const totalPage = Math.ceil(employees.length / perPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";
    
    for (let i = 1; i <= totalPage; i++) {
        pagination.innerHTML += `<button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }
}
function changePage(page) {
    const totalPage = Math.ceil(employees.length / perPage);
    if (page >= 1 && page <= totalPage) {
        currentPage = page;
        renderTable();
    }
}
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
}
function nextPage() {
    const totalPage = Math.ceil(employees.length / perPage);
    if (currentPage < totalPage) {
        currentPage++;
        renderTable();
    }
}
function addEmployee() {
    const name = document.getElementById("nameInput").value.trim();
    const role = document.getElementById("roleInput").value.trim();
    if (name && role) {
        employees.push({ name, role });
        saveToLocalStorage();
        document.getElementById("nameInput").value = "";
        document.getElementById("roleInput").value = "";
        currentPage = Math.ceil(employees.length / perPage);
        renderTable();
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
}
renderTable();