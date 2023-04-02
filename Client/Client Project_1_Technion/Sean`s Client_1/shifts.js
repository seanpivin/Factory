async function shiftData() {
  let resp = await fetch("https://localhost:44333/api/shift");
  let shiftData = await resp.json();
  console.table(shiftData);

  let tbodyObj = document.getElementById("tbldep");
  shiftData.forEach((x) => {
    let trObj = document.createElement("tr");

    let tdDateObj = document.createElement("td");
    tdDateObj.innerText = x.date;

    let tdStartTimeObj = document.createElement("td");
    tdStartTimeObj.innerText = x.startTime;

    let tdEndTimeObj = document.createElement("td");
    tdEndTimeObj.innerText = x.endTime;

    let tdShiftTimeObj = document.createElement("td");
    tdShiftTimeObj.innerText = x.fNmae;

    let tdFirstnameObj = document.createElement("td");
    tdFirstnameObj.innerText = x.lName;

    let buttonDObj = document.createElement("button");
    buttonDObj.innerHTML = "ADD";

    trObj.appendChild(buttonDObj);

    buttonDObj.onclick = function () {
      moveToAddShift();
    };

    trObj.appendChild(tdDateObj);
    trObj.appendChild(tdStartTimeObj);
    trObj.appendChild(tdEndTimeObj);
    trObj.appendChild(tdShiftTimeObj);
    trObj.appendChild(tdFirstnameObj);

    tbodyObj.appendChild(trObj);
  });
}

function moveToAddShift() {
  window.location.href = "addShift.html";
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
