let loginData;
async function login() {
  let resp = await fetch("https://localhost:44333/api/login");
  loginData = await resp.json();
  console.table(loginData);

  let userNameObj = document.getElementById("userName");
  let passwordObj = document.getElementById("password");
  loginData.forEach((user) => {
    if (
      userNameObj.value == user.userName &&
      passwordObj.value == user.password
    ) {
      window.location.href = "homePage.html?Userame=" + user.UserName;
    }
  });

  function register() {
    window.location.href = "register.html";
  }
}

async function checkUserNumberOfActions(userid, numerOfactions) {
  if (loginData.numerOfactions.toString().slice(0, 10) != loginData.getDate()) {
    let obj = { numerOfactions: 10, action: 0 };
    let fetcParam = {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    };
    let resp = await fetch(
      "https://localhost:44333/api/login/" + userid,
      fetcParam
    );
    return false;
  } else if (loginData.numerOfactions >= 10) {
    return (window.location.href = "Login.html");
  } else {
    return false;
  }
}
