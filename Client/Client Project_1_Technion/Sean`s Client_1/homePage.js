let user;
async function showUserNameInEveryPage() {
  const param = new URLSearchParams(window.location.search);
  user = param.get("username");
  let resp = await fetch("https://localhost:44333/api/login/" + user);
  let usersData = await resp.json();
  console.table(usersData);

  document.getElementById("Userame").innerText = usersData.fullName;
}

function logout() {
  window.location.href = "Login.html";
}
function moveToDepartment() {
  window.location.href = "department.html";
}
function moveToEmployee() {
  window.location.href = "employee.html";
}
function movseToShift() {
  window.location.href = "shifts.html";
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
