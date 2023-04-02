let id;
async function getDepForEdit() {
  const param = new URLSearchParams(window.location.search);
  id = param.get("id");
  let resp = await fetch("https://localhost:44333/api/department/" + id);
  let depData = await resp.json();
  console.table(depData);
  document.getElementById("nameOfD").value = depData.depId;
  document.getElementById("manager").value = depData.name;
  document.getElementById("departmentId").value = depData.manager;
}
async function saveDep() {
  let obj = {
    depId: document.getElementById("nameOfD").value,
    name: document.getElementById("manager").value,
    manager: document.getElementById("departmentId").value,
  };

  let fetcParam = {
    method: "PUT",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  };

  let resp = await fetch(
    "https://localhost:44333/api/department/" + id,
    fetcParam
  );
  let data = await resp.json();
  window.location.href = "department.html";
}
function logout() {
  window.location.href = "Login.html";
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

let user;
async function showUserNameInEveryPage() {
  const param = new URLSearchParams(window.location.search);
  user = param.get("Userame");
  let resp = await fetch("https://localhost:44333/api/login/" + user);
  let usersData = await resp.json();
  console.table(usersData);

  document.getElementById("Userame").innerText = usersData.userName;
}
