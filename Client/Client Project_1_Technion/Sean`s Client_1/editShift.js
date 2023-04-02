let sid;
function logout() {
  window.location.href = "Login.html";
}

async function getEmpForEdit() {
  const param = new URLSearchParams(window.location.search);
  sid = param.get("id");
  let resp = await fetch("https://localhost:44333/api/shift/" + sid);
  let empData = await resp.json();
  console.table(empData);

  document.getElementById("date").value = empData.date;
  document.getElementById("startTime").value = empData.startTime;
  document.getElementById("endTime").value = empData.endTime;
}
async function saveEmp() {
  let obj = {
    date: document.getElementById("date").value,
    startTime: document.getElementById("startTime").value,
    endTime: document.getElementById("endTime").value,
  };

  let fetcParam = {
    method: "PUT",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  };

  let resp = await fetch("https://localhost:44333/api/shift/" + sid, fetcParam);
  let data = await resp.json();
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
