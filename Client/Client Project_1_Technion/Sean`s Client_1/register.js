async function createNewUser() {
  let obj = {
    fullName: document.getElementById("fName").value,
    userName: document.getElementById("userName").value,
    password: document.getElementById("password").value,
    numerOfactions: document.getElementById("numOfactions").value,
  };

  let fechParams = {
    method: "post",
    body: JSON.stringify(obj),
    headers: { "content-type": "application/json" },
  };
  let resp = await fetch("https://localhost:44333/api/login", fechParams);
  let newUser = await resp.json();

  window.location.href = "Login.html";
}
