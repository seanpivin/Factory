function logout() {
  window.location.href = "Login.html";
}
async function EmpData() {
  let resp = await fetch("https://localhost:44333/api/employee");
  let empData = await resp.json();
  console.table(empData);

  let tbodyObj = document.getElementById("tbldep");
  empData.forEach((x) => {
    let trObj = document.createElement("tr");

    let tdFirstNameObj = document.createElement("td");
    tdFirstNameObj.innerText = x.fNmae;

    let tdLastNameObj = document.createElement("td");
    tdLastNameObj.innerText = x.lName;

    let tdStartWorkYearObj = document.createElement("td");
    tdStartWorkYearObj.innerText = x.startWorkYear;

    let tdDepartmentIDObj = document.createElement("td");
    tdDepartmentIDObj.innerText = x.departmentId;

    let tdShiftsIDObj = document.createElement("td");
    tdShiftsIDObj.innerText = x.empShifts;

    let ulObj = document.createElement("ul");
    x.empShifts.forEach((shift) => {
      let liDateObj = document.createElement("li");
      liDateObj.innerText = shift.date;
      let liStartObj = document.createElement("li");

      liStartObj.innerText = shift.startTime;
      let liEndObj = document.createElement("li");

      liEndObj.innerText = shift.endTime;
      ulObj.appendChild(liDateObj);
      ulObj.appendChild(liStartObj);
      ulObj.appendChild(liEndObj);
    });
    tdShiftsIDObj.appendChild(ulObj);

    let buttonEObj = document.createElement("button");
    buttonEObj.innerHTML = "Edit";

    trObj.appendChild(buttonEObj);

    let buttonDObj = document.createElement("button");
    buttonDObj.innerHTML = "Delete";

    trObj.appendChild(buttonDObj);

    buttonDObj.onclick = async function () {
      let fechParams = {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
      };
      let respo = await fetch(
        "https://localhost:api/api/employee/" + x.empId,
        fechParams
      );
      let delData = await respo.json();

      tbodyObj.innerHTML = "";
    };

    buttonEObj.onclick = function () {
      window.location.href = "editEmployee.html?id=" + x.empId;
    };

    trObj.appendChild(tdFirstNameObj);
    trObj.appendChild(tdLastNameObj);
    trObj.appendChild(tdStartWorkYearObj);
    trObj.appendChild(tdDepartmentIDObj);
    trObj.appendChild(tdShiftsIDObj);

    tbodyObj.appendChild(trObj);
  });
}

function moveToAddEmployee() {
  window.location.href = "addNewEmployee.html";
}

function homePage() {
  window.location.href = "homePage.html";
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
