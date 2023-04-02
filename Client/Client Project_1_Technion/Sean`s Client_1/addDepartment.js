function logout() {
  window.location.href = "Login.html";
}
async function AddDepartment() {
  let obj = {
    depId: document.getElementById("nameOfDepartment").value,
    name: document.getElementById("manager").value,
    manager: document.getElementById("firstManager").value,
  };

  let fechParams = {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "content-Type": "application/json" },
  };
  let resp = await fetch("https://localhost:44333/api/department", fechParams);
  let data = await resp.json();
  alert("Department Added Successfully!");
  window.location.href = "department.html";
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

async function showUserNameInEveryPage() {
  const param = new URLSearchParams(window.location.search);
  user = param.get("Userame");
  let resp = await fetch("https://localhost:44333/api/login/" + user);
  let usersData = await resp.json();
  console.table(usersData);

  document.getElementById("Userame").innerText = usersData.userName;
}
