function logout() {
  window.location.href = "Login.html";
}
async function AddEmployee() {
  let obj = {
    fNmae: document.getElementById("firstName").value,
    lName: document.getElementById("lastName").value,
    startWorkYear: document.getElementById("StartWorkYear").value,
    departmentId: document.getElementById("DepartmentID").value,
  };

  let fechParams = {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "content-Type": "application/json" },
  };
  let resp = await fetch("https://localhost:44333/api/employee", fechParams);
  let data = await resp.json();

  window.location.href = "employee.html";

  alert("Employee added successfully");
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
