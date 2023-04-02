let idE;
function logout() {
  window.location.href = "Login.html";
}

async function getEmpForEdit() {
  const param = new URLSearchParams(window.location.search);
  idE = param.get("id");
  let resp = await fetch("https://localhost:44333/api/employee/" + idE);
  let empData = await resp.json();
  console.table(empData);

  document.getElementById("fNmae").value = empData.fNmae;
  document.getElementById("lName").value = empData.lName;
  document.getElementById("startWorkYear").value = empData.startWorkYear;
  document.getElementById("departmentId").value = empData.departmentId;
}
async function saveEmp() {
  let obj = {
    fNmae: document.getElementById("fNmae").value,
    lName: document.getElementById("lName").value,
    startWorkYear: document.getElementById("startWorkYear").value,
    departmentId: document.getElementById("departmentId").value,
  };

  let fetcParam = {
    method: "PUT",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  };

  let resp = await fetch(
    "https://localhost:44333/api/employee/" + idE,
    fetcParam
  );
  let data = await resp.json();
  window.location.href = "employee.html";
}

let user;
async function showUserNameInEveryPage() {
  const param = new URLSearchParams(window.location.search);
  user = param.get("Userame");
  let resp = await fetch("https://localhost:44333/api/login/" + user);
  let usersData = await resp.json();
  console.table(usersData);

  document.getElementById("Userame").innerText = usersData.userName;
}
async function updateclickCounter() {
  let storage = localStorage.getItem("userName");

  let fechParams = {
    method: "put",
    headers: { "content-Type": "application/json" },
  };
  let resp = await fetch(
    "https://localhost:44333/api/login/" + storage,
    fechParams
  );
  let update = await resp.json();
}
