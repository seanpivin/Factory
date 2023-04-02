function logout() {
  window.location.href = "Login.html";
}
async function depData() {
  let resp = await fetch("https://localhost:44333/api/department");
  let depData = await resp.json();
  console.table(depData);

  let tbodyObj = document.getElementById("tbldep");
  depData.forEach((x) => {
    let trObj = document.createElement("tr");

    let tdDepObj = document.createElement("td");
    tdDepObj.innerText = x.depId;

    let tdManagerObj = document.createElement("td");
    tdManagerObj.innerText = x.name;

    let tdFirstNameObj = document.createElement("td");
    tdFirstNameObj.innerText = x.manager;

    let buttonEObj = document.createElement("button");
    buttonEObj.innerHTML = "Edit";

    trObj.appendChild(buttonEObj);

    let buttonDObj = document.createElement("button");
    buttonDObj.innerHTML = "Delete";

    trObj.appendChild(buttonDObj);

    buttonDObj.onclick = async function () {
      if (depData.manager > 0) {
        let fechParams = {
          method: "DELETE",
          headers: { "content-Type": "application/json" },
        };
        let respo = await fetch(
          "https://localhost:44333/api/department/" + x.depId,
          fechParams
        );
        let delData = await respo.json();

        alert("Department Deleted Successfully!");
      } else {
        alert("Departmet Is Not Empty & Can`t Be Deleted!");
      }
    };

    buttonEObj.onclick = function () {
      window.location.href = "editDepartment.html?id=" + x.depId;
    };

    trObj.appendChild(tdDepObj);
    trObj.appendChild(tdManagerObj);
    trObj.appendChild(tdFirstNameObj);

    tbodyObj.appendChild(trObj);
  });
}

function moveToAddDepartment() {
  window.location.href = "addDepartment.html";
}
function homePage() {
  window.location.href = "homePage.html";
}

async function showUserNameInEveryPage() {
  const param = new URLSearchParams(window.location.search);
  user = param.get("username");
  let resp = await fetch("https://localhost:44333/api/login/" + user);
  let usersData = await resp.json();
  console.table(usersData);

  document.getElementById("Userame").innerText = usersData.fullName;
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