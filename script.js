const checkUser = () => {
  let emailValue = document.getElementById("email").value;
  let passwordValue = document.getElementById("password").value;

  if (emailValue === "js" && passwordValue === "js") {
    alert("Вы вошли");
    let user = {
      email: emailValue,
      password: passwordValue,
    };
    localStorage.setItem("userValue", JSON.stringify(user));
    intLogin();
  } else {
    alert("Неправильно введён логин или пароль.");
  }

  console.log(emailValue);
  console.log(passwordValue);
};

const renderLogin = () => {
  let email = document.createElement("input");
  email.id = "email";
  let password = document.createElement("input");
  password.id = "password";

  let emailLabel = document.createElement("label");
  let passwordLabel = document.createElement("label");

  let p = document.createElement("p");
  let userValue = localStorage.getItem("userValue");
  //   p.innerHTML = userValue;
  console.log(userValue);

  emailLabel.innerHTML = "Введите email";
  emailLabel.id = "emailLabel";
  passwordLabel.innerHTML = "Введите password";
  passwordLabel.id = "passwordLabel";

  let button = document.createElement("button");
  button.innerHTML = "Войти";
  button.addEventListener("click", checkUser);

  document.body.append(emailLabel);
  document.body.append(document.createElement("br"));
  document.body.append(email);
  document.body.append(document.createElement("br"));
  document.body.append(passwordLabel);
  document.body.append(document.createElement("br"));
  document.body.append(password);
  document.body.append(button);
  document.body.append(p);
};

const intLogin = () => {
  localStorage.getItem("userValue")
    ? (document.body.innerHTML = "Добро пожаловать на главную страиницу")
    : renderLogin();
};

renderLogin();
