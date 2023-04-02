function logout() {
  window.location.href = "Login.html";
}
async function AddShift() {
  let obj = {
    sid: document.getElementById("sid").value,
    Date: document.getElementById("Date").value,
    startTime: document.getElementById("startTime").value,
    endTime: document.getElementById("EndTime").value,
  };

  let fechParams = {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "content-Type": "application/json" },
  };
  let resp = await fetch("https://localhost:44333/api/shift", fechParams);
  let data = await resp.json();
  alert("Created Shift");
  window.location.href = "shifts.html";
}

async function updateclickCounter() {
  let storage = localStorage.getItem("username");

  let fechParams = {
    method: "put",
    body: JSON.stringify(obj),
    headers: { "content-Type": "application/json" },
  };
  let resp = await fetch(
    "https://localhost:44333/api/login/" + storage,
    fechParams
  );
  let update = await resp.json();
}

let id;
async function getShiftForEdit() {
  const param = new URLSearchParams(window.location.search);
  id = param.get("id");
  let resp = await fetch("https://localhost:44333/api/shift/" + id);
  let shiftData = await resp.json();
  console.table(depData);
  document.getElementById("sid").value = shiftData.sid;
}
